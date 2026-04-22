import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getAllPosts, getPost, formatDate } from '@/lib/posts'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post || !post.published) notFound()

  return (
    <>
      <header className="post-header">
        <div className="container container--narrow">
          <Link href="/writing" className="post-back">
            &larr; All posts
          </Link>
          <time className="eyebrow post-date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <h1 className="post-title">{post.title}</h1>
          {post.description && (
            <p className="post-description">{post.description}</p>
          )}
        </div>
      </header>

      <div className="post-body">
        <div className="container container--narrow">
          <div className="prose">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

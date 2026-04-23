import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, formatDate } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Thoughts on food manufacturing, technology, building things, and whatever else is on my mind.',
}

export default function WritingPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="page-hero">
        <div className="container container--text">
          <p className="eyebrow page-hero-eyebrow">Writing</p>
          <h1 className="page-hero-heading">Blog</h1>
          <p className="page-hero-desc">
            Thoughts on food manufacturing, technology, building things,
            and whatever else is on my mind.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--text">
          {posts.length === 0 ? (
            <p className="writing-empty">No posts yet — first one coming soon.</p>
          ) : (
            <ol className="essay-list">
              {posts.map((post) => (
                <li key={post.slug} className="essay-item">
                  <Link href={`/writing/${post.slug}`} className="essay-title-link">
                    {post.title}
                  </Link>
                  <time className="essay-date" dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>
    </>
  )
}

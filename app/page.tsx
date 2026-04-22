import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dale Cosgrove',
  description:
    'Projects & Performance Manager in food safety and quality. Tinkerer, builder, darts captain.',
}

const projects = [
  {
    title: 'Darts Performance Tracker',
    description:
      'My darts team needed a way to log results and track form over a season. I built an interactive scorer anyone in the team can use after a game. As captain I use the data to pick the best lineup. Same logic as work, different stakes.',
  },
  {
    title: 'Personal AI Assistant',
    description:
      'I run an OpenClaw build on a Raspberry Pi, connected to WhatsApp. I can text it a question from anywhere and get an answer. Built it because I wanted to understand what was actually happening under the hood, not just hand the question to a black box.',
  },
  {
    title: 'Smart Home',
    description:
      'Gradually automated most of the house over a few years. Less about convenience, more about understanding how the pieces fit together. It\'s the same itch: take a system apart, see what makes it work, put it back together better.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero paper-grain">
        <div className="container">
          <p className="eyebrow hero-eyebrow">Food manufacturing&nbsp;&nbsp;·&nbsp;&nbsp;Technology&nbsp;&nbsp;·&nbsp;&nbsp;Darts</p>
          <h1 className="hero-heading">
            Food manufacturing<br />
            by trade. Builder<br />
            by nature.
          </h1>
          <p className="lead hero-lead">
            I&rsquo;m a Projects &amp; Performance Manager in food safety and quality.
            Outside of work I tinker: home automation, Raspberry Pi projects,
            apps for things I actually need. If I don&rsquo;t understand how something
            works, I&rsquo;ll take it apart until I do.
          </p>
          <div className="hero-actions">
            <Link href="/about" className="btn btn-primary">About me</Link>
            <Link href="/writing" className="btn btn-secondary">Read the blog</Link>
          </div>
        </div>
      </section>

      {/* ── What I build ── */}
      <section className="section">
        <div className="container">
          <p className="eyebrow section-eyebrow">Projects</p>
          <h2 className="section-heading">Things I&rsquo;ve built</h2>
          <div className="work-grid">
            {projects.map((project) => (
              <div key={project.title} className="work-card">
                <h3 className="work-card-title">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I do ── */}
      <section className="section section--raised">
        <div className="container container--narrow">
          <p className="eyebrow section-eyebrow">Day job</p>
          <h2 className="section-heading">What I do professionally</h2>
          <div className="prose-block">
            <p>
              I&rsquo;ve spent 16 years in food manufacturing, starting on the packing
              line at minimum wage and working through pretty much every part of
              a food production environment. I&rsquo;ve never forgotten what it&rsquo;s like
              to be at the bottom of the org chart, and I&rsquo;d like to think that shows
              in how I work with people now.
            </p>
            <p>
              Today I manage projects and performance within food safety and quality.
              That means internal processes, best practice, and a lot of data. I turn
              numbers into stories that people can actually understand and act on.
              The analysis is secondary to the communication. If the insight doesn&rsquo;t
              land, it doesn&rsquo;t matter how good the data is.
            </p>
          </div>
        </div>
      </section>

      {/* ── Writing ── */}
      <section className="section">
        <div className="container container--text">
          <p className="eyebrow section-eyebrow">Writing</p>
          <h2 className="section-heading">From the blog</h2>
          <p className="writing-empty">
            First post coming soon. I&rsquo;ll write about the things I&rsquo;m working on,
            things I&rsquo;ve learned, and the occasional opinion on food, tech, or darts.
          </p>
          <Link href="/writing" className="all-writing-link">
            See all posts&nbsp;&rarr;
          </Link>
        </div>
      </section>
    </>
  )
}

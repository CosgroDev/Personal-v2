import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dale Cosgrove — AI × Food',
}

const essays = [
  {
    title: 'What AI can and can’t do for a restaurant group',
    date: 'March 2026',
    href: '/writing/ai-restaurant-groups',
  },
  {
    title: 'The data problem nobody talks about in food supply chains',
    date: 'February 2026',
    href: '/writing/food-supply-chain-data',
  },
  {
    title: 'Why most food companies aren’t ready for AI',
    date: 'January 2026',
    href: '/writing/food-companies-ai-readiness',
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero paper-grain">
        <div className="container">
          <p className="eyebrow hero-eyebrow">Independent operator&nbsp;&nbsp;·&nbsp;&nbsp;AI&nbsp;&times;&nbsp;food</p>
          <h1 className="hero-heading">
            I help food companies<br />
            think clearly about AI.
          </h1>
          <p className="lead hero-lead">
            Most food businesses know AI is changing their industry. Few have a clear
            sense of where to start, what to actually build, or what their organisation
            can absorb. I work across strategy, implementation, and education to close
            that gap.
          </p>
          <div className="hero-actions">
            <Link href="/work-together" className="btn btn-primary">
              Work with me
            </Link>
            <Link href="/about" className="btn btn-secondary">
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* ── What I do ── */}
      <section className="section">
        <div className="container">
          <p className="eyebrow section-eyebrow">Focus</p>
          <h2 className="section-heading">What I do</h2>
          <div className="work-grid">
            <div className="work-card">
              <h3 className="work-card-title">Strategy</h3>
              <p>
                I help leadership teams identify where AI creates real value in their
                operation&mdash;what to build, what to buy, and what to leave for later.
                Honest about what AI cannot do.
              </p>
            </div>
            <div className="work-card">
              <h3 className="work-card-title">Implementation</h3>
              <p>
                I work directly with your team to build and deploy AI tools that fit
                how you actually operate. Hands-on and specific to your context,
                not off-the-shelf.
              </p>
            </div>
            <div className="work-card">
              <h3 className="work-card-title">Education</h3>
              <p>
                Workshops for teams at every level&mdash;board briefings, operator
                sessions, technical deep dives. I make AI legible without making
                it sound magical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Writing ── */}
      <section className="section section--raised">
        <div className="container container--text">
          <p className="eyebrow section-eyebrow">Writing</p>
          <h2 className="section-heading">Recent essays</h2>
          <ol className="essay-list">
            {essays.map((essay) => (
              <li key={essay.href} className="essay-item">
                <Link href={essay.href} className="essay-title-link">
                  {essay.title}
                </Link>
                <time className="essay-date">{essay.date}</time>
              </li>
            ))}
          </ol>
          <Link href="/writing" className="all-writing-link">
            All essays&nbsp;&rarr;
          </Link>
        </div>
      </section>
    </>
  )
}

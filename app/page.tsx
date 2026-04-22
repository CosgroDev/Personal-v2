import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dale Cosgrove',
  description:
    'Projects & Performance Manager at FBC UK. Food safety, data, systems, and building things.',
}

const workProjects = [
  {
    title: 'Supplier Assurance Stage and Gate',
    description:
      'A digital stage-gate system to manage the approval of new raw materials and packaging. Guides users through structured approval stages, capturing approvals, documentation, and risk assessments at each gate, with logic for conditional steps based on material type.',
  },
  {
    title: 'Audit and Incident Management',
    description:
      'A platform to manage internal audits, incidents, and corrective actions in one place. Teams raise issues, assign ownership, track corrective actions, and monitor closure timelines, linked to root cause analysis to surface recurring and systemic problems.',
  },
  {
    title: 'Complaints Insight Engine',
    description:
      'A Python data analysis pipeline that explores complaint trends across multiple manufacturing sites. Uses topic modelling and clustering to identify recurring themes in complaint narratives, moving beyond surface metrics to uncover patterns that inform product and manufacturing decisions.',
  },
  {
    title: 'Food Safety Data Transformation',
    description:
      'Tools and dashboards that transform operational data from audits, incidents, and performance indicators into structured datasets. Turns day-to-day factory activity into measurable trends, shifting quality and food safety from reactive reporting toward proactive risk management.',
  },
]

const sideProjects = [
  {
    title: 'West Green Darts',
    description:
      'A mobile-first web app for managing my darts team. Handles fixtures, live 501 scoring with finish guidance, player profiles, and tracks 18+ performance metrics per player. In active use by the team, with ongoing refinements to the scoring engine and statistics dashboard based on real-world feedback.',
  },
  {
    title: 'Automated Data Pipelines',
    description:
      'Python-based tools that use API calls to gather data automatically from multiple sources, scheduled with CRON jobs to keep everything current. The aim is live, reliable data feeding into dashboards and decisions rather than periodic manual exports.',
  },
  {
    title: 'AI-Augmented Learning',
    description:
      'AI has changed how fast I can pick things up. The skill is not just using the tools. It is knowing how to work with them: structuring problems clearly, iterating on outputs, and critically evaluating what comes back rather than accepting it at face value. That approach has let me move into Python, web development, and data pipeline work far faster than I could have otherwise.',
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
            I&rsquo;m a Projects &amp; Performance Manager at FBC UK, one of the UK&rsquo;s
            largest biscuit manufacturers, working in food safety and quality.
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

      {/* ── Work projects ── */}
      <section className="section">
        <div className="container">
          <p className="eyebrow section-eyebrow">Work</p>
          <h2 className="section-heading">Things I&rsquo;ve built professionally</h2>
          <div className="work-grid work-grid--2col">
            {workProjects.map((project) => (
              <div key={project.title} className="work-card">
                <h3 className="work-card-title">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Side projects ── */}
      <section className="section section--raised">
        <div className="container">
          <p className="eyebrow section-eyebrow">Projects</p>
          <h2 className="section-heading">Things I build outside work</h2>
          <div className="work-grid">
            {sideProjects.map((project) => (
              <div key={project.title} className="work-card">
                <h3 className="work-card-title">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Background ── */}
      <section className="section">
        <div className="container container--narrow">
          <p className="eyebrow section-eyebrow">Background</p>
          <h2 className="section-heading">Who I am</h2>
          <div className="prose-block">
            <p>
              I work in food manufacturing with a focus on quality, food safety,
              and improving how systems operate in real production environments.
              I specialise in HACCP, risk assessment, and food safety frameworks
              including BRCGS and retailer standards, with 16 years of hands-on
              experience across pretty much every part of a food production operation,
              starting on the packing line and working up from there.
            </p>
            <p>
              My approach centres on making systems work better: simplifying,
              structuring, and making processes easier for teams to use while still
              meeting modern food safety and quality standards. A key part of that is
              turning day-to-day factory activity into structured data that actually
              tells a story, and then making sure that story reaches the people who
              need to act on it.
            </p>
            <p>
              I&rsquo;ve spent six years working with the Microsoft Power Platform,
              building production Power Apps and Power Automate flows that are in
              active use across the business every day. More recently I&rsquo;ve been
              working in Python, building data pipelines and analysis tools that go
              further than what the platform allows.
            </p>
          </div>
        </div>
      </section>

      {/* ── Writing ── */}
      <section className="section section--raised">
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

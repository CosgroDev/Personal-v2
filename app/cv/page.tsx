import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CV',
  description:
    'Dale Cosgrove — Quality Performance & Projects Manager at FBC UK. 16 years in food manufacturing.',
}

const careerTimeline = [
  { period: 'Sep 2025 – Present',  role: 'Quality Performance & Projects Manager', company: "Fox's Burton's Companies (FBC UK)" },
  { period: 'Apr 2021 – Sep 2025', role: 'Supply Chain Technical Lead',            company: "Fox's Burton's Companies (FBC UK)" },
  { period: 'Aug 2020 – Apr 2021', role: 'Quality Assurance Manager',              company: "Fox's Biscuits" },
  { period: 'Mar 2020 – Apr 2021', role: 'Raw Materials Manager',                  company: "Fox's Biscuits" },
  { period: 'Mar 2015 – Mar 2020', role: 'Technical Assistant',                    company: 'Yorkshire Premier Meat' },
  { period: 'Jul 2013 – Mar 2015', role: 'Quality Control',                        company: 'Yorkshire Premier Meat' },
  { period: 'May 2011 – Jul 2013', role: 'Despatch Operative',                     company: 'Yorkshire Premier Meat' },
  { period: 'Jun 2009 – Sep 2009', role: "Driver's Mate",                          company: 'DHL' },
]

const experience = [
  {
    role: 'Quality Performance & Projects Manager',
    company: "Fox's Burton's Companies (FBC UK)",
    period: 'Sep 2025 – Present',
    duration: '6 months',
    location: 'Batley, England, UK',
    description:
      "Leading quality performance and project delivery across FBC UK, one of the UK's largest biscuit manufacturers. Responsible for driving operational improvement through structured project management, data-led performance tracking, and cross-functional collaboration.",
    achievements: [
      'Driving quality KPI performance through Microsoft Power BI dashboards and data visualisation',
      'Managing cross-functional improvement projects spanning quality, safety, and operational efficiency',
      'Developing project management frameworks suited to the food manufacturing environment',
      'Facilitating audit readiness, compliance initiatives, and ways-of-working improvements',
    ],
    tags: ['Project Management', 'Power BI'],
  },
  {
    role: 'Supply Chain Technical Lead',
    company: "Fox's Burton's Companies (FBC UK)",
    period: 'Apr 2021 – Sep 2025',
    duration: '4 years 5 months',
    location: 'Batley, England, UK',
    description:
      'Technical lead for supply chain operations, bridging food safety, quality systems, and digital tooling. Championed low-code development solutions and SharePoint-based systems to modernise supplier and ingredient management processes.',
    achievements: [
      'Built and deployed low-code tools via Microsoft Power Apps to streamline supply chain workflows',
      'Managed SharePoint Online environments for supplier documentation and technical data',
      'Led supplier assurance and raw material technical compliance programmes',
      'Drove digitalisation of supply chain quality documentation, reducing manual workload',
    ],
    tags: ['SharePoint Online', 'Low-code Development', 'Supply Chain'],
  },
  {
    role: 'Quality Assurance Manager',
    company: "Fox's Biscuits",
    period: 'Aug 2020 – Apr 2021',
    duration: '8 months',
    location: 'Batley, England, UK',
    description:
      'Managed the quality assurance function at site level, overseeing food safety systems, audit programmes, and compliance against BRC and customer standards within a high-volume biscuit manufacturing environment.',
    achievements: [
      'Maintained and improved HACCP plans and food safety management systems',
      'Managed internal and third-party audit schedules and outcomes',
      'Led non-conformance investigations and drove corrective action programmes',
      'Delivered quality and food safety training to production and technical teams',
    ],
    tags: ['Quality Assurance', 'Risk Assessment'],
  },
  {
    role: 'Raw Materials Manager',
    company: "Fox's Biscuits",
    period: 'Mar 2020 – Apr 2021',
    duration: '1 year 1 month',
    location: 'Batley, England, UK',
    description:
      'Responsible for the technical management of raw materials across site, ensuring ingredient compliance, allergen controls, and supplier assurance in line with BRC and customer requirements.',
    achievements: [
      'Managed raw material specifications, approvals, and supplier technical documentation',
      'Maintained allergen controls and ingredient risk assessments',
      'Coordinated with procurement and production to resolve raw material quality issues',
    ],
    tags: ['Allergens', 'Risk Assessment'],
  },
  {
    role: 'Technical Assistant',
    company: 'Yorkshire Premier Meat',
    period: 'Mar 2015 – Mar 2020',
    duration: '5 years',
    location: 'South Kirkby, West Yorkshire, UK',
    description:
      'Provided technical support across food safety, quality control, and compliance functions within a meat processing operation. Developed expertise in HACCP, food microbiology, and regulatory compliance.',
    achievements: [
      'Supported HACCP development and review processes across the site',
      'Conducted microbiological and environmental monitoring programmes',
      'Assisted with BRC and customer audits, delivering positive outcomes',
      'Risk assessed processes and raw materials to maintain food safety standards',
    ],
    tags: ['Food Microbiology', 'HACCP', 'Risk Assessment'],
  },
  {
    role: 'Quality Control',
    company: 'Yorkshire Premier Meat',
    period: 'Jul 2013 – Mar 2015',
    duration: '1 year 8 months',
    location: 'South Kirkby, West Yorkshire, UK',
    description:
      'Carried out quality control checks across production to ensure product met specification, legal, and customer requirements within a meat processing environment.',
    achievements: [
      'Performed product checks, weight monitoring, and label verification',
      'Identified and escalated non-conforming product in line with site procedures',
      'Supported food safety and hygiene standards on the production floor',
    ],
    tags: ['Quality Control', 'Food Safety'],
  },
  {
    role: 'Despatch Operative',
    company: 'Yorkshire Premier Meat',
    period: 'May 2011 – Jul 2013',
    duration: '2 years 2 months',
    location: 'South Kirkby, West Yorkshire, UK',
    description:
      'Managed outbound logistics and despatch operations within a chilled food manufacturing environment.',
    achievements: [
      'Coordinated order picking, loading, and despatch of chilled products',
      'Maintained cold chain integrity and traceability documentation',
    ],
    tags: ['Logistics', 'Food Manufacturing'],
  },
  {
    role: "Driver's Mate",
    company: 'DHL',
    period: 'Jun 2009 – Sep 2009',
    duration: '3 months',
    location: 'Normanton, West Yorkshire, UK',
    description: 'Supported delivery operations as a driver\'s mate for a national logistics provider.',
    achievements: [
      'Assisted with delivery of parcels and goods across regional routes',
      'Maintained accurate delivery documentation and customer receipts',
    ],
    tags: ['Logistics'],
  },
]

const skills = [
  {
    group: 'Industry Knowledge',
    items: ['Food Manufacturing', 'Food Safety Management', 'HACCP', 'Food Microbiology', 'Allergen Controls', 'Food Science', 'Food Technology', 'Meat Processing', 'Dairy Products'],
  },
  {
    group: 'Quality & Compliance',
    items: ['BRCGS Standards', 'Lead Auditing', 'Quality Assurance', 'Quality Control', 'Regulatory Compliance', 'Risk Assessment', 'Root Cause Analysis', 'Supplier Assurance'],
  },
  {
    group: 'Leadership & Management',
    items: ['Project Management', 'Process Improvement', 'Continuous Improvement', 'Stakeholder Management', 'KPI Development', 'Training & Development', 'Change Management'],
  },
  {
    group: 'Technology & Data',
    items: ['Microsoft Power BI', 'SharePoint Online', 'Microsoft Power Apps', 'Low-code Development', 'Data Analysis', 'Data Visualisation', 'Microsoft Teams', 'Python'],
  },
  {
    group: 'Supply Chain',
    items: ['Supply Chain Technical', 'Raw Materials Management', 'Supplier Management', 'Traceability'],
  },
]

const certifications = [
  { grade: 'Distinction',    title: 'Food Safety Level 4',      issuer: 'Highfield', date: 'Jul 2021' },
  { grade: 'Certification',  title: 'BRCGS Lead Auditor',        issuer: 'BRCGS',     date: 'Feb 2021' },
  { grade: 'Certification',  title: 'HACCP Level 4',             issuer: 'Highfield', date: 'Nov 2020' },
  { grade: 'Certification',  title: 'Implementing FSSC 22000',   issuer: '',          date: 'Apr 2026' },
]

const education = [
  {
    type: 'Further Education',
    title: 'Commercial Business & Photography',
    institution: 'Wakefield College (Leeds Met Campus)',
    years: '2009 – 2011',
  },
  {
    type: 'Further Education',
    title: 'BTEC National Diploma: Art & Design, Photography, Graphics & Fine Art',
    institution: 'Barnsley College',
    years: '2007 – 2009',
  },
]

export default function CVPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="page-hero paper-grain">
        <div className="container">
          <p className="eyebrow page-hero-eyebrow">Curriculum Vitae</p>
          <h1 className="cv-name">Dale Cosgrove</h1>
          <p className="cv-current-role">
            Quality Performance &amp; Projects Manager&nbsp;&nbsp;·&nbsp;&nbsp;Fox&rsquo;s Burton&rsquo;s Companies (FBC UK)
          </p>
        </div>
      </section>

      {/* ── Profile ── */}
      <section className="section">
        <div className="container container--narrow">
          <p className="eyebrow section-eyebrow">Profile</p>
          <h2 className="section-heading">Summary</h2>
          <div className="prose-block">
            <p>
              Technical lead working in food manufacturing with a focus on quality,
              food safety, and improving how systems operate in real production environments.
              Specialising in HACCP, risk assessment, and food safety frameworks such as
              BRCGS and retailer standards, with hands-on experience implementing practical
              controls across manufacturing operations.
            </p>
            <p>
              My approach is centred on making systems work better: simplifying, structuring,
              and making processes easier for teams to use while still meeting modern food safety
              and quality standards. A key part of my work is turning day-to-day factory activity
              into structured, trendable data that actually tells a story, from digitising audits
              and building operational tools to analysing root causes and performance trends.
            </p>
            <p>
              I enjoy working at the intersection of operations, quality, and data. The goal is
              always the same: practical systems that support teams on the floor, improve
              decision-making, and strengthen food safety without adding unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      {/* ── Career Timeline ── */}
      <section className="section section--raised">
        <div className="container container--text">
          <p className="eyebrow section-eyebrow">Timeline</p>
          <h2 className="section-heading">Career history</h2>
          <ul className="cv-timeline">
            {careerTimeline.map((item) => (
              <li key={item.period + item.role} className="cv-timeline-item">
                <span className="cv-timeline-date">{item.period}</span>
                <span className="cv-timeline-info">
                  <span className="cv-timeline-role">{item.role}</span>
                  <span className="cv-timeline-company">{item.company}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="section">
        <div className="container container--text">
          <p className="eyebrow section-eyebrow">Experience</p>
          <h2 className="section-heading">Roles in full</h2>
          <div className="cv-roles">
            {experience.map((job) => (
              <div key={job.role + job.period} className="cv-role">
                <h3 className="cv-role-title">{job.role}</h3>
                <p className="cv-role-meta">
                  <span>{job.company}</span>
                  <span className="cv-role-meta-sep">&nbsp;·&nbsp;</span>
                  <span>{job.period}</span>
                  <span className="cv-role-meta-sep">&nbsp;·&nbsp;</span>
                  <span>{job.duration}</span>
                  <span className="cv-role-meta-sep">&nbsp;·&nbsp;</span>
                  <span>{job.location}</span>
                </p>
                <p className="cv-role-desc">{job.description}</p>
                <ul className="cv-achievements">
                  {job.achievements.map((ach) => (
                    <li key={ach}>
                      <span className="cv-achievement-arrow">&rarr;</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
                <div className="cv-tags">
                  {job.tags.map((tag) => (
                    <span key={tag} className="cv-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="section section--raised">
        <div className="container">
          <p className="eyebrow section-eyebrow">Skills</p>
          <h2 className="section-heading">Areas of expertise</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.group} className="skills-group">
                <p className="eyebrow skills-group-title">{group.group}</p>
                <div className="skills-tags">
                  {group.items.map((skill) => (
                    <span key={skill} className="cv-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="section">
        <div className="container">
          <p className="eyebrow section-eyebrow">Certifications</p>
          <h2 className="section-heading">Qualifications</h2>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="cert-card">
                <p className="eyebrow cert-grade">{cert.grade}</p>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-meta">
                  {cert.issuer ? <>{cert.issuer}&nbsp;·&nbsp;</> : null}{cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="section section--raised">
        <div className="container container--text">
          <p className="eyebrow section-eyebrow">Education</p>
          <h2 className="section-heading">Academic background</h2>
          <ul className="edu-list">
            {education.map((edu) => (
              <li key={edu.title} className="edu-item">
                <p className="eyebrow edu-type">{edu.type}</p>
                <h3 className="edu-title">{edu.title}</h3>
                <p className="edu-meta">{edu.institution}&nbsp;·&nbsp;{edu.years}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

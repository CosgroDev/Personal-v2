import Link from 'next/link'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-wordmark">
          Dale Cosgrove
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="nav-links">
            <li><Link href="/writing">writing</Link></li>
            <li><Link href="/cv">cv</Link></li>
            <li><Link href="/work-together">work together</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

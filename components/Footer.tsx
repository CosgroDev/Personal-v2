export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          &copy; {year} Dale Cosgrove
        </p>
        <ul className="footer-links">
          <li>
            <a
              href="https://linkedin.com/in/dalecosgrove"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:dale@dalecosgrove.com">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

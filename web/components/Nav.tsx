import Link from "next/link";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/#top" className="brand">
          <img src="/assets/pulse-logo.png" alt="Pulse" />
          <span>Pulse</span>
        </Link>
        <nav className="nav-links">
          <Link href="/#features">Features</Link>
          <Link href="/#specs">Specs</Link>
          <Link href="/#download">Download</Link>
        </nav>
        <Link href="/#download" className="nav-cta">
          Get Pulse — Free
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 2v9m0 0 3.5-3.5M8 11 4.5 7.5M2.5 13.5h11" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

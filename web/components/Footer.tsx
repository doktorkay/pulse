import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <img src="/assets/pulse-logo.png" alt="" />
              <span>Pulse</span>
            </div>
            <p>
              The remarkably fast, lightweight, native audio player for macOS — built for massive
              local libraries.
            </p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/#specs">Tech specs</Link></li>
              <li><Link href="/#download">Download</Link></li>
              <li><Link href="/acknowledgements#release-notes">Release notes</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/acknowledgements#shortcuts">Keyboard shortcuts</Link></li>
              <li><Link href="/acknowledgements#m3u">M3U import guide</Link></li>
              <li><Link href="/acknowledgements#faq">FAQ</Link></li>
              <li><a href="mailto:hello@pulse.app">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/acknowledgements">Acknowledgements</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-foot">
          <span>© {new Date().getFullYear()} Pulse Audio Labs — All audio belongs to its rightful owners.</span>
          <span>v1.0 · macOS 15+</span>
        </div>
      </div>
    </footer>
  );
}

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Terms — Pulse" };

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="doc">
        <div className="container">
          <h1>Terms of Use</h1>
          <div className="meta">Pulse Audio Labs · Last updated 13 May 2026</div>

          <p>
            These terms govern your use of the Pulse website (<code>pulse.app</code>) and the Pulse
            macOS application. By downloading or using Pulse, you agree to these terms. If you do
            not agree, do not install or use the app.
          </p>

          <h2>1. The app</h2>
          <p>
            Pulse is a native macOS audio player distributed free of charge by Pulse Audio Labs.
            The app is provided as a signed DMG and updates itself via the Sparkle framework. Pulse
            is intended to play music files that you legitimately own and have stored on your own
            Mac.
          </p>

          <h2>2. License</h2>
          <p>
            We grant you a personal, worldwide, royalty-free, non-exclusive,
            non-transferable license to install and use Pulse on Macs you own or control, for
            personal, non-commercial purposes. You may not:
          </p>
          <ul>
            <li>resell, sublicense, or rent the app;</li>
            <li>
              reverse-engineer, decompile, or disassemble the binary, except to the limited extent
              permitted by mandatory law;
            </li>
            <li>
              remove or alter any copyright, trademark, or attribution notices contained in the
              app.
            </li>
          </ul>
          <p>
            Pulse may include third-party components released under their own open-source licenses;
            see <a href="/acknowledgements">Acknowledgements</a> for details.
          </p>

          <h2>3. Your content</h2>
          <p>
            Pulse never uploads your music, metadata, playlists, or artwork to any server. Anything
            you import or create inside the app stays on your Mac. You are solely responsible for
            ensuring that you have the right to use any file you import into Pulse, and for
            complying with the licensing terms of the music you own.
          </p>

          <h2>4. No warranty</h2>
          <p>
            Pulse is provided <strong>&quot;as is&quot;</strong> and <strong>&quot;as
            available&quot;</strong>, without warranties of any kind, either express or implied,
            including but not limited to fitness for a particular purpose, merchantability,
            non-infringement, or uninterrupted operation. You use the app at your own risk and are
            responsible for keeping your own backups of your music library.
          </p>

          <h2>5. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Pulse Audio Labs shall not be liable
            for any indirect, incidental, special, consequential, or punitive damages, including
            without limitation loss of profits, data, music files, use, goodwill, or other
            intangible losses resulting from your use of (or inability to use) the app.
          </p>

          <h2>6. Updates</h2>
          <p>
            We may release new versions of Pulse from time to time, delivered through Sparkle.
            Updates may add features, fix bugs, or change behaviour. Major changes that affect this
            agreement will be announced on the website.
          </p>

          <h2>7. Termination</h2>
          <p>
            You may stop using Pulse at any time by deleting it from your Mac. We may terminate
            your right to use the app if you materially breach these terms; in that case you must
            delete all copies of Pulse from your Mac.
          </p>

          <h2>8. Governing law</h2>
          <p>
            These terms are governed by the laws of Italy, without regard to its conflict-of-laws
            rules. Any dispute will be subject to the exclusive jurisdiction of the competent
            courts of the place where Pulse Audio Labs has its registered office, except where
            mandatory consumer-protection law grants you the right to bring proceedings before the
            courts of your place of residence.
          </p>

          <h2>9. Contact</h2>
          <p>
            Questions? Write to <a href="mailto:hello@pulse.app">hello@pulse.app</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Privacy — Pulse" };

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="doc">
        <div className="container">
          <h1>Privacy Policy</h1>
          <div className="meta">Pulse Audio Labs · Last updated 13 May 2026</div>

          <p>
            This privacy policy explains what information we collect when you visit
            <code> pulse.app</code> and when you download the Pulse macOS app, why we collect it,
            and the rights you have over it. Pulse is built on a simple principle: the less data we
            handle, the better. The app itself collects nothing.
          </p>

          <h2>1. Who we are</h2>
          <p>
            The data controller is <strong>Pulse Audio Labs</strong>, an Italian independent
            software studio. You can reach us at{" "}
            <a href="mailto:hello@pulse.app">hello@pulse.app</a> for any privacy-related question.
          </p>

          <h2>2. What we collect on this website</h2>
          <h3>2.1 Email address (download form)</h3>
          <p>
            When you submit your email through the &quot;Enable download&quot; form, we store:
          </p>
          <ul>
            <li>the email address itself;</li>
            <li>a timestamp of the submission;</li>
            <li>
              your IP address and browser User-Agent, kept only for the purpose of preventing abuse
              of the form (rate-limiting, spam detection).
            </li>
          </ul>
          <p>
            We use this information only to (a) deliver the DMG link, (b) send you occasional
            notifications about new major releases of Pulse, and (c) keep an internal count of how
            many people downloaded the app. We do <strong>not</strong> sell, rent, share, or
            otherwise transfer this data to any third party.
          </p>

          <h3>2.2 Server logs</h3>
          <p>
            Our hosting provider (Vercel Inc.) records standard HTTP access logs that include IP
            addresses, request paths, and timestamps. These logs are kept for a short retention
            window and are used solely for operational security and debugging.
          </p>

          <h3>2.3 No cookies, no analytics</h3>
          <p>
            This site sets <strong>no tracking cookies</strong> and uses <strong>no third-party
            analytics</strong>. The only client-side storage we use is a <code>localStorage</code>{" "}
            entry called <code>pulse:email</code>, which remembers that you have already unlocked
            the download so you don&apos;t have to enter your email again. You can clear it at any
            time through your browser&apos;s site-data settings.
          </p>

          <h2>3. What the Pulse macOS app collects</h2>
          <p>
            <strong>Nothing.</strong> Pulse is a fully local, offline-first audio player. Your
            library, metadata, listening history, playlists, and artwork never leave your Mac. The
            app performs <strong>no telemetry, no analytics, and no crash reporting</strong> calls
            to our servers. The only network requests the app makes are to the Sparkle update feed,
            in order to check whether a newer version of Pulse is available; that request contains
            only the app version and your macOS version.
          </p>

          <h2>4. Legal basis (GDPR)</h2>
          <p>
            We process your email under <em>art. 6(1)(a) GDPR — your explicit consent</em>, which
            you give by checking the consent box and submitting the form. We process server logs
            under <em>art. 6(1)(f) GDPR — legitimate interest</em> in operating a secure service.
          </p>

          <h2>5. How long we keep your data</h2>
          <ul>
            <li>
              <strong>Email address:</strong> until you ask us to delete it, or until we decide to
              discontinue Pulse — whichever comes first.
            </li>
            <li>
              <strong>Server logs:</strong> 30 days, then automatically discarded by our hosting
              provider.
            </li>
          </ul>

          <h2>6. Your rights</h2>
          <p>You can, at any time and free of charge:</p>
          <ul>
            <li>ask for a copy of the data we hold about you;</li>
            <li>ask us to correct it;</li>
            <li>ask us to delete it (right to be forgotten);</li>
            <li>withdraw your consent and unsubscribe from release notifications.</li>
          </ul>
          <p>
            To exercise any of these rights, email{" "}
            <a href="mailto:hello@pulse.app">hello@pulse.app</a> with the subject &quot;Privacy
            request&quot;. We reply within 30 days.
          </p>

          <h2>7. Where your data lives</h2>
          <p>
            The website is hosted on Vercel infrastructure (predominantly in the EU region). Email
            submissions are stored as plain text records on the server. We do not transfer your
            data outside of the EU/EEA except as strictly necessary for the operation of our
            hosting provider.
          </p>

          <h2>8. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The &quot;Last updated&quot; date at the
            top of the page always reflects the most recent revision. Material changes will be
            announced on the homepage.
          </p>

          <h2>9. Contact</h2>
          <p>
            Pulse Audio Labs · Italy ·{" "}
            <a href="mailto:hello@pulse.app">hello@pulse.app</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

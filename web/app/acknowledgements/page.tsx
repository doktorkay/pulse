import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Acknowledgements — Pulse" };

export default function AcknowledgementsPage() {
  return (
    <>
      <Nav />
      <main className="doc">
        <div className="container">
          <h1>Acknowledgements</h1>
          <div className="meta">Open-source components, credits & resources</div>

          <p>
            Pulse stands on the shoulders of giants. We&apos;re grateful to the maintainers of
            every project listed below — without their work, building a native macOS audio player
            of this quality would not have been possible.
          </p>

          <h2 id="oss">Open-source software</h2>
          <ul>
            <li>
              <strong>Sparkle</strong> — auto-update framework for macOS.{" "}
              <a href="https://sparkle-project.org/" target="_blank" rel="noreferrer">
                sparkle-project.org
              </a>{" "}
              · MIT License.
            </li>
            <li>
              <strong>SQLite</strong> &amp; the <strong>FTS5</strong> extension — powering Pulse&apos;s
              instant search.{" "}
              <a href="https://sqlite.org/" target="_blank" rel="noreferrer">
                sqlite.org
              </a>{" "}
              · Public Domain.
            </li>
            <li>
              <strong>GRDB.swift</strong> — Swift wrapper for SQLite.{" "}
              <a href="https://github.com/groue/GRDB.swift" target="_blank" rel="noreferrer">
                github.com/groue/GRDB.swift
              </a>{" "}
              · MIT License.
            </li>
            <li>
              <strong>Inter</strong> &amp; <strong>JetBrains Mono</strong> — the two typefaces used
              across the website and inside the app. Both released under the SIL Open Font License.
            </li>
          </ul>

          <h2 id="apple">Apple frameworks</h2>
          <p>
            Pulse is built directly on the macOS native stack: <code>SwiftUI</code>,{" "}
            <code>AVFoundation</code> (and <code>AVQueuePlayer</code> for gapless playback),{" "}
            <code>CoreAudio</code>, <code>FSEvents</code> for live library indexing, and{" "}
            <code>MPNowPlayingInfoCenter</code> for system-wide integration with Control Center,
            media keys, and the Touch Bar.
          </p>

          <h2 id="shortcuts">Keyboard shortcuts</h2>
          <ul>
            <li><code>Space</code> — Play / Pause</li>
            <li><code>⌘ →</code> / <code>⌘ ←</code> — Next / Previous track</li>
            <li><code>⌘ ↑</code> / <code>⌘ ↓</code> — Volume up / down</li>
            <li><code>⌘ F</code> — Focus search</li>
            <li><code>⌘ N</code> — New playlist</li>
            <li><code>⌘ I</code> — Show track info / inspector</li>
            <li><code>⌘ R</code> — Reveal file in Finder</li>
            <li><code>⌘ ,</code> — Preferences</li>
          </ul>

          <h2 id="m3u">M3U import guide</h2>
          <p>
            Pulse imports standard <code>.m3u</code> and <code>.m3u8</code> playlists with
            absolute or relative file paths. To import:
          </p>
          <ol>
            <li>Open Pulse and select the <em>Playlists</em> sidebar section.</li>
            <li>
              Drag your <code>.m3u</code> file onto the sidebar, or use <code>File ▸ Import
              Playlist…</code>.
            </li>
            <li>
              Pulse resolves each entry against the tracks currently in your library; missing files
              are highlighted so you can re-link them manually.
            </li>
          </ol>

          <h2 id="faq">FAQ</h2>
          <h3>Does Pulse stream music?</h3>
          <p>
            No. Pulse plays only files you have locally on your Mac. It&apos;s designed as the
            opposite of a streaming app.
          </p>
          <h3>Does Pulse modify my music files?</h3>
          <p>
            No. Pulse reads tags and audio data but never writes back to the original files unless
            you explicitly ask it to (e.g. via &quot;Edit tags…&quot;).
          </p>
          <h3>Which formats are supported?</h3>
          <p>
            MP3, M4A, AAC, and WAV — decoded natively through Apple&apos;s CoreAudio. Additional
            formats (FLAC, OGG) are on the roadmap.
          </p>
          <h3>Where is my library data stored?</h3>
          <p>
            In <code>~/Library/Application Support/Pulse/</code>. The SQLite index lives there;
            your actual music files are never moved or copied.
          </p>

          <h2 id="release-notes">Release notes</h2>
          <p>
            <strong>1.0 — May 2026.</strong> Initial public release. Massive-library scanning via
            FSEvents, native 3-pane layout, instant FTS5 search, gapless playback via
            AVQueuePlayer, media keys + Control Center integration, M3U import, Sparkle in-app
            updates.
          </p>

          <h2>Thanks</h2>
          <p>
            Finally, thanks to the early testers who patiently fed Pulse libraries of tens of
            thousands of tracks and helped us tune every millisecond.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

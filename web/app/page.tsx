import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DownloadGate from "@/components/DownloadGate";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="hero-eyebrow">
              <span className="dot" />
              Built natively for Apple Silicon · macOS 15 Sequoia
            </div>
            <h1>
              Your music library, <span className="accent">remarkably fast,</span> finally native.
            </h1>
            <p className="lede">
              Dust off your MP3, AAC, and WAV archives. No cloud subscriptions, no internet, zero
              distractions — just peak performance focused entirely on your music.
            </p>
            <div className="hero-ctas">
              <a href="#download" className="btn-primary">
                Download the free DMG
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    d="M8 2v9m0 0 3.5-3.5M8 11 4.5 7.5M2.5 13.5h11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#features" className="btn-ghost">
                See what&apos;s inside →
              </a>
            </div>
            <div className="hero-meta">
              <span>Universal Binary</span>
              <span className="sep">·</span>
              <span>Sparkle in-app updates</span>
              <span className="sep">·</span>
              <span>Zero telemetry</span>
              <span className="sep">·</span>
              <span>60 / 120 fps scrolling</span>
            </div>
          </div>

          <div className="mockup-wrap">
            <div className="mockup">
              <img
                src="/assets/pulse-screen.png"
                alt="Pulse — Library view: sidebar, sortable track list, now-playing rail."
              />
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section id="features" className="pillars">
          <div className="container">
            <div className="eyebrow">Five reasons</div>
            <h2 className="section-title">
              A player that respects the library{" "}
              <span className="accent">you actually own.</span>
            </h2>
            <p className="section-sub">
              Pulse isn&apos;t a streaming app pretending to play your files. It&apos;s a native
              macOS audio engine, written from scratch for the people who never stopped collecting
              music.
            </p>

            <div className="pillar-grid">
              <article className="pillar span-3 feature">
                <div className="pillar-num">01 / Library</div>
                <h3>Optimized for ~20,000+ tracks.</h3>
                <p>
                  Pulse scans and digests massive local archives in mere seconds. MP3, M4A, AAC, and
                  WAV files are detected automatically through <strong>FSEvents</strong> running
                  quietly in the background — no &quot;Refresh Library&quot; button, ever.
                </p>
                <div className="visual">
                  <div className="counter">
                    <span className="num">23,418</span>
                    <span className="unit">tracks indexed · 18.4 s</span>
                  </div>
                  <div className="scan-progress"><div /></div>
                  <div className="scan-label">
                    <span>~/Music/Archive/</span>
                    <span>live · FSEvents</span>
                  </div>
                </div>
              </article>

              <article className="pillar span-3">
                <div className="pillar-num">02 / Engine</div>
                <h3>Native. Lightning fast. Written in Swift 6.</h3>
                <p>
                  No Electron overhead, no foreign web interfaces. Minimal RAM, smooth 60/120 fps
                  scrolling through tens of thousands of tracks, and a clean, system-standard 3-pane
                  layout that feels at home on the Mac.
                </p>
                <div className="visual chip-row">
                  <span className="chip red">Swift 6</span>
                  <span className="chip">SwiftUI</span>
                  <span className="chip blue">Apple Silicon</span>
                  <span className="chip">AVFoundation</span>
                  <span className="chip">Universal Binary</span>
                </div>
              </article>

              <article className="pillar span-2">
                <div className="pillar-num">03 / System</div>
                <h3>Lives where macOS lives.</h3>
                <p>
                  Hardware media keys, Control Center, Touch Bar Now Playing — all wired through{" "}
                  <code>NowPlayingInfoCenter</code>. Light / Dark mode follows the system
                  automatically.
                </p>
                <div className="visual keys">
                  <div className="key" title="Previous">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 5h2v14H6zM20 5v14L9 12z" />
                    </svg>
                  </div>
                  <div className="key" title="Play/Pause">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="key" title="Next">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 5h2v14h-2zM4 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </article>

              <article className="pillar span-2 feature">
                <div className="pillar-num">04 / Audio</div>
                <h3>True gapless playback.</h3>
                <p>
                  An advanced look-ahead <code>AVQueuePlayer</code> engine delivers continuous
                  playback — zero silent interruptions between tracks. The way albums were meant to
                  be heard.
                </p>
                <div className="visual gapless">
                  <div className="wf">
                    <span style={{ height: "30%" }} />
                    <span style={{ height: "60%" }} />
                    <span style={{ height: "85%" }} />
                    <span style={{ height: "55%" }} />
                    <span style={{ height: "75%" }} />
                    <span style={{ height: "40%" }} />
                    <span style={{ height: "65%" }} />
                    <span style={{ height: "90%" }} />
                    <span style={{ height: "50%" }} />
                  </div>
                  <div className="wf-divider" />
                  <div className="wf b">
                    <span style={{ height: "70%" }} />
                    <span style={{ height: "45%" }} />
                    <span style={{ height: "80%" }} />
                    <span style={{ height: "55%" }} />
                    <span style={{ height: "35%" }} />
                    <span style={{ height: "75%" }} />
                    <span style={{ height: "60%" }} />
                    <span style={{ height: "50%" }} />
                    <span style={{ height: "85%" }} />
                  </div>
                </div>
              </article>

              <article className="pillar span-2">
                <div className="pillar-num">05 / Search</div>
                <h3>Instant FTS5 search.</h3>
                <p>
                  Powered by an embedded SQLite database with full-text indexing. Find titles,
                  artists, composers, playlists — instantly. Drag-and-drop playlists, manual
                  artwork, M3U import included.
                </p>
                <div className="visual search-demo">
                  <div className="input">debu</div>
                  <div className="results">
                    <div className="res">
                      <span><strong>Debu</strong>ssy — Clair de lune</span>
                      <span className="kind">track</span>
                    </div>
                    <div className="res">
                      <span><strong>Debu</strong>t — Björk</span>
                      <span className="kind">album</span>
                    </div>
                    <div className="res">
                      <span><strong>Debu</strong>tante — The Veils</span>
                      <span className="kind">artist</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SPECS */}
        <section id="specs" className="specs">
          <div className="container">
            <div className="eyebrow">Release tech specs</div>
            <h2 className="section-title">
              Engineered with the same <span className="accent">obsession</span> you put into your
              library.
            </h2>

            <div className="specs-grid">
              <div className="spec">
                <div className="label">Minimum OS</div>
                <div className="value">macOS 15<small>Sequoia or newer</small></div>
              </div>
              <div className="spec">
                <div className="label">Architecture</div>
                <div className="value">Universal<small>Apple Silicon &amp; Intel</small></div>
              </div>
              <div className="spec">
                <div className="label">In-app updates</div>
                <div className="value">Sparkle<small>OTA, transparent release notes</small></div>
              </div>
              <div className="spec">
                <div className="label">Privacy</div>
                <div className="value">Zero telemetry<small>Your metadata never leaves your Mac</small></div>
              </div>
              <div className="spec">
                <div className="label">Audio engine</div>
                <div className="value">AVQueuePlayer<small>Look-ahead, gapless</small></div>
              </div>
              <div className="spec">
                <div className="label">Library indexing</div>
                <div className="value">FSEvents + SQLite<small>FTS5 full-text search</small></div>
              </div>
              <div className="spec">
                <div className="label">Formats</div>
                <div className="value">MP3 · M4A · AAC · WAV<small>Native CoreAudio decoders</small></div>
              </div>
              <div className="spec">
                <div className="label">Price</div>
                <div className="value">Free<small>DMG download, no account required</small></div>
              </div>
            </div>
          </div>
        </section>

        {/* DOWNLOAD GATE */}
        <section id="download" className="download">
          <div className="container">
            <div className="eyebrow">Free download</div>
            <h2>
              Leave an email. Get the{" "}
              <span style={{ color: "var(--color-jeton-red)" }}>DMG</span>.
            </h2>
            <p className="lede">
              We use your address to send you the download link and notify you of major updates.
              Nothing else. No newsletters, no tracking, no third parties.
            </p>
            <DownloadGate />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

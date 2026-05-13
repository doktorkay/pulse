"use client";

import { useEffect, useState } from "react";

const DMG_URL = process.env.NEXT_PUBLIC_DMG_URL || "/downloads/Pulse-1.0.dmg";
const STORAGE_KEY = "pulse:email";

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export default function DownloadGate() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmedEmail, setConfirmedEmail] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && isValidEmail(saved)) setConfirmedEmail(saved);
    } catch {}
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = email.trim();
    if (!isValidEmail(v)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setError("Please accept the privacy notice to continue.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: v, consent: true }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        setError(body.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      setConfirmedEmail(v);
      try {
        localStorage.setItem(STORAGE_KEY, v);
      } catch {}
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const success = !!confirmedEmail;

  return (
    <div className={`gate${success ? " success" : ""}`} id="gate">
      <div className="form-state">
        <div className="gate-row">
          <div className="gate-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path
                d="M3 7l9 6 9-6M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3>Unlock the download</h3>
            <p>One email — one DMG file (~14 MB). That&apos;s it.</p>
          </div>
        </div>
        <form className="form" onSubmit={onSubmit} noValidate>
          <input
            type="email"
            name="email"
            placeholder="you@yourmac.com"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
          />
          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting…" : "Enable download"}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10m0 0L9 4m4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            I&apos;m okay with receiving the download link &amp; major release notifications. I can
            unsubscribe at any time. <a href="/privacy">Privacy</a>.
          </span>
        </label>
        <div className={`error${error ? " show" : ""}`}>{error}</div>
      </div>

      <div className="success-state">
        <div className="gate-row">
          <div className="gate-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h3>
              Download unlocked for{" "}
              <span style={{ color: "var(--color-jeton-red)" }}>{confirmedEmail}</span>
            </h3>
            <p>Click below to grab Pulse for macOS.</p>
          </div>
        </div>
        <a href={DMG_URL} className="download-btn" download>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path
              d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Download Pulse 1.0 — Pulse.dmg
        </a>
        <div className="success-foot">Universal · ~14 MB · macOS 15 Sequoia or newer</div>
      </div>
    </div>
  );
}

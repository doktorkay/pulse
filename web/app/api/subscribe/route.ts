import { NextRequest, NextResponse } from "next/server";
import { saveEmail } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { email, consent } = (body || {}) as { email?: unknown; consent?: unknown };

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (consent !== true) {
    return NextResponse.json({ error: "Consent is required." }, { status: 400 });
  }

  const normalized = email.trim().toLowerCase();
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    null;

  try {
    await saveEmail({
      email: normalized,
      consent: true,
      source: "download-gate",
      userAgent: req.headers.get("user-agent"),
      ip,
      createdAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[pulse:subscribe] storage error", err);
    return NextResponse.json({ error: "Could not store email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

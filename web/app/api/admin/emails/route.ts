import { NextRequest, NextResponse } from "next/server";
import { readEmails } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const token = process.env.ADMIN_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "ADMIN_TOKEN is not configured on the server." },
      { status: 503 }
    );
  }
  const auth = req.headers.get("authorization") || "";
  const provided = auth.startsWith("Bearer ") ? auth.slice(7) : req.nextUrl.searchParams.get("token");
  if (provided !== token) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const isVercel = !!process.env.VERCEL;
  if (isVercel) {
    return NextResponse.json({
      note: "Running on Vercel: emails are written to function logs, not to a persistent file. Check the Vercel dashboard → Logs and filter by '[pulse:subscribe]'.",
      emails: [],
    });
  }

  const emails = await readEmails();
  return NextResponse.json({ count: emails.length, emails });
}

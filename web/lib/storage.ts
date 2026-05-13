import fs from "node:fs/promises";
import path from "node:path";

export type EmailRecord = {
  email: string;
  consent: boolean;
  source: string;
  userAgent: string | null;
  ip: string | null;
  createdAt: string;
};

const isVercel = !!process.env.VERCEL;

function localFilePath() {
  return path.join(process.cwd(), "data", "emails.jsonl");
}

export async function saveEmail(record: EmailRecord): Promise<void> {
  const line = JSON.stringify(record) + "\n";

  if (isVercel) {
    // Vercel serverless: filesystem is read-only outside /tmp, and /tmp is ephemeral.
    // We log the subscription to the function logs so it's always traceable from the
    // Vercel dashboard. If you later want a real DB, replace this branch.
    console.log("[pulse:subscribe]", line.trim());
    return;
  }

  const file = localFilePath();
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.appendFile(file, line, "utf8");
}

export async function readEmails(): Promise<EmailRecord[]> {
  if (isVercel) return [];
  const file = localFilePath();
  try {
    const raw = await fs.readFile(file, "utf8");
    return raw
      .split("\n")
      .filter(Boolean)
      .map((l) => JSON.parse(l) as EmailRecord);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

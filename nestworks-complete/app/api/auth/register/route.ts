import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rate-limit";
import { auditLog } from "@/lib/audit";

const schema = z.object({ name: z.string().min(2).max(100), email: z.string().email(), password: z.string().min(8).max(200) });

function token() {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let t = "";
  for (let i = 0; i < 48; i++) t += alphabet[Math.floor(Math.random() * alphabet.length)];
  return t;
}

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "local").toString();
  const rl = rateLimit(`register:${ip}`, { windowMs: 60_000, max: 10 });
  if (!rl.ok) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

  const body = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { name, email, password } = parsed.data;
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return NextResponse.json({ error: "Email already in use" }, { status: 409 });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { name, email, passwordHash, planKey: "BASIC" } });

  const vt = token();
  await prisma.verificationToken.create({ data: { identifier: email, token: vt, expires: new Date(Date.now() + 1000*60*60*24) } });

  const url = new URL(process.env.NEXTAUTH_URL ?? "http://127.0.0.1:3001");
  url.pathname = "/auth/verify";
  url.searchParams.set("token", vt);

  // dev-friendly: print link
  console.log("Verify link:", url.toString());

  await auditLog({ userId: user.id, action: "auth.register", meta: { email }, ip });

  return NextResponse.json({ ok: true });
}

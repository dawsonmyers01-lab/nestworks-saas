import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rate-limit";

function token() {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let t = "";
  for (let i = 0; i < 56; i++) t += alphabet[Math.floor(Math.random() * alphabet.length)];
  return t;
}

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "local").toString();
  const rl = rateLimit(`forgot:${ip}`, { windowMs: 60_000, max: 15 });
  if (!rl.ok) return NextResponse.json({ ok: true });

  const body = await req.json().catch(() => ({}));
  const email = String(body.email ?? "");
  if (!email) return NextResponse.json({ ok: true });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ ok: true });

  const t = token();
  await prisma.verificationToken.create({ data: { identifier: email, token: t, expires: new Date(Date.now() + 1000*60*30) } });

  const url = new URL(process.env.NEXTAUTH_URL ?? "http://127.0.0.1:3001");
  url.pathname = "/auth/reset-password";
  url.searchParams.set("token", t);

  console.log("Reset link:", url.toString());

  return NextResponse.json({ ok: true });
}

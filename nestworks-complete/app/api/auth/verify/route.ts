import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  if (!token) return NextResponse.json({ error: "Missing token" }, { status: 400 });

  const vt = await prisma.verificationToken.findUnique({ where: { token } });
  if (!vt || vt.expires < new Date()) return NextResponse.json({ error: "Invalid token" }, { status: 400 });

  await prisma.$transaction([
    prisma.user.update({ where: { email: vt.identifier }, data: { emailVerified: new Date() } }),
    prisma.verificationToken.delete({ where: { token } }),
  ]);

  return NextResponse.json({ ok: true });
}

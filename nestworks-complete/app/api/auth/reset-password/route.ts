import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

const schema = z.object({ token: z.string().min(10), password: z.string().min(8).max(200) });

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const vt = await prisma.verificationToken.findUnique({ where: { token: parsed.data.token } });
  if (!vt || vt.expires < new Date()) return NextResponse.json({ error: "Invalid token" }, { status: 400 });

  const passwordHash = await bcrypt.hash(parsed.data.password, 10);

  await prisma.$transaction([
    prisma.user.update({ where: { email: vt.identifier }, data: { passwordHash } }),
    prisma.verificationToken.delete({ where: { token: parsed.data.token } }),
  ]);

  return NextResponse.json({ ok: true });
}

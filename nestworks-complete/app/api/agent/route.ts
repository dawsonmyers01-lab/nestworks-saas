import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { answerAgent } from "@/lib/agent";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any)?.id as string;
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const prompt = String(body.prompt ?? "").trim();
  if (!prompt) return NextResponse.json({ error: "Empty prompt" }, { status: 400 });

  try {
    return NextResponse.json(await answerAgent({ userId, prompt, context: body.context ?? null }));
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Agent error" }, { status: 400 });
  }
}

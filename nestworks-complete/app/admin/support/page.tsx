import { prisma } from "@/lib/prisma";
export default async function Support() {
  const msgs = await prisma.contactMessage.findMany({ take: 50, orderBy: { createdAt: "desc" } });
  return (
    <div className="space-y-3">
      {msgs.map((m) => (
        <div key={m.id} className="nw-card p-4">
          <div className="font-semibold">{m.name} <span className="text-[var(--muted)] font-normal">({m.email})</span></div>
          <div className="text-xs text-[var(--muted)]">{m.createdAt.toISOString()}</div>
          <div className="text-sm mt-2 whitespace-pre-wrap">{m.message}</div>
        </div>
      ))}
      {!msgs.length ? <div className="nw-card p-4 text-[var(--muted)]">No messages yet.</div> : null}
    </div>
  );
}

import { prisma } from "@/lib/prisma";
export default async function Tools() {
  const tools = await prisma.tool.findMany({ orderBy: { name: "asc" } });
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {tools.map((t) => (
        <div key={t.id} className="nw-card p-4">
          <div className="font-semibold">{t.name}</div>
          <div className="text-sm text-[var(--muted)]">{t.tagline}</div>
          <div className="text-xs text-[var(--muted)] mt-2">Basic {t.basicAllowed ? "✓" : "✗"} • Pro {t.proAllowed ? "✓" : "✗"} • Expert ✓</div>
        </div>
      ))}
    </div>
  );
}

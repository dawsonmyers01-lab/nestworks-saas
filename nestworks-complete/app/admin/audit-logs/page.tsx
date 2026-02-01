import { prisma } from "@/lib/prisma";
export default async function Logs() {
  const logs = await prisma.auditLog.findMany({ take: 100, orderBy: { createdAt: "desc" } });
  return (
    <div className="nw-card p-4 overflow-auto">
      <table className="w-full text-sm">
        <thead className="text-[var(--muted)]"><tr><th align="left">Time</th><th align="left">Action</th><th align="left">User</th></tr></thead>
        <tbody>{logs.map((l) => (<tr key={l.id} className="border-t border-[var(--line)]"><td className="py-2 text-[var(--muted)]">{l.createdAt.toISOString()}</td><td>{l.action}</td><td className="text-[var(--muted)]">{l.userId ?? "—"}</td></tr>))}</tbody>
      </table>
    </div>
  );
}

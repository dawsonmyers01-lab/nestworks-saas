import { prisma } from "@/lib/prisma";
export default async function Users() {
  const users = await prisma.user.findMany({ take: 50, orderBy: { createdAt: "desc" }, select: { email: true, name: true, role: true, planKey: true, createdAt: true } });
  return (
    <div className="nw-card p-4 overflow-auto">
      <table className="w-full text-sm">
        <thead className="text-[var(--muted)]"><tr><th align="left">Email</th><th align="left">Role</th><th align="left">Plan</th><th align="left">Created</th></tr></thead>
        <tbody>{users.map((u) => (<tr key={u.email ?? u.createdAt.toISOString()} className="border-t border-[var(--line)]"><td className="py-2">{u.email}</td><td>{u.role}</td><td>{u.planKey}</td><td className="text-[var(--muted)]">{u.createdAt.toISOString()}</td></tr>))}</tbody>
      </table>
    </div>
  );
}

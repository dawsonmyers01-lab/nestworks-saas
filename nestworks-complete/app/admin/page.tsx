import Link from "next/link";
export default function Admin() {
  return (
    <div className="nw-card p-4 space-y-2">
      <Link className="underline" href="/admin/users">Users</Link>
      <Link className="underline" href="/admin/tools">Tools</Link>
      <Link className="underline" href="/admin/audit-logs">Audit logs</Link>
      <Link className="underline" href="/admin/support">Support</Link>
    </div>
  );
}

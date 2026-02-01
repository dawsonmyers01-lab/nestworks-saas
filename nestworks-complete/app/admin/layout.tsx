export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-5xl p-6 space-y-4"><h1 className="text-3xl font-semibold">Admin</h1>{children}</div>;
}

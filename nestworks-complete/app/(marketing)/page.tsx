import Link from "next/link";
export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-semibold">NestWorks</h1>
      <p className="text-[var(--muted)] text-lg">A complete business tools SaaS with auth, plans, credits, tools, admin, and Stripe.</p>
      <div className="flex gap-3">
        <Link className="px-4 py-2 rounded-xl bg-white text-black" href="/auth/sign-up">Start free</Link>
        <Link className="px-4 py-2 rounded-xl border border-[var(--line)]" href="/pricing">Pricing</Link>
      </div>
      <div className="nw-card p-4 text-sm text-[var(--muted)]">After sign-in, go to /app/dashboard.</div>
    </div>
  );
}

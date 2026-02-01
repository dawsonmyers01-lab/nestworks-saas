import Link from "next/link";
export default function Pricing() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold">Pricing</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="nw-card p-5"><div className="font-semibold">Basic</div><div className="text-[var(--muted)]">5,000 credits monthly • limited tools • no history</div></div>
        <div className="nw-card p-5"><div className="font-semibold">Pro</div><div className="text-[var(--muted)]">150,000 credits biweekly • history • more tools</div></div>
        <div className="nw-card p-5"><div className="font-semibold">Expert</div><div className="text-[var(--muted)]">300,000 credits biweekly • all tools</div></div>
      </div>
      <div className="text-sm text-[var(--muted)]">Stripe checkout + portal endpoints are included (configure in .env).</div>
      <Link className="underline" href="/auth/sign-up">Create account</Link>
    </div>
  );
}

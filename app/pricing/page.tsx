export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10">
      <h1 className="text-5xl">Pricing Plans</h1>
      <p className="opacity-80 text-lg">
        Choose the plan that fits your workflow. Credits reload automatically.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {/* BASIC */}
        <div className="rounded-3xl border border-[var(--soft-brown)] bg-[var(--card)] p-8 shadow-sm">
          <h2 className="text-2xl">Basic</h2>
          <p className="text-4xl font-semibold mt-3">$0</p>
          <p className="opacity-70 mt-2">5,000 credits monthly</p>
          <ul className="mt-5 space-y-2 text-sm opacity-80">
            <li>✔ Limited tools</li>
            <li>✔ AI Assistant included</li>
            <li>✘ No history saved</li>
            <li>✘ Small storage</li>
          </ul>
        </div>

        {/* PRO */}
        <div className="rounded-3xl border-2 border-[var(--tan)] bg-white p-8 shadow-md">
          <h2 className="text-2xl">Pro</h2>
          <p className="text-4xl font-semibold mt-3">$29/mo</p>
          <p className="opacity-70 mt-2">$290/year — 7 days free</p>
          <ul className="mt-5 space-y-2 text-sm opacity-80">
            <li>✔ 150,000 credits biweekly</li>
            <li>✔ History + saved outputs</li>
            <li>✔ Expanded tools</li>
            <li>✔ Larger storage</li>
          </ul>
        </div>

        {/* EXPERT */}
        <div className="rounded-3xl border border-[var(--soft-brown)] bg-[var(--card)] p-8 shadow-sm">
          <h2 className="text-2xl">Expert</h2>
          <p className="text-4xl font-semibold mt-3">$59/mo</p>
          <p className="opacity-70 mt-2">$590/year — 1 month free</p>
          <ul className="mt-5 space-y-2 text-sm opacity-80">
            <li>✔ 300,000 credits biweekly</li>
            <li>✔ All tools unlocked</li>
            <li>✔ Full history + storage</li>
            <li>✔ Best for serious teams</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
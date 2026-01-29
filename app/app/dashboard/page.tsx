export default function Dashboard() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="text-4xl">Dashboard</h1>
      <p className="opacity-80">
        Welcome to NestWorks. Auth, credits, tools, and subscriptions will appear
        here in the next sections.
      </p>

      <div className="rounded-3xl border border-[var(--soft-brown)] bg-[var(--card)] p-8 shadow-sm">
        <h2 className="text-2xl mb-2">Next Step</h2>
        <p className="opacity-80">
          Section 2 will add login + Google OAuth + account system.
        </p>
      </div>
    </div>
  );
}
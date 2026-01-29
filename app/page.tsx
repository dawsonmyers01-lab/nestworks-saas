export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf7f0] flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-5xl font-bold text-[#3b2a1f]">
          Nestworks SaaS Platform
        </h1>

        <p className="text-lg text-[#5a4032]">
          Your project is running successfully.
          Next.js + Tailwind + Prisma are now connected.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:opacity-90"
          >
            Go to Dashboard
          </a>

          <a
            href="https://nextjs.org"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-black font-medium hover:bg-black hover:text-white"
          >
            Next.js Docs
          </a>
        </div>
      </div>
    </main>
  );
}
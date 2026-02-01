import Link from "next/link";
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--line)] p-4 flex items-center justify-between">
        <Link href="/" className="font-semibold">NestWorks</Link>
        <nav className="flex gap-4 text-sm text-[var(--muted)]">
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/auth/sign-in">Sign in</Link>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl p-6">{children}</main>
      <footer className="border-t border-[var(--line)] p-6 text-sm text-[var(--muted)]">© NestWorks</footer>
    </div>
  );
}

import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full border-b border-[var(--soft-brown)] bg-[var(--card)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wide"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          NestWorks
        </Link>

        {/* Nav */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/pricing" className="hover:opacity-70">
            Pricing
          </Link>
          <Link href="/app/dashboard" className="hover:opacity-70">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
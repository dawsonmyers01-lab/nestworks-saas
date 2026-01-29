"use client";


import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl space-y-16">
      {/* Hero */}
      <section className="grid gap-10 pt-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-5"
        >
          <h1 className="text-5xl leading-tight">
            NestWorks helps businesses run smoother.
          </h1>

          <p className="text-lg opacity-80">
            A premium suite of calm, credit-based business tools designed to turn
            confusion into clarity — with roadmaps, SOPs, pricing systems, and
            instant guided help.
          </p>

          <div className="flex gap-4">
            <Link
              href="/pricing"
              className="rounded-xl bg-[var(--tan)] px-5 py-3 font-semibold text-[var(--brown)] shadow-sm hover:opacity-90"
            >
              View Pricing
            </Link>

            <Link
              href="/app/dashboard"
              className="rounded-xl border border-[var(--soft-brown)] px-5 py-3 font-semibold hover:bg-[var(--card)]"
            >
              Enter Dashboard
            </Link>
          </div>
        </motion.div>

        {/* Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-[var(--soft-brown)] bg-[var(--card)] p-8 shadow-sm"
        >
          <h2 className="text-2xl mb-3">Everything in one workspace</h2>
          <ul className="space-y-3 text-sm opacity-85">
            <li>✔ Business Roadmaps & Milestones</li>
            <li>✔ Process Bottleneck Detection</li>
            <li>✔ Client Communication Kits</li>
            <li>✔ Pricing Tier Architect</li>
            <li>✔ Executive Brief Generator</li>
            <li>✔ Guided AI Help Desk Assistant</li>
          </ul>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="grid gap-6 rounded-3xl border border-[var(--soft-brown)] bg-white p-10 shadow-sm">
        <h2 className="text-3xl">Built for clarity, not complexity.</h2>
        <p className="max-w-3xl opacity-80">
          NestWorks is designed to feel calm, premium, and extremely easy to
          use. Every tool is fast, guided, and credit-based so businesses can
          get exactly what they need without waste.
        </p>
      </section>
    </div>
  );
}
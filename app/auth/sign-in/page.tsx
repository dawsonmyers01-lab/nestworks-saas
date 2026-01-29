"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fbf7f0] text-[#3b2a1f]">
      <div className="max-w-md w-full p-8 rounded-2xl shadow-lg bg-white border border-[#d8c2aa]">
        <h1 className="text-3xl font-semibold mb-4">Sign in to NestWorks</h1>

        <button
          onClick={() => signIn("google")}
          className="w-full py-3 rounded-xl bg-[#c8a97e] text-white font-medium hover:opacity-90"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-sm opacity-70">
          Email/password signup is coming next section.
        </p>
      </div>
    </main>
  );
}
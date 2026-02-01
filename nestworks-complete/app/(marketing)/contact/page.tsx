"use client";
import { useState } from "react";
export default function Contact() {
  const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    const res = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
    setMsg(res.ok ? "Sent." : "Error.");
    if (res.ok) e.currentTarget.reset();
  }
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <form onSubmit={submit} className="nw-card p-5 space-y-3">
        <input name="name" required placeholder="Name" className="w-full rounded-xl border border-[var(--line)] bg-transparent px-3 py-2" />
        <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-[var(--line)] bg-transparent px-3 py-2" />
        <textarea name="message" required placeholder="Message" className="w-full min-h-[120px] rounded-xl border border-[var(--line)] bg-transparent px-3 py-2" />
        <button className="px-4 py-2 rounded-xl bg-white text-black">Send</button>
        {msg ? <div className="text-sm text-[var(--muted)]">{msg}</div> : null}
      </form>
    </div>
  );
}

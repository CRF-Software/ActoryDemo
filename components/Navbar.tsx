import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex gap-8">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/tests">Tests</Link>
      <Link href="/reports">Reports</Link>
    </nav>
  );
}

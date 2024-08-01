import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center gap-2 px-10 py-5 justify-between">
      <Link href={'/'} className="font-bold text-lg">LOGO</Link>
      <div className="flex items-center gap-5">
        <ul className="flex items-center gap-3">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
        <ModeToggle />
      </div>
    </header>
  );
}

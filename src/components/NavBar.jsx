"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  return (
    <header>
      <Link href="/">
        <h1>Task App</h1>
      </Link>
    </header>
  );
};

export default NavBar;

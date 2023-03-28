"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  return (
    <header className="flex items-center bg-gray-800 px-28 py-3 justify-between">
      <Link href="/">
        <h1 className="font-bold text-3xl text-white hover:text-gray-200">
          Task App
        </h1>
      </Link>
      <div>
        <button
          onClick={() => router.push("/new")}
          className="bg-green-500 hover:bg-green-400 text-gray-50 font-bold px-5 py-2 rounded-sm inline-flex items-center duration-75"
        >
          Add Task
        </button>
      </div>
    </header>
  );
};

export default NavBar;

import Link from "next/link";
import React from "react";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between sticky top-0 drop-shadow-xl">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2">
        <Link href="/">Caonam!</Link>
      </h1>
      <Search />
    </nav>
  );
}

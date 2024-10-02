import React from "react";
import Link from "next/link";
import { FaCat } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="w-screen h-28 bg-gray-700 flex justify-between items-center py-2 px-24 pl-13 text-white hover:border-gray-950 hover:border-b-4 transition-all duration-100">
      <div>
        <p className="font-semibold text-3xl hover:scale-125 transition-transform duration-200 flex gap-6 items-center">
          <FaCat className="w-16 h-16 "/>
          Dream it. Build it. Achieve it.
        </p>
      </div>
      <div>
        <ul className="flex gap-6 text-2xl">
          <li
            className="hover:underline hover:text-gray-100 hover:scale-125 transition-all duration-200"
            style={{ textUnderlineOffset: "10px" }}
          >
            <Link href="/">Portfolio</Link>
          </li>
          <li
            className="hover:underline hover:text-gray-50 hover:scale-125 transition-all duration-200"
            style={{ textUnderlineOffset: "10px" }}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className="hover:underline hover:text-gray-50 hover:scale-125 transition-all duration-200"
            style={{ textUnderlineOffset: "10px" }}
          >
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
const Nav = () => {
  const nav = [
    {
      name: "About",
      path: "#introduction",
    },
    {
      name: "Projects",
      path: "#projects",
    },
    {
      name: "Publications",
      path: "#publications",
    },
    {
      name: "Experience",
      path: "#experience",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];
  const router = usePathname();

  return (
    <>
    <nav className="flex">
        <ul className="flex gap-4 items-center mr-4">
          {nav.map((item, index) => (
            <li
              key={index}
              className={`${
                item.path === router ? "accent-color text-[18px]" : "text-[18px]"
              }`}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Nav
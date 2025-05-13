"use client"

import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosMenu } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from "next/navigation";
const MobileNav = () => {
  const nav = [
    {
      name: "About",
      path: "/",
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
      <Sheet>
        <SheetTrigger>
          <IoIosMenu className="text-2xl" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle> {/* ✅ REQUIRED for accessibility */}
            <div className="mt-10">
              <ul>
                {nav.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      item.path === router
                        ? "accent-color text-[20px]"
                        : "text-[20px]"
                    }`}
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex justify-normal mt-4">
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileNav
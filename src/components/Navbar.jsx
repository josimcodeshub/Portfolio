"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setIsOpen(false)}
          className="font-mono text-lg font-bold tracking-tight text-white"
        >
          <span className="text-emerald-400">&lt;</span>Josim Uddin
          <span className="text-emerald-400">/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-400 transition duration-200 hover:text-emerald-400"
            >
              {item.name}
            </Link>
          ))}

          <ThemeToggle />

          {/* Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=19R2KqNoWh8zYpPm35flxZVsM2dKp1Mni"
            className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-neutral-950 transition duration-200 hover:bg-emerald-400"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-neutral-300 transition hover:bg-neutral-900 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-2xl leading-none">&times;</span>
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-neutral-800 bg-neutral-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-neutral-300 transition hover:bg-neutral-900 hover:text-emerald-400"
              >
                {item.name}
              </Link>
            ))}

            <div className="px-3 py-2">
              <ThemeToggle />
            </div>

            {/* Mobile Resume */}
            <a
              href="https://drive.google.com/uc?export=download&id=19R2KqNoWh8zYpPm35flxZVsM2dKp1Mni"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-md bg-emerald-500 px-4 py-3 text-center text-sm font-medium text-neutral-950 transition hover:bg-emerald-400"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

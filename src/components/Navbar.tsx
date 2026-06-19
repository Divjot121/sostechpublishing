"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Books", href: "#books" },
    { name: "About", href: "#about" },
    { name: "Author", href: "#author" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "glass shadow-md py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-background p-2 rounded-lg group-hover:bg-accent transition-colors">
              <BookOpen size={24} />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight">
              SOS TECH PUBLISHING
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-l border-foreground/10 pl-4 lg:pl-6">
              <ThemeToggle />
              <Link
                href="#newsletter"
                className="px-5 py-2.5 bg-primary text-background text-sm font-medium rounded-full hover:bg-accent transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Join Newsletter
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-white/10 shadow-xl p-4 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium p-2 text-foreground/80 hover:text-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#newsletter"
              className="mt-2 text-center w-full px-5 py-3 bg-primary text-background font-medium rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Newsletter
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

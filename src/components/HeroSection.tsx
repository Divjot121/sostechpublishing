"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] opacity-50 dark:opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[150px] opacity-50 dark:opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/5 border border-secondary/10 dark:bg-white/5 dark:border-white/10 w-fit backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs font-medium uppercase tracking-wider text-muted">
                Premium Modern Publishing
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-balance">
              Empowering the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                Next Generation
              </span>{" "}
              Through Knowledge
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-xl text-balance leading-relaxed">
              SOS TECH PUBLISHING creates practical books on technology,
              programming, business, entrepreneurship, and personal growth
              designed for modern learners worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#books"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background rounded-full font-medium text-lg hover:bg-accent transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1"
              >
                Explore Books
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#author"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-primary/20 text-foreground rounded-full font-medium text-lg hover:bg-secondary/5 dark:hover:bg-white/5 transition-all"
              >
                Meet The Author
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual - Floating Books */}
          <div className="relative h-[500px] lg:h-[600px] w-full hidden md:block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Center Book */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-30 w-64 h-[380px] rounded-r-md shadow-2xl shadow-black/20 flex flex-col items-center justify-center rotate-[-2deg]"
              >
                <img
                  src="https://books.google.com/books/publisher/content/images/frontcover/TXOrEAAAQBAJ?fife=w800-h1200"
                  alt="Learn to Code With Python in 30 Days"
                  className="w-full h-full object-cover rounded-r-md"
                />
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/20 to-transparent rounded-l-md mix-blend-multiply" />
              </motion.div>

              {/* Left Book */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute z-20 left-10 lg:left-4 top-20 w-48 h-[280px] rounded-r-sm shadow-xl shadow-black/10 flex flex-col items-center justify-center rotate-[-8deg] opacity-90"
              >
                <img
                  src="https://books.google.com/books/publisher/content/images/frontcover/-UcKEQAAQBAJ?fife=w800-h1200"
                  alt="Java Mastery In 60 Days"
                  className="w-full h-full object-cover rounded-r-sm"
                />
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/20 to-transparent rounded-l-sm mix-blend-multiply" />
              </motion.div>

              {/* Right Book */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute z-10 right-10 lg:right-4 bottom-20 w-48 h-[280px] rounded-r-sm shadow-xl shadow-black/10 flex flex-col items-center justify-center rotate-[6deg] opacity-90"
              >
                <img
                  src="https://books.google.com/books/publisher/content/images/frontcover/me3jEAAAQBAJ?fife=w800-h1200"
                  alt="Basic Guide To Money For Teenagers"
                  className="w-full h-full object-cover rounded-r-sm"
                />
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/20 to-transparent rounded-l-sm mix-blend-multiply" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

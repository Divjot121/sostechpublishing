"use client";

import { motion } from "framer-motion";
import { Code, BrainCircuit, Briefcase, Rocket, PiggyBank, Laptop, GraduationCap } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Programming", icon: Code, color: "bg-blue-500/10 text-blue-500" },
  { name: "Artificial Intelligence", icon: BrainCircuit, color: "bg-purple-500/10 text-purple-500" },
  { name: "Business", icon: Briefcase, color: "bg-amber-500/10 text-amber-500" },
  { name: "Entrepreneurship", icon: Rocket, color: "bg-red-500/10 text-red-500" },
  { name: "Personal Finance", icon: PiggyBank, color: "bg-emerald-500/10 text-emerald-500" },
  { name: "Technology", icon: Laptop, color: "bg-cyan-500/10 text-cyan-500" },
  { name: "Career Development", icon: GraduationCap, color: "bg-indigo-500/10 text-indigo-500" },
];

export function CategoriesSection() {
  return (
    <section className="py-24 bg-secondary/5 dark:bg-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Explore by Category</h2>
            <p className="text-muted text-lg max-w-2xl">
              Find exactly what you need to level up your skills across our diverse topics.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {categories.map((category, index) => {
            const MotionLink = motion.create(Link);
            return (
              <MotionLink
                href={`/books?category=${encodeURIComponent(category.name)}`}
                key={category.name}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-6 py-4 glass-card rounded-full hover:shadow-lg transition-all group cursor-pointer border border-white/40 dark:border-white/10 bg-white/40 dark:bg-black/20"
              >
                <div className={`p-2 rounded-full ${category.color} transition-transform group-hover:scale-110`}>
                  <category.icon size={20} />
                </div>
                <span className="font-semibold text-foreground/90">{category.name}</span>
              </MotionLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}

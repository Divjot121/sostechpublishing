"use client";

import { motion } from "framer-motion";
import { Users, Globe, BookText, Laptop } from "lucide-react";

const stats = [
  { label: "Published Books", value: "Multiple", icon: BookText },
  { label: "Global Readers", value: "10k+", icon: Globe },
  { label: "Tech Focus", value: "100%", icon: Laptop },
  { label: "Community", value: "Growing", icon: Users },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/5 dark:bg-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
              About SOS TECH PUBLISHING
            </h2>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-16">
              SOS TECH PUBLISHING is a modern publishing house dedicated to making
              technology and business education accessible to everyone. Through
              practical books, learning guides, and educational resources, we
              help students, developers, entrepreneurs, and professionals build
              future-ready skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 glass-card rounded-2xl"
              >
                <div className="p-3 bg-accent/10 rounded-full text-accent mb-4">
                  <stat.icon size={24} />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold font-serif mb-1">
                  {stat.value}
                </h4>
                <p className="text-sm text-muted font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

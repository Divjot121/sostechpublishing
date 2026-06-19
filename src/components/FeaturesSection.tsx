"use client";

import { motion } from "framer-motion";
import { BookOpen, Rocket, Lightbulb, Banknote, Smartphone, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Practical Learning",
    description: "No fluff, just actionable knowledge you can apply immediately to real-world scenarios.",
    icon: Lightbulb,
  },
  {
    title: "Real-World Projects",
    description: "Build a portfolio of working applications and practical systems as you learn.",
    icon: Rocket,
  },
  {
    title: "Beginner Friendly",
    description: "Complex topics broken down into simple, easy-to-understand concepts.",
    icon: BookOpen,
  },
  {
    title: "Affordable Knowledge",
    description: "Premium education that doesn't break the bank. Accessible pricing for global learners.",
    icon: Banknote,
  },
  {
    title: "Digital Accessibility",
    description: "Read on any device, anywhere. Optimized for mobile, tablet, and desktop viewing.",
    icon: Smartphone,
  },
  {
    title: "Continuous Learning",
    description: "Regular updates and new resources to keep your skills sharp in a fast-changing world.",
    icon: TrendingUp,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/5 dark:bg-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Why Readers Choose Us</h2>
            <p className="text-muted text-lg max-w-2xl">
              We design every book with the modern learner in mind, focusing on what truly matters.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 glass-card rounded-3xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

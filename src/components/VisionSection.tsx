"use client";

import { motion } from "framer-motion";

export function VisionSection() {
  return (
    <section id="vision" className="py-32 relative overflow-hidden flex items-center justify-center min-h-[70vh]">
      <div className="absolute inset-0 bg-secondary/5 dark:bg-white/5" />
      
      {/* Decorative typography background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] dark:opacity-[0.02]">
        <h2 className="text-[15vw] font-serif font-black leading-none whitespace-nowrap">VISION</h2>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          <div className="w-16 h-1 bg-accent mb-12 rounded-full" />
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-[1.2] tracking-tight text-balance mb-12">
            "We believe knowledge should be <span className="italic text-accent">practical</span>, <span className="italic text-accent">accessible</span>, and <span className="italic text-accent">transformative</span>."
          </h2>
          
          <p className="text-xl md:text-2xl text-muted max-w-3xl leading-relaxed text-balance font-medium">
            Our mission is to educate future developers, entrepreneurs, and innovators by removing the barriers between complex theory and real-world application.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

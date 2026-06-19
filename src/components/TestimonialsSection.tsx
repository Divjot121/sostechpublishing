"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The Python course book completely changed my perspective on programming. I went from zero knowledge to building my own automation scripts in just a month.",
    author: "Sarah J.",
    role: "Data Analyst",
    rating: 5,
  },
  {
    quote: "SOS TECH PUBLISHING has a unique way of breaking down complex tech topics. The 'Java Mastery' guide was exactly what I needed to land my first junior dev role.",
    author: "Michael T.",
    role: "Junior Developer",
    rating: 5,
  },
  {
    quote: "As a teenager, learning about money seemed boring until I read the finance guide. It's practical, easy to understand, and highly relevant to my life right now.",
    author: "David L.",
    role: "High School Student",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Reader Testimonials</h2>
            <p className="text-muted text-lg max-w-2xl">
              Join thousands of learners who have transformed their careers and lives with our books.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col p-8 glass-card rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-accent/10" size={60} />
              
              <div className="flex items-center gap-1 mb-6 text-amber-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-lg italic text-foreground/80 mb-8 flex-grow relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

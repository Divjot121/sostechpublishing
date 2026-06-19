"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  const benefits = [
    "Book launches",
    "Exclusive discounts",
    "Free chapters",
    "Learning resources"
  ];

  return (
    <section id="newsletter" className="py-32 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary text-background rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-background">
                Join Our Learning Community
              </h2>
              <p className="text-background/80 text-lg mb-8 leading-relaxed">
                Subscribe to our newsletter and get the latest updates on new releases, exclusive content, and special offers straight to your inbox.
              </p>
              
              <ul className="grid grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-background/80">
                    <CheckCircle2 size={18} className="text-accent" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background/5 backdrop-blur-md border border-background/10 rounded-3xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-background mb-2">Welcome aboard!</h3>
                  <p className="text-background/60">You&apos;ve successfully joined our newsletter.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-5 py-4 bg-accent text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-accent/20"
                  >
                    Subscribe Now
                    <Send size={18} />
                  </button>
                  <p className="text-xs text-background/60 text-center mt-2">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

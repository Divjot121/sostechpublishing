"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import { BookData } from "@/data/books";

interface ComingSoonModalProps {
  book: BookData | null;
  onClose: () => void;
}

export function ComingSoonModal({ book, onClose }: ComingSoonModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!book) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative z-10 w-full max-w-lg overflow-hidden bg-background dark:bg-gray-900 border border-primary/20 dark:border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 text-center"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-secondary/10 dark:bg-white/10 hover:bg-accent hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            Coming Soon to Amazon
          </div>

          <div className="w-32 h-48 mx-auto relative shadow-xl rounded-lg overflow-hidden mb-6 bg-secondary/10 p-2">
            <Image
              src={book.imageUrl}
              alt={book.title}
              fill
              className="object-contain p-1"
              sizes="128px"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2">
            {book.title}
          </h3>

          <p className="text-muted text-sm leading-relaxed mb-6">
            This highly anticipated guide by <strong className="text-foreground">Divjot Singh Arora</strong> is currently undergoing final publishing review. Join the VIP waitlist to receive an exclusive early release notification and launch discount!
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 text-green-600 dark:text-green-400 flex flex-col items-center"
            >
              <CheckCircle2 size={36} className="mb-2" />
              <h4 className="font-bold text-lg mb-1">You&apos;re on the VIP List!</h4>
              <p className="text-xs text-muted">
                We will send the direct Amazon link to your inbox the moment this book goes live.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full px-5 py-4 rounded-xl bg-secondary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-background rounded-xl font-medium hover:bg-accent transition-all shadow-lg shadow-black/10 flex items-center justify-center gap-2 text-sm font-semibold"
              >
                <Bell size={18} />
                Notify Me on Launch
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

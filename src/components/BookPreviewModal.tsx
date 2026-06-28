"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingCart, X, BookOpen, CheckCircle } from "lucide-react";
import Image from "next/image";
import { BookData } from "@/data/books";

interface BookPreviewModalProps {
  book: BookData | null;
  onClose: () => void;
}

export function BookPreviewModal({ book, onClose }: BookPreviewModalProps) {
  if (!book) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background dark:bg-gray-900 border border-primary/10 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-secondary/10 dark:bg-white/10 hover:bg-accent hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Left Column: Book Cover */}
          <div className="md:w-5/12 bg-secondary/5 dark:bg-black/30 p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-primary/10 dark:border-white/5">
            <div className="relative w-56 h-80 sm:w-64 sm:h-96 shadow-2xl rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105">
              <Image
                src={book.imageUrl}
                alt={book.title}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="mt-6 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">Author</span>
              <p className="font-serif font-bold text-base text-foreground mt-0.5">Divjot Singh Arora</p>
            </div>
          </div>

          {/* Right Column: Book Details & Preview */}
          <div className="md:w-7/12 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                  {book.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                  <Star size={16} fill="currentColor" />
                  <span>{book.rating}</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                {book.title}
              </h2>

              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                {book.description}
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-3 flex items-center gap-2">
                  <BookOpen size={16} className="text-accent" />
                  Sample Table of Contents
                </h4>
                <div className="space-y-2.5 bg-secondary/5 dark:bg-white/5 p-4 rounded-2xl border border-primary/5 dark:border-white/5 text-sm">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Chapter 1:</strong> Foundations, Mindset & Core Principles</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Chapter 2:</strong> Step-by-Step Architecture & Real-World Execution</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Chapter 3:</strong> Practical Exercises, Case Studies & Projects</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Chapter 4:</strong> Scaling Mastery & Future Career Pathways</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-3">
                  Key Learning Highlights
                </h4>
                <div className="flex flex-wrap gap-2">
                  {book.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs bg-secondary/10 dark:bg-white/10 text-foreground px-3 py-1.5 rounded-xl font-medium"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-primary/10 dark:border-white/10 flex flex-col sm:flex-row gap-4">
              <a
                href={book.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-background rounded-xl font-medium hover:bg-accent transition-all shadow-lg shadow-black/10 text-center"
              >
                <ShoppingCart size={18} />
                Buy on Amazon
              </a>
              <button
                onClick={onClose}
                className="py-3.5 px-6 bg-secondary/10 dark:bg-white/10 text-foreground rounded-xl font-medium hover:bg-secondary/20 dark:hover:bg-white/20 transition-colors text-center"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

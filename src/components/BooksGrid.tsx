"use client";

import { useState } from "react";
import { Star, Eye, ShoppingCart, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BookData } from "@/data/books";
import { BookPreviewModal } from "./BookPreviewModal";
import { ComingSoonModal } from "./ComingSoonModal";

interface BooksGridProps {
  books: BookData[];
}

export function BooksGrid({ books }: BooksGridProps) {
  const [selectedBook, setSelectedBook] = useState<BookData | null>(null);
  const [comingSoonBook, setComingSoonBook] = useState<BookData | null>(null);

  if (books.length === 0) {
    return (
      <div className="py-20 text-center flex flex-col items-center">
        <div className="bg-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
          <Star className="text-muted" size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">No books found</h3>
        <p className="text-muted max-w-md">
          We couldn&apos;t find any books in this category right now. Check back later!
        </p>
        <Link href="/books" className="mt-8 px-6 py-3 bg-primary text-background rounded-xl font-medium hover:bg-accent transition-colors">
          View All Books
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {books.map((book) => (
          <div
            key={book.title}
            className="group flex flex-col h-full glass-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white/60 dark:bg-gray-900/60 border border-white/40 dark:border-white/10 relative"
          >
            {!book.available && (
              <div className="absolute top-4 right-4 z-10 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg tracking-wider uppercase">
                Coming Soon
              </div>
            )}

            <div className="h-72 sm:h-80 relative flex items-center justify-center bg-secondary/10 dark:bg-black/20 p-6">
              <Image
                src={book.imageUrl}
                alt={book.title}
                fill
                className={`object-contain p-6 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 ${!book.available ? 'opacity-85' : ''}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            <div className="p-8 flex flex-col flex-grow bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-t border-white/20 dark:border-white/5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                  {book.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <span className="text-sm font-bold text-foreground">{book.rating}</span>
                </div>
              </div>

              <h3 className="text-xl font-serif font-bold text-foreground mb-2 line-clamp-2">
                {book.title}
              </h3>

              <p className="text-muted mb-6 flex-grow text-sm line-clamp-3">{book.description}</p>

              <div className="mb-8 space-y-2">
                {book.highlights.slice(0, 3).map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {highlight}
                  </div>
                ))}
                {book.highlights.length > 3 && (
                  <div className="text-xs text-muted italic ml-3">
                    + {book.highlights.length - 3} more highlights
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 mt-auto">
                {book.available ? (
                  <>
                    <a
                      href={book.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 bg-primary text-background rounded-xl font-medium hover:bg-accent transition-colors shadow-lg shadow-black/5 text-sm sm:text-base"
                    >
                      <ShoppingCart size={18} />
                      Buy on Amazon
                    </a>
                    <button
                      onClick={() => setSelectedBook(book)}
                      className="flex items-center justify-center gap-2 py-3 bg-secondary/5 dark:bg-white/5 text-foreground rounded-xl font-medium border border-primary/10 hover:bg-secondary/10 dark:hover:bg-white/10 transition-colors text-sm sm:text-base"
                    >
                      <Eye size={18} />
                      Preview
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setComingSoonBook(book)}
                      className="flex items-center justify-center gap-2 py-3 bg-amber-500 text-black rounded-xl font-semibold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/10 text-sm sm:text-base"
                    >
                      <Bell size={18} />
                      Notify Me
                    </button>
                    <button
                      onClick={() => setComingSoonBook(book)}
                      className="flex items-center justify-center gap-2 py-3 bg-secondary/5 dark:bg-white/5 text-foreground rounded-xl font-medium border border-primary/10 hover:bg-secondary/10 dark:hover:bg-white/10 transition-colors text-sm sm:text-base"
                    >
                      <Eye size={18} />
                      Preview
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <BookPreviewModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />
      <ComingSoonModal
        book={comingSoonBook}
        onClose={() => setComingSoonBook(null)}
      />
    </>
  );
}

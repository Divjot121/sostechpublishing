import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { books } from "@/data/books";
import Link from "next/link";
import { BooksGrid } from "@/components/BooksGrid";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function BooksPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const categoryParam = resolvedSearchParams.category as string | undefined;

  const filteredBooks = categoryParam 
    ? books.filter(book => book.category.toLowerCase() === categoryParam.toLowerCase())
    : books;

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 min-h-screen relative overflow-hidden bg-secondary/5 dark:bg-black">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-12">
            <Link href="/" className="text-sm font-medium text-muted hover:text-foreground transition-colors mb-4 inline-block">
              &larr; Back to Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              {categoryParam ? `Books in "${categoryParam}"` : "All Books"}
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              {categoryParam 
                ? `Explore our collection of top-rated books in the ${categoryParam} category.`
                : "Discover our complete collection of practical guides designed to accelerate your learning journey."}
            </p>
          </div>

          <BooksGrid books={filteredBooks} />
        </div>
      </main>
      <Footer />
    </>
  );
}

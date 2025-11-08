// app/books/page.tsx
import BookCard, { Book } from "@/components/BookCard";

const books: Book[] = [
  {
    title: "The Practice of Happiness",
    subtitle: "A Guide to Inner Realignment",
    coverSrc: "/books/practice-of-happiness.png",
    amazonUrl:
      "https://www.amazon.com/Practice-Happiness-Guide-Inner-Realignment-ebook/dp/B0G147579Q?ref_=ast_author_dp_rw&th=1&psc=1",
  },
  {
    title: "AGE BETTER",
    subtitle: "The Body, Time, and Clarity",
    coverSrc: "/books/age-better.png",
    amazonUrl:
      "https://www.amazon.com/AGE-BETTER-Body-Time-Clarity-ebook/dp/B0G173QR5X?ref_=ast_author_dp_rw&th=1&psc=1",
  },
];

export const metadata = {
  title: "Books | Sébastien Studer",
  description: "Books by Sébastien Studer",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Books</h1>
        <p className="mt-2 text-slate-600">
          Explore published works by Sébastien Studer.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((b) => (
          <BookCard key={b.title} book={b} />
        ))}
      </section>
    </main>
  );
}

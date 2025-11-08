// components/BookCard.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type Book = {
  title: string;
  subtitle?: string;
  coverSrc: string; // public path starting with /
  amazonUrl: string;
};

export default function BookCard({ book }: { book: Book }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group rounded-2xl p-4 shadow-sm ring-1 ring-slate-200 hover:shadow-md bg-white"
    >
      <div className="w-full aspect-[3/4] relative overflow-hidden rounded-xl">
        <Image
          src={book.coverSrc}
          alt={`${book.title} cover`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain bg-slate-50"
          priority
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight">{book.title}</h3>
      {book.subtitle ? (
        <p className="mt-1 text-slate-600">{book.subtitle}</p>
      ) : null}
      <Link
        href={book.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 ring-1 ring-slate-300 hover:ring-slate-400"
      >
        View on Amazon
      </Link>
    </motion.article>
  );
}

'use client';
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Twitter, Mail, ShoppingCart } from 'lucide-react';

const books = [
  {
    id: 'acai',
    title: 'Açaí',
    cover: '/covers/acai.jpg',
    href: 'https://www.amazon.com/A%C3%A7a%C3%AD-Loving-Different-Obsessed-Perfection/dp/B0FZHF2RBH',
    tagline: 'A modern story about difference, family, and tenderness in a world obsessed with perfection.',
    description: "When NeuralNext offers to 'fix' their son, a family must choose between speed and softness—between optimization and the quiet work of love.",
  },
  {
    id: 'ai-first',
    title: 'AI FIRST',
    cover: '/covers/ai-first.jpg',
    href: 'https://www.amazon.com/AI-FIRST-Humanity-Machines-Decision/dp/B0FY4TMJ3T',
    tagline: 'How we handed our humanity to machines, one decision at a time.',
    description: 'A clear, punchy tour through automation creep—why convenience wins, what it costs, and how to reclaim deliberate choice in an AI-shaped world.',
  },
  {
    id: 'aligned',
    title: 'Aligned',
    cover: '/covers/aligned.jpg',
    href: 'https://www.amazon.com/Aligned-Small-Steps-Healthier-Happier/dp/B0FWXXXR6Z',
    tagline: 'The small steps to a healthier, happier life.',
    description: 'A field guide to habit craft: sleep, nutrition, training, stress, and simple routines that compound. Small steps, long arc.',
  },
  {
    id: 'instinct',
    title: 'Instinct',
    cover: '/covers/instinct.jpg',
    href: 'https://www.amazon.com/INSTINCT-Animal-Inside-Sebastien-Studer/dp/B0FYLZVGDP',
    tagline: 'The animal inside you.',
    description: "A concise parable about place, nature, and truth—asking the central question: 'Am I living in my right place?'",
  },
  {
    id: 'love-exposure',
    title: 'Love Exposure',
    cover: '/covers/love-exposure.jpg',
    href: 'https://www.amazon.com/Love-Exposure-Financial-Marriage-Protecting-ebook/dp/B0FVKSJ9SK',
    tagline: 'The hidden financial risks of marriage.',
    description: 'A practical guide to protecting love, assets, and peace of mind—prenups/postnups, titles, and risk-aware decisions for couples.',
  },
  {
    id: 'practice-of-happiness',
    title: 'The Practice of Happiness',
    cover: '/covers/practice-of-happiness.png',
    href: 'https://www.amazon.com/Practice-Happiness-Guide-Inner-Realignment-ebook/dp/B0G147579Q',
    tagline: 'A Guide to Inner Realignment.',
    description: 'Presence, simplicity, and inner balance—practical tools to realign your mind and days toward lasting happiness.',
  },
  {
    id: 'age-better',
    title: 'AGE BETTER',
    cover: '/covers/age-better.png',
    href: 'https://www.amazon.com/AGE-BETTER-Body-Time-Clarity-ebook/dp/B0G173QR5X',
    tagline: 'The Body, Time, and Clarity.',
    description: 'A modern look at longevity and vitality—from sleep and stress to movement and daily habits that compound.',
  },
];

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">{children}</div>;
}

function BooksCarousel() {
  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null);
  const scrollByAmount = (d) => {
    const el = scrollRef.current;
    if (!el) return;
    const amt = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: d * amt, behavior: 'smooth' });
  };

  return (
    <section id="books" className="bg-gradient-to-b from-neutral-950 to-neutral-900 py-12 text-neutral-100">
      <Container>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-heading text-2xl font-bold tracking-wide">BOOKS</h2>
          <div className="flex items-center gap-2">
            <button onClick={() => scrollByAmount(-1)} className="rounded-full border border-white/20 p-2 hover:bg-white/10" aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scrollByAmount(1)} className="rounded-full border border-white/20 p-2 hover:bg-white/10" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="relative overflow-x-auto scroll-smooth no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none;}`}</style>
          <div className="flex gap-4 pr-4">
            {books.map((b) => (
              <button key={b.id} onClick={() => setSelected(b)} className="group relative w-[46vw] min-w-[180px] max-w-[220px] flex-shrink-0 text-left md:w-[20%]" title={b.title}>
                <div className="overflow-hidden rounded-md border border-white/10 bg-neutral-800">
                  <img src={b.cover} alt={`${b.title} cover`} className="aspect-[2/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-2 text-sm text-neutral-300 group-hover:text-white">{b.title}</div>
              </button>
            ))}
          </div>
        </div>
        {selected && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true">
            <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl">
              <div className="grid gap-6 p-6 md:grid-cols-[260px_1fr]">
                <div className="rounded-md border border-white/10 bg-neutral-900 p-2">
                  <img src={selected.cover} alt={`${selected.title} cover`} className="w-full rounded" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selected.title}</h3>
                  {selected.tagline && <p className="mt-1 text-sm text-neutral-400">{selected.tagline}</p>}
                  {selected.description && <p className="mt-4 text-neutral-200">{selected.description}</p>}
                  <div className="mt-6 flex gap-3">
                    <a href={selected.href} target="_blank" rel="noreferrer" className="rounded-md bg-yellow-400 px-4 py-2 font-semibold text-neutral-950 hover:bg-yellow-300">
                      Buy on Amazon
                    </a>
                    <button onClick={() => setSelected(null)} className="rounded-md border border-white/20 px-4 py-2 font-semibold text-white hover:bg-white/10">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 font-sans text-white">
      <BooksCarousel />
    </main>
  );
}

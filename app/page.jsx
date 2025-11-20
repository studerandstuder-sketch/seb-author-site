'use client';import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Twitter, Mail, ShoppingCart } from "lucide-react";

// Updated books array: added Practice of Happiness + Age Better
const books = [
  {
    id: "acai",
    title: "Açaí",
    cover: "/covers/acai.jpg",
    href: "https://www.amazon.com/A%C3%A7a%C3%AD-Loving-Different-Obsessed-Perfection/dp/B0FZHF2RBH",
    tagline: "A modern story about difference, family, and tenderness in a world obsessed with perfection.",
    description:
      "When NeuralNext offers to 'fix' their son, a family must choose between speed and softness—between optimization and the quiet work of love.",
  },
  {
    id: "ai-first",
    title: "AI FIRST",
    cover: "/covers/ai-first.jpg",
    href: "https://www.amazon.com/AI-FIRST-Humanity-Machines-Decision/dp/B0FY4TMJ3T",
    tagline: "How we handed our humanity to machines, one decision at a time.",
    description:
      "A clear, punchy tour through automation creep—why convenience wins, what it costs, and how to reclaim deliberate choice in an AI-shaped world.",
  },
  {
    id: "aligned",
    title: "Aligned",
    cover: "/covers/aligned.jpg",
    href: "https://www.amazon.com/Aligned-Small-Steps-Healthier-Happier/dp/B0FWXXXR6Z",
    tagline: "The small steps to a healthier, happier life.",
    description:
      "A field guide to habit craft: sleep, nutrition, training, stress, and simple routines that compound. Small steps, long arc.",
  },
  {
    id: "instinct",
    title: "Instinct",
    cover: "/covers/instinct.jpg",
    href: "https://www.amazon.com/INSTINCT-Animal-Inside-Sebastien-Studer/dp/B0FYLZVGDP",
    tagline: "The animal inside you.",
    description:
      "A concise parable about place, nature, and truth—asking the central question: 'Am I living in my right place?'",
  },
  {
    id: "love-exposure",
    title: "Love Exposure",
    cover: "/covers/love-exposure.jpg",
    href: "https://www.amazon.com/Love-Exposure-Financial-Marriage-Protecting-ebook/dp/B0FVKSJ9SK",
    tagline: "The hidden financial risks of marriage.",
    description:
      "A practical guide to protecting love, assets, and peace of mind—prenups/postnups, titles, and risk-aware decisions for couples.",
  },

  // NEW
  {
    id: "practice-of-happiness",
    title: "The Practice of Happiness",
    cover: "/covers/practice-of-happiness.jpg",
    href: "https://www.amazon.com/Practice-Happiness-Guide-Inner-Realignment-ebook/dp/B0G147579Q",
    tagline: "A Guide to Inner Realignment.",
    description:
      "Presence, simplicity, and inner balance—practical tools to realign your mind and days toward lasting happiness.",
  },
  {
    id: "age-better",
    title: "AGE BETTER",
    cover: "/covers/age-better.jpg",
    href: "https://www.amazon.com/AGE-BETTER-Body-Time-Clarity-ebook/dp/B0G173QR5X",
    tagline: "The Body, Time, and Clarity.",
    description:
      "A modern look at longevity and vitality—from sleep and stress to movement and daily habits that compound.",
  },
];

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">{children}</div>;
}

function Nav() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur"
      role="banner"
    >
      <Container>
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="font-semibold tracking-wide text-white">
            SÉBASTIEN STUDER
          </a>
          <nav
            className="hidden gap-6 text-sm text-neutral-200 md:flex"
            aria-label="Main"
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Books", "#books"],
              ["News", "#news"],
              ["Media", "#media"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} className="hover:text-white" href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://www.amazon.com/stores/author/B0FWD1YYGS/allbooks?ingress=0&visitId=9577c040-fb7a-43db-b302-db1957ca9793&ccs_id=b172d1af-06cc-4f15-8f04-bee73d50d8d1"
              className="inline-flex items-center gap-2 rounded-full border border-yellow-500/50 px-3 py-1 text-xs font-medium text-yellow-400 hover:bg-yellow-500/10"
            >
              <ShoppingCart className="h-4 w-4" /> Amazon
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(253,230,138,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_30%)]" />
      <Container>
        <div className="grid gap-8 py-16 md:grid-cols-[1.3fr_1fr] md:items-center md:py-20">
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              SÉBASTIEN <span className="text-yellow-400">STUDER</span>
            </h1>
            <p className="mt-3 max-w-xl text-neutral-300">
              Author of <em>Love Exposure</em>, <em>Aligned</em>,{" "}
              <em>The Practice of Happiness</em>, <em>Age Better</em>,{" "}
              <em>Instinct</em>, <em>Açaí</em>… Essays and stories about money, health,
              aging, and family.
            </p>
            <p className="mt-1 text-sm text-neutral-400">
              Miami-based author • Engineer (M.Sc.) • Human Performance Researcher •
              Founder of the ALIGNISM™ Movement
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#books"
                className="rounded-md bg-yellow-400 px-4 py-2 font-semibold text-neutral-950 hover:bg-yellow-300"
              >
                Explore books
              </a>
              <a
                href="#news"
                className="rounded-md border border-white/20 px-4 py-2 font-semibold text-white hover:bg-white/10"
              >
                Latest news
              </a>
            </div>
          </div>
          <div className="relative z-10">
            <div className="mx-auto aspect-[4/5] max-w-xs overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-2xl">
              <img
                src="/images/author.jpg"
                alt="Sebastien Studer portrait"
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <p className="mt-2 text-center text-xs text-neutral-400">
              Photo © Sébastien Studer
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function News() {
  return (
    <section id="news" className="bg-neutral-950 py-12 text-neutral-100">
      <Container>
        <h2 className="mb-6 font-heading text-2xl font-bold tracking-wide">
          LATEST NEWS
        </h2>
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <article className="rounded-xl border border-white/10 bg-neutral-900 p-4 md:p-6">
            <div className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-6">
              <img
                src="/covers/liberty.jpg"
                alt="Liberty cover"
                className="mx-auto w-full max-w-[220px] rounded-md border border-white/10"
              />
              <div>
                <section id="liberty" className="mt-16 rounded-xl border border-white/10 bg-neutral-900 p-8">
  <h2 className="text-2xl font-bold mb-4">Liberty — Full Overview</h2>
  <p className="text-neutral-300 leading-relaxed">
    This section will contain the full presentation of Liberty — The Art of Living…
  </p>
  <p className="mt-4 text-neutral-400 text-sm">(Full content coming soon)</p>
</section>
                <h3 className="text-xl font-extrabold">
                  Liberty — Under Preparation
                </h3>
                <p className="mt-1 text-xs text-neutral-400">Target Release: 2026</p>
                <p className="mt-3 text-neutral-200">
                  Liberty — The Art of Living is currently in development. A philosophical exploration of autonomy, clarity, and the architecture of a free life — the core pillar of the Alignism™ movement.
                </p>
               <a
  href="/#liberty"
  className="mt-4 inline-block rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition"
>
  Read more
</a>
              </div>
            </div>
          </article>
          <aside className="rounded-xl border border-white/10 bg-neutral-900 p-4 md:p-6">
            <div className="flex items-center gap-2">
              <Twitter className="h-5 w-5" />
              <h4 className="text-sm font-semibold">
                @sebastienstuder — Micro updates
              </h4>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              <li className="border-l-2 border-yellow-400/80 pl-3">
    <em>Aligned</em> (French Version) — Audible version now online.
    <div className="text-xs text-neutral-400">Nov 20, 2025</div>
  </li>
  <li className="border-l-2 border-yellow-400/80 pl-3">
                New French translation of <em>Aligned</em> in progress.
                <div className="text-xs text-neutral-400">Nov 7, 2025</div>
              </li>
              <li className="border-l-2 border-yellow-400/80 pl-3">
                Preparing book signing in Miami.
                <div className="text-xs text-neutral-400">Nov 3, 2025</div>
              </li>
              <li className="border-l-2 border-yellow-400/80 pl-3">
                <em>Açaí</em> paperback now available worldwide.
                <div className="text-xs text-neutral-400">Oct 29, 2025</div>
              </li>
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function BooksCarousel() {
  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null);
  const scrollByAmount = (d) => {
    const el = scrollRef.current;
    if (!el) return;
    const amt = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: d * amt, behavior: "smooth" });
  };
  return (
    <section
      id="books"
      className="bg-gradient-to-b from-neutral-950 to-neutral-900 py-12 text-neutral-100"
    >
      <Container>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-heading text-2xl font-bold tracking-wide">BOOKS</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollByAmount(-1)}
              className="rounded-full border border-white/20 p-2 hover:bg-white/10"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollByAmount(1)}
              className="rounded-full border border-white/20 p-2 hover:bg-white/10"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="relative overflow-x-auto scroll-smooth no-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none;}`}</style>
          <div className="flex gap-4 pr-4">
            {books.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelected(b)}
                className="group relative w-[46vw] min-w-[180px] max-w-[220px] flex-shrink-0 text-left md:w-[20%]"
                title={b.title}
              >
                <div className="overflow-hidden rounded-md border border-white/10 bg-neutral-800">
                  <img
                    src={b.cover}
                    alt={`${b.title} cover`}
                    className="aspect-[2/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-2 text-sm text-neutral-300 group-hover:text-white">
                  {b.title}
                </div>
              </button>
            ))}
          </div>
        </div>
        {selected && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl">
              <div className="grid gap-6 p-6 md:grid-cols-[260px_1fr]">
                <div className="rounded-md border border-white/10 bg-neutral-900 p-2">
                  <img
                    src={selected.cover}
                    alt={`${selected.title} cover`}
                    className="w-full rounded"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {selected.title}
                  </h3>
                  {selected.tagline && (
                    <p className="mt-1 text-sm text-neutral-400">
                      {selected.tagline}
                    </p>
                  )}
                  {selected.description && (
                    <p className="mt-4 text-neutral-200">
                      {selected.description}
                    </p>
                  )}
                  <div className="mt-6 flex gap-3">
                    <a
                      href={selected.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md bg-yellow-400 px-4 py-2 font-semibold text-neutral-950 hover:bg-yellow-300"
                    >
                      Buy on Amazon
                    </a>
                    <button
                      onClick={() => setSelected(null)}
                      className="rounded-md border border-white/20 px-4 py-2 font-semibold text-white hover:bg-white/10"
                    >
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

function About() {
  return (
    <section id="about" className="bg-neutral-900 py-12 text-neutral-200">
      <Container>
        <h2 className="mb-4 font-heading text-2xl font-bold tracking-wide">ABOUT</h2>
<p className="max-w-3xl leading-relaxed text-neutral-300 md:text-justify">
  Sébastien Studer, M.Sc., is a French engineer, human performance
  researcher, and the founder of the ALIGNISM™ Movement — a modern
  philosophy dedicated to living with clarity, instinct, and coherence.
  <br /><br />
  His work explores the intersections of love, money, health, aging,
  and meaning through both fiction and non-fiction. Based in Miami and
  living between the United States and Brazil, Sébastien writes with a
  distinct, minimalist voice shaped by science, movement, and lived
  experience across cultures.
  <br /><br />
  Known for his direct style that favors clarity over noise, he creates
  practical frameworks and modern parables that help readers realign
  their lives toward simplicity, peace of mind, and what truly matters.
</p>
      </Container>
    </section>
  );
}

function MediaContact() {
  return (
    <section id="contact" className="bg-neutral-900 py-12 text-neutral-200">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold tracking-wide">
              MEDIA
            </h2>
            <ul className="space-y-2 text-neutral-300">
              <li>
                Press kit (bio, photos, covers) —{" "}
                <a className="text-yellow-300 underline" href="#">
                  Download
                </a>
              </li>
              <li>
                Amazon Author Page —{" "}
                <a
                  className="text-yellow-300 underline"
                  href="https://www.amazon.com/stores/author/B0FWD1YYGS/about?ccs_id=b13bb812-4047-4672-a420-38c0090df26b"
                >
                  View
                </a>
              </li>
              <li>
                Audible & Podcasts —{" "}
                <a className="text-yellow-300 underline" href="https://www.audible.com/search?keywords=sebastien+studer&k=sebastien+studer">
                  Listen
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold tracking-wide">
              CONTACT
            </h2>
            <p className="text-neutral-300">
              For events, interviews, or rights inquiries:
            </p>
            <a
              href="mailto:contact@sebastienstuder.com"
              className="mt-2 inline-flex items-center gap-2 text-yellow-300 underline"
            >
              <Mail className="h-4 w-4" /> contact@sebastienstuder.com
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-950 py-8 text-neutral-400">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
          <div>
            © {new Date().getFullYear()} Sébastien Studer, M.Sc. All rights
            reserved.
          </div>
          <div>
            Designed with ❤️ using Tailwind • Inspired by classic author sites.
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 font-sans text-white">
      <Nav />
      <Hero />
      <News />
      <BooksCarousel />
      <About />
      <MediaContact />
      <Footer />
    </main>
  );
}

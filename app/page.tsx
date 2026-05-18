"use client";
import Image from "next/image";

import { products } from "@/lib/data";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex-1">
      {/* ───── Navigation ───── */}
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-sand/50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-semibold tracking-wide text-espresso"
          >
            Dar Tizgui
          </a>
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#collection"
              className="text-sm tracking-widest uppercase text-clay-dark hover:text-espresso transition-colors duration-300"
            >
              Collection
            </a>
            <a
              href="/our-story"
              className="text-sm tracking-widest uppercase text-clay-dark hover:text-espresso transition-colors duration-300"
            >
              Our Story
            </a>
            <a
              href="#newsletter"
              className="text-sm tracking-widest uppercase text-clay-dark hover:text-espresso transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#collection"
              className="text-sm tracking-wider uppercase px-6 py-2.5 border border-espresso text-espresso hover:bg-espresso hover:text-cream transition-all duration-300"
            >
              Shop
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            id="mobile-menu-btn"
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-espresso" />
            <span className="block w-6 h-px bg-espresso" />
            <span className="block w-4 h-px bg-espresso" />
          </button>
        </div>
      </nav>

      {/* ───── Hero Section ───── */}
      <section
        id="hero"
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Luxury Moroccan interior with handmade Berber rug"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/25 to-espresso/60" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="animate-fade-in-up opacity-0 text-cream/80 text-xs md:text-sm tracking-[0.35em] uppercase mb-6 md:mb-8 font-[family-name:var(--font-outfit)]">
            Authentic Berber Craftsmanship
          </p>
          <h1 className="animate-fade-in-up opacity-0 delay-200 font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream leading-[1.1] tracking-tight">
            Handmade
            <br />
            Moroccan Rugs
          </h1>
          <p className="animate-fade-in-up opacity-0 delay-400 font-[family-name:var(--font-outfit)] text-cream/70 text-base md:text-lg font-light mt-6 md:mt-8 max-w-xl mx-auto leading-relaxed">
            Crafted by artisans. Timeless design for modern homes.
          </p>
          <div className="animate-fade-in-up opacity-0 delay-600 mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#collection"
              id="hero-shop-btn"
              className="inline-flex items-center gap-3 px-10 py-4 bg-cream text-espresso text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-outfit)] hover:bg-warm-white transition-all duration-300 group"
            >
              Shop Collection
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <a
              href="/our-story"
              className="inline-flex items-center gap-2 px-8 py-4 border border-cream/40 text-cream/90 text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-outfit)] hover:border-cream hover:text-cream transition-all duration-300"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 delay-800">
          <div className="flex flex-col items-center gap-2">
            <span className="text-cream/50 text-[10px] tracking-[0.3em] uppercase font-[family-name:var(--font-outfit)]">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-cream/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ───── Featured Collection ───── */}
      <section
        id="collection"
        className="py-24 md:py-36 px-6 md:px-12 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 md:mb-24">
            <p className="text-clay text-xs tracking-[0.35em] uppercase mb-4 font-[family-name:var(--font-outfit)]">
              Curated Selection
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-espresso tracking-tight">
              Featured Collection
            </h2>
            <div className="w-12 h-px bg-sand-dark mx-auto mt-6" />
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, i) => (
              <Link
                href={`/product/${product.slug}`}
                key={product.name}
                id={`product-${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group cursor-pointer block"
              >
                {/* Image container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-sand-light mb-5">
                  <Image
                    src={product.image}
                    alt={`${product.name} Moroccan rug`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-500" />
                  {/* Quick view button */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="block text-center w-full py-3 bg-cream/95 backdrop-blur-sm text-espresso text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-outfit)] hover:bg-cream transition-colors duration-200">
                      Quick View
                    </span>
                  </div>
                  {/* Tag */}
                  {product.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-cream/90 backdrop-blur-sm text-espresso text-[10px] tracking-[0.2em] uppercase font-[family-name:var(--font-outfit)]">
                      {product.tag}
                    </span>
                  )}
                </div>
                {/* Product info */}
                <div className="space-y-1">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-espresso group-hover:text-clay-dark transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-clay text-sm font-[family-name:var(--font-outfit)]">
                      {product.size}
                    </p>
                    <p className="text-espresso text-sm font-medium font-[family-name:var(--font-outfit)]">
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View all link */}
          <div className="text-center mt-16 md:mt-20">
            <a
              href="#"
              id="view-all-btn"
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-clay-dark hover:text-espresso font-[family-name:var(--font-outfit)] transition-colors duration-300 group"
            >
              View All Pieces
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ───── About / Story Section ───── */}
      <section id="story" className="py-24 md:py-36 bg-sand-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/artisan.png"
                alt="Moroccan artisan weaving a traditional Berber rug"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text side */}
            <div className="lg:pl-8">
              <p className="text-clay text-xs tracking-[0.35em] uppercase mb-4 font-[family-name:var(--font-outfit)]">
                Our Story
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-espresso tracking-tight leading-[1.15] mb-8">
                Woven by Hand,
                <br />
                Passed Through
                <br />
                Generations
              </h2>
              <div className="w-12 h-px bg-sand-dark mb-8" />
              <div className="space-y-5 text-clay-dark text-base leading-relaxed font-[family-name:var(--font-outfit)] font-light">
                <p>
                  Each rug in our collection is handwoven by Berber women in the
                  Atlas Mountains of Morocco — a tradition stretching back
                  centuries. No two pieces are alike; every knot carries the
                  story of its maker.
                </p>
                <p>
                  We work directly with artisan cooperatives, ensuring fair wages
                  and preserving techniques that might otherwise be lost. When
                  you bring a Dar Tizgui rug into your home, you&apos;re not just
                  choosing décor — you&apos;re continuing a legacy.
                </p>
                <p>
                  From the raw wool sourced from local flocks to the natural dyes
                  derived from saffron, henna, and indigo — every step honors
                  the earth and the hands that shape it.
                </p>
              </div>
              <a
                href="/our-story"
                id="learn-more-btn"
                className="inline-flex items-center gap-3 mt-10 text-sm tracking-[0.2em] uppercase text-espresso font-[family-name:var(--font-outfit)] group"
              >
                Learn More
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Values Strip ───── */}
      <section className="py-16 md:py-20 bg-espresso">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              ),
              title: "Free Worldwide Shipping",
              desc: "On all orders over €500",
            },
            {
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              ),
              title: "Authenticity Guaranteed",
              desc: "Certificate with every rug",
            },
            {
              icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              ),
              title: "Artisan Direct",
              desc: "Fair trade & ethically sourced",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="text-sand-dark">{item.icon}</div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg text-cream font-medium tracking-wide">
                {item.title}
              </h3>
              <p className="text-sand-dark text-sm font-[family-name:var(--font-outfit)] font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── Newsletter Section ───── */}
      <section
        id="newsletter"
        className="py-24 md:py-36 bg-cream"
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-clay text-xs tracking-[0.35em] uppercase mb-4 font-[family-name:var(--font-outfit)]">
            Stay Connected
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-espresso tracking-tight mb-4">
            Join Our World
          </h2>
          <p className="text-clay-dark text-base font-[family-name:var(--font-outfit)] font-light leading-relaxed mb-10 max-w-md mx-auto">
            Receive early access to new arrivals, artisan stories, and
            exclusive offers — delivered thoughtfully to your inbox.
          </p>
          <form
            id="newsletter-form"
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-4 bg-warm-white border border-sand text-espresso placeholder:text-sand-dark text-sm font-[family-name:var(--font-outfit)] focus:outline-none focus:border-clay transition-colors duration-300"
              required
            />
            <button
              id="newsletter-submit"
              type="submit"
              className="px-8 py-4 bg-espresso text-cream text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-outfit)] hover:bg-clay-dark transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sand-dark text-xs font-[family-name:var(--font-outfit)] mt-5">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer
        id="footer"
        className="bg-espresso text-sand-dark py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Brand column */}
            <div className="md:col-span-1">
              <a
                href="#"
                className="font-[family-name:var(--font-cormorant)] text-2xl text-cream font-semibold tracking-wide"
              >
                Dar Tizgui
              </a>
              <p className="text-sm font-[family-name:var(--font-outfit)] font-light mt-4 leading-relaxed">
                Authentic Moroccan rugs,
                <br />
                handwoven in the Atlas Mountains.
              </p>
            </div>

            {/* Shop column */}
            <div>
              <h4 className="text-cream text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-outfit)] mb-5">
                Shop
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Beni Ourain", href: "/collections/beni-ourain" },
                  { name: "Azilal", href: "/collections/azilal" },
                  { name: "Boujaad", href: "/collections/boujaad" },
                  { name: "Kilim", href: "/collections/kilim" },
                  { name: "All Rugs", href: "/collections/all" }
                ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Info column */}
            <div>
              <h4 className="text-cream text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-outfit)] mb-5">
                Information
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Our Story", href: "/our-story" },
                  { label: "Shipping & Returns", href: "/shipping-returns" },
                  { label: "Rug Care Guide", href: "/rug-care" },
                  { label: "FAQ", href: "/faq" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect column */}
            <div>
              <h4 className="text-cream text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-outfit)] mb-5">
                Connect
              </h4>
              <ul className="space-y-3">
                {["Instagram", "Pinterest", "Facebook"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-clay-dark/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-[family-name:var(--font-outfit)] font-light">
              © 2026 Dar Tizgui. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

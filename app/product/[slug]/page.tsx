"use client";

import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null
  );

  const displayPrice = selectedOption ? selectedOption.price : product.price;
  const displaySize = selectedOption ? selectedOption.size : product.size;

  return (
    <main className="flex-1 min-h-screen bg-background pt-24 md:pt-32 pb-16">
      {/* ───── Navigation ───── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-sand/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-semibold tracking-wide text-espresso"
          >
            Dar Tizgui
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/#collection"
              className="text-sm tracking-widest uppercase text-clay-dark hover:text-espresso transition-colors duration-300"
            >
              Collection
            </Link>
            <Link
              href="/our-story"
              className="text-sm tracking-widest uppercase text-clay-dark hover:text-espresso transition-colors duration-300"
            >
              Our Story
            </Link>
            <a
              href="#footer"
              className="text-sm tracking-widest uppercase text-clay-dark hover:text-espresso transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          <Link
            href="/#collection"
            className="hidden md:inline-flex text-sm tracking-wider uppercase px-6 py-2.5 border border-espresso text-espresso hover:bg-espresso hover:text-cream transition-all duration-300"
          >
            Shop
          </Link>
        </div>
      </nav>

      {/* ───── Product Detail ───── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8">
        <Link href="/#collection" className="text-clay text-xs tracking-[0.2em] uppercase font-medium hover:text-espresso transition-colors">
          ← Back to Collection
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
          {/* Image Gallery */}
          <div className="relative aspect-[3/4] w-full bg-sand-light overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              {product.tag && (
                <span className="inline-block px-3 py-1 bg-sand border border-clay/30 text-espresso text-[10px] tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-outfit)]">
                  {product.tag}
                </span>
              )}
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-espresso font-light tracking-tight mb-4">
                {product.name}
              </h1>
              <p className="text-2xl text-espresso font-medium font-[family-name:var(--font-outfit)]">
                {displayPrice}
              </p>
            </div>

            <div className="w-12 h-px bg-sand-dark" />

            <div className="space-y-4 text-clay-dark font-light font-[family-name:var(--font-outfit)] leading-relaxed text-base">
              <p>{product.description}</p>
            </div>

            {/* Options */}
            {product.options ? (
              <div className="space-y-4 pt-4">
                <label className="block text-xs tracking-[0.2em] uppercase text-clay font-medium">Select Size</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {product.options.map((opt) => (
                    <button
                      key={opt.size}
                      onClick={() => setSelectedOption(opt)}
                      className={`py-3 px-4 border text-sm font-[family-name:var(--font-outfit)] transition-colors duration-300 ${
                        selectedOption?.size === opt.size
                          ? "border-espresso bg-espresso text-cream"
                          : "border-sand text-espresso hover:border-clay"
                      }`}
                    >
                      {opt.size}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="pt-4">
                <span className="block text-xs tracking-[0.2em] uppercase text-clay font-medium mb-2">Dimensions</span>
                <p className="text-espresso font-medium font-[family-name:var(--font-outfit)]">{displaySize}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-8 space-y-4">
              <button className="w-full py-5 bg-espresso text-cream text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-outfit)] hover:bg-clay-dark transition-colors duration-300">
                Add to Cart
              </button>
              <p className="text-center text-xs text-clay font-light font-[family-name:var(--font-outfit)]">
                Free worldwide shipping on this piece. Delivery within 3-5 days.
                <br/>(Custom orders take 4-6 months).
              </p>
            </div>

          </div>
        </div>
      </div>
      
      {/* ───── Footer placeholder ───── */}
      <footer id="footer" className="bg-espresso text-sand-dark py-16 md:py-20 mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
           <Link href="/" className="font-[family-name:var(--font-cormorant)] text-2xl text-cream font-semibold tracking-wide block mb-8">
            Dar Tizgui
          </Link>
          <div className="flex items-center justify-center gap-6">
            <Link href="/our-story" className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300">Our Story</Link>
            <Link href="/shipping-returns" className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300">Shipping & Returns</Link>
            <Link href="/rug-care" className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300">Rug Care Guide</Link>
            <Link href="/faq" className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300">FAQ</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

"use client";

import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  
  const validCategories = ["beni-ourain", "azilal", "boujaad", "kilim", "all"];
  
  if (!validCategories.includes(category)) {
    notFound();
  }

  const filteredProducts = category === "all" 
    ? products 
    : products.filter(p => p.category === category);
    
  const categoryTitle = category === "all" 
    ? "All Rugs" 
    : category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <main className="flex-1 min-h-screen bg-background pt-24 md:pt-32 pb-16">
      {/* ───── Navigation ───── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-sand/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-semibold tracking-wide text-espresso">
            Dar Tizgui
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href="/collections/all" className="text-sm tracking-widest uppercase text-clay-dark hover:text-espresso transition-colors duration-300">
              Collection
            </Link>
            <Link href="/our-story" className="text-sm tracking-widest uppercase text-clay-dark hover:text-espresso transition-colors duration-300">
              Our Story
            </Link>
            <Link href="/#footer" className="text-sm tracking-widest uppercase text-clay-dark hover:text-espresso transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* ───── Collection Header ───── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 text-center">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-espresso font-light tracking-tight mb-4">
          {categoryTitle} Collection
        </h1>
        <p className="text-clay-dark font-light font-[family-name:var(--font-outfit)] max-w-2xl mx-auto">
          Explore our handpicked selection of authentic Moroccan {categoryTitle.toLowerCase()} rugs, woven with tradition and care.
        </p>
      </div>

      {/* ───── Product Grid ───── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-clay-dark py-20 font-[family-name:var(--font-outfit)]">No rugs currently available in this collection.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <Link
                href={`/product/${product.slug}`}
                key={product.name}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-sand-light mb-5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="block text-center w-full py-3 bg-cream/95 backdrop-blur-sm text-espresso text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-outfit)] hover:bg-cream transition-colors duration-200">
                      Quick View
                    </span>
                  </div>
                  {product.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cream/90 backdrop-blur-md text-espresso text-[10px] tracking-[0.2em] uppercase font-[family-name:var(--font-outfit)]">
                        {product.tag}
                      </span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-espresso">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-clay-dark font-light font-[family-name:var(--font-outfit)] text-sm">
                      {product.size}
                    </p>
                    <p className="text-espresso font-medium font-[family-name:var(--font-outfit)] text-sm">
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      
      {/* ───── Footer placeholder ───── */}
      <footer id="footer" className="bg-espresso text-sand-dark py-16 md:py-20 mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
           <Link href="/" className="font-[family-name:var(--font-cormorant)] text-2xl text-cream font-semibold tracking-wide block mb-8">
            Dar Tizgui
          </Link>
          <div className="flex items-center justify-center gap-6">
            <Link href="/collections/all" className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300">All Rugs</Link>
            <Link href="/our-story" className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300">Our Story</Link>
            <Link href="/shipping-returns" className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300">Shipping & Returns</Link>
            <Link href="/faq" className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300">FAQ</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

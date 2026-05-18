import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      question: "Are your rugs authentically handmade in Morocco?",
      answer: "Yes. Every single piece in our collection is 100% handwoven by skilled artisans in the Atlas Mountains of Morocco. We work directly with artisan cooperatives to ensure ethical practices and preserve centuries-old weaving traditions."
    },
    {
      question: "What materials are used in your rugs?",
      answer: "We strictly use 100% natural, high-grade sheep’s wool sourced locally in the Atlas Mountains. The vibrant colors are achieved using natural, plant-based dyes like saffron, henna, and indigo."
    },
    {
      question: "Do you offer custom sizes or bespoke designs?",
      answer: "Absolutely. If you have specific dimensions or a unique design in mind, we can commission a bespoke rug just for you. Because of the intricate hand-weaving process, custom orders take approximately 4 to 6 months to complete."
    },
    {
      question: "Will the rug shed?",
      answer: "Yes, shedding is completely natural for a new, high-quality wool rug and is not a defect. The shedding will gradually subside over the first few months with regular vacuuming and normal foot traffic."
    },
    {
      question: "How do I clean and maintain my rug?",
      answer: "We recommend regular vacuuming using a suction-only setting (never use a beater bar). For spills, blot immediately—never rub. For comprehensive deep cleaning, we advise taking it to a professional oriental rug cleaner every 1 to 3 years. Please see our full Rug Care Guide for details."
    },
    {
      question: "How long does shipping take?",
      answer: "For ready-to-order pieces, we process the order in 1-2 business days, and worldwide delivery typically takes 3-5 business days via standard shipping."
    }
  ];

  return (
    <main className="flex-1 min-h-screen bg-background">
      {/* ───── Navigation ───── */}
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-sand/50"
      >
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

      {/* ───── Page Header ───── */}
      <section className="pt-32 md:pt-48 pb-16 px-6 md:px-12 bg-sand-light">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-clay text-xs tracking-[0.35em] uppercase mb-4 font-[family-name:var(--font-outfit)]">
            Assistance
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-espresso tracking-tight">
            Frequently Asked Questions
          </h1>
          <div className="w-12 h-px bg-sand-dark mx-auto mt-8" />
        </div>
      </section>

      {/* ───── Content ───── */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-4">
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-espresso font-medium">
                  {faq.question}
                </h2>
                <p className="text-clay-dark font-[family-name:var(--font-outfit)] font-light leading-relaxed text-base">
                  {faq.answer}
                </p>
                {index !== faqs.length - 1 && (
                  <div className="w-full h-px bg-sand mt-8" />
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-8 bg-sand-light text-center border border-sand">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-espresso mb-4">
              Still have questions?
            </h3>
            <p className="text-clay-dark font-[family-name:var(--font-outfit)] font-light mb-6">
              We're here to help you find the perfect piece for your home.
            </p>
            <a
              href="#footer"
              className="inline-flex items-center justify-center px-8 py-4 bg-espresso text-cream text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-outfit)] hover:bg-clay-dark transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer id="footer" className="bg-espresso text-sand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Brand column */}
            <div className="md:col-span-1">
              <Link href="/" className="font-[family-name:var(--font-cormorant)] text-2xl text-cream font-semibold tracking-wide">
                Dar Tizgui
              </Link>
              <p className="text-sm font-[family-name:var(--font-outfit)] font-light mt-4 leading-relaxed">
                Authentic Moroccan rugs,<br />handwoven in the Atlas Mountains.
              </p>
            </div>

            {/* Shop column */}
            <div>
              <h4 className="text-cream text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-outfit)] mb-5">Shop</h4>
              <ul className="space-y-3">
                {["Beni Ourain", "Azilal", "Boujaad", "Kilim", "All Rugs"].map((item) => (
                  <li key={item}>
                    <Link href="/#collection" className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info column */}
            <div>
              <h4 className="text-cream text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-outfit)] mb-5">Information</h4>
              <ul className="space-y-3">
                {[
                  { label: "Our Story", href: "/our-story" },
                  { label: "Shipping & Returns", href: "/shipping-returns" },
                  { label: "Rug Care Guide", href: "/rug-care" },
                  { label: "FAQ", href: "/faq" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect column */}
            <div>
              <h4 className="text-cream text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-outfit)] mb-5">Connect</h4>
              <ul className="space-y-3">
                {["Instagram", "Pinterest", "Facebook"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300">
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
              <a href="#" className="text-xs font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-xs font-[family-name:var(--font-outfit)] font-light hover:text-cream transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

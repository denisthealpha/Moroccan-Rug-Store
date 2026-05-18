import Link from "next/link";

export default function ShippingReturns() {
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
            Policies
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-espresso tracking-tight">
            Shipping & Returns
          </h1>
          <div className="w-12 h-px bg-sand-dark mx-auto mt-8" />
        </div>
      </section>

      {/* ───── Content ───── */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-16">
          
          {/* Shipping Policy */}
          <div className="space-y-6 text-clay-dark font-[family-name:var(--font-outfit)] font-light leading-relaxed">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-espresso font-medium mb-8">
              Shipping & Processing
            </h2>
            
            <p>
              We take great pride in delivering your artisanal Moroccan rugs safely and securely to your home. Every order is handled with the utmost care to ensure it arrives in pristine condition.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="p-6 bg-white border border-sand">
                <h3 className="text-sm tracking-[0.2em] uppercase text-espresso mb-3 font-medium">Ready-to-Order Rugs</h3>
                <p className="text-sm">
                  <strong className="text-espresso font-medium">Processing Time:</strong> 1–2 business days.<br/>
                  <strong className="text-espresso font-medium">Delivery:</strong> 3–5 business days worldwide.
                </p>
              </div>
              
              <div className="p-6 bg-white border border-sand">
                <h3 className="text-sm tracking-[0.2em] uppercase text-espresso mb-3 font-medium">Custom-Made Rugs</h3>
                <p className="text-sm">
                  <strong className="text-espresso font-medium">Processing Time:</strong> 4–6 months.<br/>
                  <strong className="text-espresso font-medium">Delivery:</strong> 3–5 business days after completion.
                </p>
              </div>
            </div>

            <p className="mt-8">
              For custom orders, the extensive 4-6 month timeline reflects the authentic, traditional hand-weaving process our artisans follow in the Atlas Mountains. Quality of this magnitude simply cannot be rushed.
            </p>
          </div>

          <div className="w-full h-px bg-sand" />

          {/* Returns Policy */}
          <div className="space-y-6 text-clay-dark font-[family-name:var(--font-outfit)] font-light leading-relaxed">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-espresso font-medium mb-8">
              Returns & Exchanges
            </h2>
            
            <p>
              We want you to love your Dar Tizgui piece. If you are not entirely satisfied with a ready-to-order purchase, we offer a straightforward return policy.
            </p>

            <div className="space-y-8 mt-8">
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-espresso mb-3 font-medium">Standard Returns</h3>
                <p>
                  Returns are accepted for all <strong>ready-to-order rugs</strong> within 14 days of delivery. The item must be returned in its original, unused condition. Customers are responsible for return shipping costs unless the item arrived damaged.
                </p>
              </div>
              
              <div className="p-6 bg-sand-light/50 border-l-4 border-espresso">
                <h3 className="text-sm tracking-[0.2em] uppercase text-espresso mb-3 font-medium">Custom Orders (Final Sale)</h3>
                <p>
                  Please note that <strong>returns are not accepted for custom-made rugs</strong>. Because these pieces are woven specifically to your bespoke dimensions, colors, and patterns, they are considered final sale. We work closely with you during the design process to ensure the final product meets your exact specifications.
                </p>
              </div>
            </div>
            
            <p className="mt-8">
              To initiate a return for an eligible item, please contact our support team with your order number and we will provide you with the return instructions and shipping address.
            </p>
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

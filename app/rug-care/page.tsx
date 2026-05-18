import Link from "next/link";

export default function RugCare() {
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
            Maintenance & Care
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-espresso tracking-tight">
            Rug Care Guide
          </h1>
          <div className="w-12 h-px bg-sand-dark mx-auto mt-8" />
        </div>
      </section>

      {/* ───── Content ───── */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-16">
          
          <div className="space-y-6 text-clay-dark font-[family-name:var(--font-outfit)] font-light leading-relaxed">
            <p className="text-lg">
              Authentic Moroccan rugs are handwoven from 100% natural, high-grade sheep’s wool. With proper care, your Dar Tizgui piece will not only last a lifetime but will also grow softer and more beautiful over the years. Below is a comprehensive guide to maintaining the integrity, texture, and vibrant colors of your rug.
            </p>
          </div>

          <div className="w-full h-px bg-sand" />

          {/* Routine Maintenance */}
          <div className="space-y-6 text-clay-dark font-[family-name:var(--font-outfit)] font-light leading-relaxed">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-espresso font-medium mb-8">
              Routine Maintenance
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-espresso mb-3 font-medium">1. Vacuuming</h3>
                <p>
                  Vacuum your rug regularly to prevent dirt from settling deep into the fibers. <strong>Always use the suction-only setting.</strong> Never use a beater bar or motorized brush attachment, as these can pull, fray, or severely damage the hand-spun wool fibers. For high-pile (Beni Ourain) rugs, we recommend using an upholstery attachment and vacuuming side-to-side across the width rather than up and down the length.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-espresso mb-3 font-medium">2. Shaking & Airing Out</h3>
                <p>
                  Traditional Moroccan care involves taking the rug outside once a month, shaking it vigorously to remove loose dust, and draping it over a railing to air out for a few hours in indirect sunlight. This refreshes the wool naturally and prevents dust buildup.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-espresso mb-3 font-medium">3. Rotating</h3>
                <p>
                  Rotate your rug 180 degrees every 3 to 6 months. This ensures even wear over time and prevents fading in specific areas if the rug is exposed to direct sunlight.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-espresso mb-3 font-medium">4. Shedding (Important)</h3>
                <p>
                  Shedding is entirely natural for new, high-quality wool rugs and does not indicate a defect. You may notice loose fibers during the first few months of use. This will subside gradually with regular vacuuming and foot traffic.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-sand" />

          {/* Spills and Stains */}
          <div className="space-y-6 text-clay-dark font-[family-name:var(--font-outfit)] font-light leading-relaxed">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-espresso font-medium mb-8">
              Handling Spills & Stains
            </h2>
            
            <div className="p-6 bg-sand-light/50 border-l-4 border-espresso space-y-4">
              <p>
                <strong>The Golden Rule: Act quickly and NEVER rub.</strong>
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>Blot Immediately:</strong> Use a clean, undyed white cloth or paper towel to press down and absorb as much liquid as possible. Rubbing will push the stain deeper into the wool and distort the pile.</li>
                <li><strong>Dilute (If Necessary):</strong> If a stain remains, lightly dab the area with a small amount of cold water. Do not saturate the rug, as natural wool takes a long time to dry and can develop mildew if left soaking wet.</li>
                <li><strong>Mild Soap Only:</strong> For stubborn stains (like wine or coffee), you can use a tiny drop of a mild, pH-neutral wool-safe detergent mixed with water. Apply with a clean cloth, blot gently, and rinse by blotting with plain cold water.</li>
                <li><strong>Drying:</strong> Elevate the damp section of the rug so air can circulate underneath until it is completely dry.</li>
              </ul>
            </div>
          </div>

          <div className="w-full h-px bg-sand" />

          {/* Deep Cleaning */}
          <div className="space-y-6 text-clay-dark font-[family-name:var(--font-outfit)] font-light leading-relaxed">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-espresso font-medium mb-8">
              Professional Deep Cleaning
            </h2>
            <p>
              Depending on foot traffic, we recommend having your rug professionally cleaned every 1 to 3 years.
            </p>
            <p>
              <strong>Critical Warning:</strong> Never machine wash, steam clean, or dry clean your Moroccan rug. Harsh chemicals will strip the natural lanolin oil from the wool (which acts as a natural stain repellent) and ruin the rug's texture and color. Always take it to a specialized oriental rug cleaner who hand-washes rugs using traditional water-immersion methods.
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

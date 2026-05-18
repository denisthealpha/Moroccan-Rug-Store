import Link from "next/link";
import Image from "next/image";

export default function OurStory() {
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
            Heritage & Legacy
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-espresso tracking-tight">
            Our Story
          </h1>
          <div className="w-12 h-px bg-sand-dark mx-auto mt-8" />
        </div>
      </section>

      {/* ───── Content ───── */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          
          <div className="space-y-12 text-clay-dark font-[family-name:var(--font-outfit)] font-light leading-relaxed text-lg">
            
            <div className="space-y-6">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-espresso font-medium">
                A Legacy Built on Care
              </h2>
              <p>
                For over 35 years, my grandfather walked the vibrant, bustling souks of the Atlas Mountains, his hands gracefully tracing the intricate wool fibers of authentic Berber rugs. He wasn't just a merchant; he was a guardian of a fading art. Over his lifetime, he shared more than 10,000 handmade Moroccan rugs with homes across the world.
              </p>
              <p>
                But to him, the breathtaking artistry of the rugs was secondary. What he cared about most were the people behind the looms. He saw the artisans and craftswomen not as suppliers, but as family. He knew that every knot tied, every pattern woven, was a meal on the table, a child sent to school, and a centuries-old tradition kept alive. Providing for these families was his true life's work.
              </p>
            </div>

            <div className="w-24 h-px bg-sand mx-auto my-12" />

            <div className="space-y-6">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-espresso font-medium">
                A Changing World, A New Vision
              </h2>
              <p>
                As times changed, the traditional markets began to face unprecedented challenges. The business that supported so many families was at risk of fading. I was just 17 years old when I realized that the legacy my grandfather built needed a bridge to the modern world. Driven by the very same passion for our Moroccan heritage that ran through his veins, I proposed a bold idea: transitioning our local trade to the global online stage.
              </p>
              <p>
                To my surprise, he didn't resist. He embraced it wholeheartedly. He understood that to keep the business solvent—and crucially, to protect the livelihoods of the craftswomen he cared so deeply about—we had to evolve. I took the reins with a singular, burning mission: to make him proud, and to ensure that the women of the Atlas Mountains would never have to stop weaving their stories.
              </p>
            </div>

            <div className="w-24 h-px bg-sand mx-auto my-12" />

            <div className="space-y-16">
              <div className="text-center">
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-espresso font-medium mb-4">
                  The Journey of a Rug
                </h2>
                <p className="text-clay-dark font-light">From the high altitudes of the Atlas Mountains to your living room.</p>
              </div>

              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 space-y-4">
                  <span className="text-clay text-xs tracking-[0.2em] uppercase font-medium">Step 01</span>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-espresso font-medium">Shearing the Sheep</h3>
                  <p className="text-clay-dark font-light text-base leading-relaxed">
                    It all begins high in the Atlas Mountains, where local shepherds carefully shear their flocks. We use only the finest, unrefined live wool, ensuring it retains its natural lanolin oil. This crucial first step guarantees the rug's supreme softness, durability, and natural stain resistance.
                  </p>
                </div>
                <div className="order-1 md:order-2 relative aspect-[4/3] w-full overflow-hidden bg-sand">
                  <img src="https://images.unsplash.com/photo-1511225070737-5af5ac9a690d?auto=format&fit=crop&q=80&w=800" alt="Shearing wool" className="object-cover w-full h-full" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand">
                  <Image src="/dyeing-process.jpg" alt="Traditional natural dyeing process" fill className="object-cover" />
                </div>
                <div className="space-y-4">
                  <span className="text-clay text-xs tracking-[0.2em] uppercase font-medium">Step 02</span>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-espresso font-medium">Spinning & Dyeing</h3>
                  <p className="text-clay-dark font-light text-base leading-relaxed">
                    Once the wool is washed in local river waters, it is meticulously hand-spun. The vibrant hues of our colorful rugs are achieved not through harsh chemicals, but through natural, plant-based dyes. Artisans boil the wool with saffron for yellow, henna for reds and oranges, and indigo for deep blues, letting the colors set naturally under the sun.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 space-y-4">
                  <span className="text-clay text-xs tracking-[0.2em] uppercase font-medium">Step 03</span>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-espresso font-medium">The Art of Weaving</h3>
                  <p className="text-clay-dark font-light text-base leading-relaxed">
                    The dyed wool is brought to the loom, where the true magic happens. Our craftswomen spend weeks, sometimes months, hand-tying thousands of individual knots. They weave entirely from memory and intuition—translating their emotions, tribal histories, and natural surroundings into intricate geometric patterns.
                  </p>
                </div>
                <div className="order-1 md:order-2 relative aspect-[4/3] w-full overflow-hidden bg-sand">
                  <Image src="/artisan.png" alt="Artisan weaving" fill className="object-cover" />
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand">
                  <Image src="/washing-drying.jpg" alt="Traditional rug washing and drying process" fill className="object-cover" />
                </div>
                <div className="space-y-4">
                  <span className="text-clay text-xs tracking-[0.2em] uppercase font-medium">Step 04</span>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-espresso font-medium">Washing & Sun-Drying</h3>
                  <p className="text-clay-dark font-light text-base leading-relaxed">
                    Once off the loom, the finished rug undergoes a rigorous traditional washing process to soften the fibers and set the dyes. It is scrubbed with natural soaps and then laid flat to dry naturally beneath the intense Moroccan sun. This final blessing from the sun gives the wool its signature luster before it begins its journey to your home.
                  </p>
                </div>
              </div>

            </div>

            <div className="w-24 h-px bg-sand mx-auto my-16" />

            <div className="space-y-6">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-espresso font-medium">
                Become Part of the Journey
              </h2>
              <p>
                Today, Dar Tizgui is much more than a store. It is a lifeline to an ancient tradition and a testament to my grandfather's love for his people. 
              </p>
              <p className="font-medium text-espresso bg-sand-light/50 p-6 border-l-4 border-clay">
                When you bring one of our rugs into your home, you aren't just decorating a room. You are honoring a legacy. You are empowering a female artisan in a remote village to provide for her family. You are keeping a beautiful craft alive against the odds.
              </p>
              <p>
                Every rug we send out into the world carries a piece of our history, woven tightly into its natural wool. We invite you to become part of this beautiful journey. Choose a piece of art that truly matters, and let its story become a part of yours.
              </p>
            </div>

            <div className="text-center pt-12">
              <Link
                href="/#collection"
                className="inline-flex items-center gap-3 px-10 py-5 bg-espresso text-cream text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-outfit)] hover:bg-clay-dark transition-all duration-300"
              >
                Discover the Collection
              </Link>
            </div>

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

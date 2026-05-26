import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Smartphone, Shield, Truck, Sparkles, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import heroPhone from "@/assets/hero-phone.jpg";
import phone1 from "@/assets/phone-1.jpg";
import phone2 from "@/assets/phone-2.jpg";
import phone3 from "@/assets/phone-3.jpg";
import phone4 from "@/assets/phone-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PixelPhone — Premium Smartphones & Accessories" },
      { name: "description", content: "Shop the latest flagship smartphones with warranty, free shipping, and expert support. Chat with us on WhatsApp." },
    ],
  }),
});

const products = [
  { id: 1, name: "iPhone 15 Pro", price: "$1,099", tag: "New", img: phone1 },
  { id: 2, name: "Galaxy S24 Ultra", price: "$1,199", tag: "Hot", img: phone2 },
  { id: 3, name: "Pixel 8 Pro", price: "$899", tag: "Deal", img: phone3 },
  { id: 4, name: "Galaxy Z Fold 5", price: "$1,799", tag: "Premium", img: phone4 },
];

const features = [
  { icon: Shield, title: "2-Year Warranty", desc: "Every device covered" },
  { icon: Truck, title: "Free Shipping", desc: "On orders over $99" },
  { icon: Sparkles, title: "Authentic Only", desc: "Brand-new sealed" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-bold text-lg">
            <Smartphone className="h-6 w-6 text-primary" />
            <span>PixelPhone</span>
          </a>
          <ul className="hidden gap-8 md:flex">
            {["Products", "About", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="hidden md:inline-flex" style={{ background: "var(--gradient-brand)" }}>
            <a href="#products">Shop Now</a>
          </Button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-border/60 md:hidden">
            <ul className="flex flex-col px-6 py-4">
              {["Products", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-medium">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${heroPhone})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="flex flex-col justify-center text-primary-foreground">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3 w-3" /> New 2026 Lineup
            </span>
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Tomorrow's tech, <br />in your hand today.
            </h1>
            <p className="mt-6 max-w-md text-lg text-white/80">
              Discover flagship smartphones from the world's best brands — backed by warranty, expert support, and unbeatable prices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="#products">Browse Phones</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* Features strip */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">{f.title}</p>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Featured Phones</h2>
            <p className="mt-3 text-muted-foreground">Hand-picked devices, in stock and ready to ship.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{p.price}</span>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={`https://wa.me/1234567890?text=${encodeURIComponent("I want " + p.name)}`} target="_blank" rel="noopener noreferrer">
                      Buy
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div className="relative aspect-square overflow-hidden rounded-3xl" style={{ background: "var(--gradient-hero)" }}>
            <img src={heroPhone} alt="Premium smartphone" loading="lazy" width={1536} height={1024} className="h-full w-full object-cover opacity-90" />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">About PixelPhone</span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">A decade of trusted mobile retail.</h2>
            <p className="mt-6 text-muted-foreground">
              Since 2014 we've helped thousands of customers find their perfect smartphone. We source directly from manufacturers, verify every device, and stand behind each sale with a generous warranty.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[["10K+", "Customers"], ["50+", "Brands"], ["4.9★", "Rating"]].map(([n, l]) => (
                <div key={l}>
                  <p className="text-3xl font-bold text-primary">{n}</p>
                  <p className="text-sm text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Get in touch</h2>
          <p className="mt-3 text-muted-foreground">Questions? We respond fast — usually within minutes on WhatsApp.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            { icon: Phone, label: "Call us", value: "+1 (234) 567-890" },
            { icon: Mail, label: "Email", value: "hello@pixelphone.shop" },
            { icon: MapPin, label: "Visit", value: "123 Market St, NY" },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
              <p className="mt-1 font-medium">{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2 font-semibold">
            <Smartphone className="h-5 w-5 text-primary" />
            PixelPhone
          </div>
          <p className="text-sm text-muted-foreground">© 2026 PixelPhone. All rights reserved.</p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

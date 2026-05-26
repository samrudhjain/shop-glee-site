import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Smartphone, Shield, Truck, Sparkles, Menu, X, Phone, Mail, MapPin,
  Star, CreditCard, Zap, Award, IndianRupee, Tag, CheckCircle2,
  Cpu, HardDrive, Monitor, Camera, Battery, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import heroPhone from "@/assets/hero-phone.jpg";
import phone1 from "@/assets/phone-1.jpg";
import phone2 from "@/assets/phone-2.jpg";
import phone3 from "@/assets/phone-3.jpg";
import phone4 from "@/assets/phone-4.jpg";
import iphone15Pro from "@/assets/iphone-15-pro.jpg";
import s24Ultra from "@/assets/s24-ultra.jpg";
import vivoV50 from "@/assets/vivo-v50.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sharma Mobile Store — Premium Smartphones in India" },
      { name: "description", content: "Best deals on iPhone, Samsung, OnePlus & more. Easy EMI, free delivery, genuine products. Visit our store or chat on WhatsApp." },
    ],
  }),
});

const products = [
  { id: 1, name: "iPhone 15 Pro", brand: "Apple", price: "1,34,900", mrp: "1,45,900", emi: "6,329", tag: "Bestseller", img: phone1, rating: 4.9 },
  { id: 2, name: "Galaxy S24 Ultra", brand: "Samsung", price: "1,29,999", mrp: "1,39,999", emi: "6,099", tag: "New Launch", img: phone2, rating: 4.8 },
  { id: 3, name: "OnePlus 12", brand: "OnePlus", price: "64,999", mrp: "69,999", emi: "3,049", tag: "Hot Deal", img: phone3, rating: 4.7 },
  { id: 4, name: "Galaxy Z Fold 5", brand: "Samsung", price: "1,54,999", mrp: "1,64,999", emi: "7,270", tag: "Premium", img: phone4, rating: 4.8 },
];

const featuredProducts = [
  {
    id: "f1",
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: "1,34,900",
    mrp: "1,45,900",
    emi: "6,329",
    tag: "Flagship",
    img: iphone15Pro,
    rating: 4.9,
    specs: [
      { icon: Cpu, label: "A17 Pro Chip" },
      { icon: HardDrive, label: "256 GB" },
      { icon: Monitor, label: '6.1" XDR' },
      { icon: Camera, label: "48 MP" },
      { icon: Battery, label: "All Day" },
    ],
  },
  {
    id: "f2",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: "1,29,999",
    mrp: "1,39,999",
    emi: "6,099",
    tag: "Best Camera",
    img: s24Ultra,
    rating: 4.8,
    specs: [
      { icon: Cpu, label: "Snapdragon 8 Gen 3" },
      { icon: HardDrive, label: "256 GB" },
      { icon: Monitor, label: '6.8" AMOLED' },
      { icon: Camera, label: "200 MP" },
      { icon: Battery, label: "5000 mAh" },
    ],
  },
  {
    id: "f3",
    name: "Vivo V50",
    brand: "Vivo",
    price: "42,999",
    mrp: "48,999",
    emi: "2,015",
    tag: "Value King",
    img: vivoV50,
    rating: 4.7,
    specs: [
      { icon: Cpu, label: "Dimensity 9300" },
      { icon: HardDrive, label: "256 GB" },
      { icon: Monitor, label: '6.78" AMOLED' },
      { icon: Camera, label: "50 MP" },
      { icon: Battery, label: "6000 mAh" },
    ],
  },
];

const reviews = [
  { name: "Rahul Verma", city: "Delhi", text: "Bought iPhone 15 at the best price in town. Smooth EMI process and very friendly staff. Highly recommended!", rating: 5 },
  { name: "Priya Sharma", city: "Mumbai", text: "Excellent service! Got my Samsung S24 Ultra delivered the same day. Genuine product with full warranty.", rating: 5 },
  { name: "Amit Patel", city: "Ahmedabad", text: "Trusted shop. Great prices, easy exchange, and they helped me set up everything before I left. Five stars.", rating: 5 },
];

const emiBanks = ["HDFC", "SBI", "ICICI", "Axis", "Kotak", "Bajaj Finserv"];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Offers banner */}
      <div className="relative overflow-hidden text-center text-sm font-medium" style={{ background: "var(--gradient-brand)", color: "var(--primary-foreground)" }}>
        <div className="flex animate-pulse items-center justify-center gap-2 px-4 py-2">
          <Tag className="h-4 w-4" />
          <span>Festive Offer: Flat ₹5,000 OFF + No-Cost EMI on Flagship Phones — Limited Time!</span>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 text-lg font-bold">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "var(--gradient-brand)" }}>
              <Smartphone className="h-5 w-5 text-primary-foreground" />
            </div>
            <span>Sharma Mobile Store</span>
          </a>
          <ul className="hidden gap-8 md:flex">
            {["Featured", "Products", "Offers", "About", "Reviews", "Visit"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="hidden font-semibold text-primary-foreground md:inline-flex" style={{ background: "var(--gradient-brand)" }}>
            <a href="#products">Shop Now</a>
          </Button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-border/60 md:hidden">
            <ul className="flex flex-col px-6 py-4">
              {["Featured", "Products", "Offers", "About", "Reviews", "Visit"].map((l) => (
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
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url(${heroPhone})`, backgroundSize: "cover", backgroundPosition: "center", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-32">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
              <Sparkles className="h-3 w-3" /> Trusted by 25,000+ Customers
            </span>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              India's most loved <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>mobile store.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Flagship smartphones at unbeatable prices. Easy No-Cost EMI, instant exchange, and genuine warranty on every purchase.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-semibold text-primary-foreground shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-brand)" }}>
                <a href="#featured">Explore Phones</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-card/50 backdrop-blur hover:bg-card">
                <a href="#visit">Visit Store</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 100% Genuine</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Same-Day Delivery</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Easy Exchange</div>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
          {[
            { icon: Shield, title: "Genuine Products", desc: "Brand warranty" },
            { icon: Truck, title: "Free Delivery", desc: "All over India" },
            { icon: CreditCard, title: "No-Cost EMI", desc: "Up to 12 months" },
            { icon: Award, title: "Best Price", desc: "Lowest guaranteed" },
          ].map((f) => (
            <div key={f.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
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

      {/* Featured Smartphones */}
      <section id="featured" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">This Season's Picks</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Featured <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Smartphones</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Hand-picked flagship devices with the best specs, prices, and EMI plans.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span
                  className="absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-lg"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {p.tag}
                </span>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/90">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-semibold">{p.rating}</span>
                  <span className="text-xs text-white/60">(2k+ reviews)</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{p.brand}</p>
                <h3 className="mt-1 text-xl font-bold">{p.name}</h3>

                {/* Specs */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.specs.map((s) => (
                    <span
                      key={s.label}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-2.5 py-1.5 text-xs font-medium text-secondary-foreground"
                    >
                      <s.icon className="h-3.5 w-3.5 text-primary" />
                      {s.label}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="mt-5 flex items-end gap-3">
                  <span className="flex items-center text-2xl font-bold text-primary">
                    <IndianRupee className="h-5 w-5" />
                    {p.price}
                  </span>
                  <span className="mb-0.5 text-sm text-muted-foreground line-through">₹{p.mrp}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">EMI from ₹{p.emi}/month</p>

                {/* CTA */}
                <Button
                  asChild
                  className="mt-5 w-full font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent("Hi, I'm interested in " + p.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Buy on WhatsApp <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Featured Collection</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Premium Smartphones</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Latest flagships from Apple, Samsung, OnePlus & more — in stock and ready to ship.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-border transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-card)" }}>
              <div className="relative aspect-square overflow-hidden bg-white">
                <img src={p.img} alt={p.name} loading="lazy" width={768} height={768} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.brand}</p>
                <h3 className="mt-1 font-semibold">{p.name}</h3>
                <div className="mt-2 flex items-center gap-1 text-xs">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="font-medium">{p.rating}</span>
                  <span className="text-muted-foreground">(2k+ reviews)</span>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="flex items-center text-xl font-bold text-primary"><IndianRupee className="h-4 w-4" />{p.price}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{p.mrp}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">EMI from ₹{p.emi}/mo</p>
                <Button asChild className="mt-4 w-full font-semibold text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                  <a href={`https://wa.me/919876543210?text=${encodeURIComponent("Hi, I'm interested in " + p.name)}`} target="_blank" rel="noopener noreferrer">
                    Buy on WhatsApp
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Offers banner big */}
      <section id="offers" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 p-10 md:p-16" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Zap className="h-3 w-3" /> Limited Time
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Festive Mega Sale <br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Up to ₹15,000 OFF</span>
              </h2>
              <p className="mt-4 text-muted-foreground">Plus instant bank cashback, exchange bonus up to ₹10,000, and free accessories worth ₹2,499.</p>
              <Button asChild size="lg" className="mt-6 font-semibold text-primary-foreground shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-brand)" }}>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">Claim Offer Now</a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Cashback", value: "₹5,000" },
                { label: "Exchange", value: "₹10,000" },
                { label: "EMI", value: "0%" },
                { label: "Warranty", value: "2 Years" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card/50 p-5 backdrop-blur">
                  <p className="bg-clip-text text-3xl font-bold text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EMI section */}
      <section className="bg-card/30 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Easy EMI Options</span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Pay in easy monthly instalments.</h2>
            <p className="mt-4 text-muted-foreground">
              Own your dream phone today with our No-Cost EMI plans. Available on all leading credit cards and consumer finance partners.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "No-Cost EMI on 3, 6, 9 & 12 months",
                "Instant approval — no paperwork",
                "Available on Debit Cards via Bajaj Finserv",
                "Cardless EMI for Aadhaar holders",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border p-8" style={{ background: "var(--gradient-card)" }}>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Partner Banks</p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {emiBanks.map((b) => (
                <div key={b} className="flex items-center justify-center rounded-xl border border-border bg-background/50 px-4 py-4 text-sm font-semibold">
                  {b}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 p-5">
              <p className="text-sm font-semibold text-primary">Example: iPhone 15 Pro</p>
              <p className="mt-1 text-sm text-muted-foreground">₹1,34,900 → Just <span className="font-bold text-foreground">₹6,329/month</span> for 12 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-border" style={{ background: "var(--gradient-card)" }}>
            <img src={heroPhone} alt="Inside Sharma Mobile Store" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              Bengaluru's trusted name in <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>premium mobiles</span> since 2014.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Sharma Mobile Store started as a single counter in Whitefield with one promise — get our customers the right phone at the right price, with no shortcuts on authenticity or service. A decade later, we're a flagship destination for Apple, Samsung, OnePlus, Google and Xiaomi, serving over 25,000 happy customers across Bengaluru.
            </p>
            <p className="mt-4 text-muted-foreground">
              Every device we sell is 100% genuine with full brand warranty. Our in-house experts help you choose, set up, transfer your data, and stay supported long after the purchase.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "10+", l: "Years in business" },
                { v: "25K+", l: "Happy customers" },
                { v: "4.9★", l: "Google rating" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card/50 p-4 text-center">
                  <p className="bg-clip-text text-2xl font-bold text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>{s.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-semibold text-primary-foreground shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-brand)" }}>
                <a href="tel:+919876543210"><Phone className="mr-2 h-4 w-4" />Call Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-card/50 hover:bg-card">
                <a href="#visit">Get Directions</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Customer Stories</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Loved by thousands.</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
            </div>
            <span className="font-semibold">4.9</span>
            <span className="text-muted-foreground">based on 3,400+ Google reviews</span>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border p-6 transition-colors hover:border-primary/40" style={{ background: "var(--gradient-card)" }}>
              <div className="flex">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visit / Map */}
      <section id="visit" className="bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Visit Our Store</span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Find us on the map.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-5">
            <div className="space-y-4 md:col-span-2">
              {[
                { icon: MapPin, title: "Address", value: "Shop No. 14, ITPL Main Road, Whitefield, Bengaluru — 560066" },
                { icon: Phone, title: "Phone", value: "+91 98765 43210" },
                { icon: Mail, title: "Email", value: "hello@sharmamobile.in" },
                { icon: Sparkles, title: "Hours", value: "Mon–Sun: 10:00 AM – 9:00 PM" },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-border p-5" style={{ background: "var(--gradient-card)" }}>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</p>
                    <p className="mt-1 text-sm font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-3xl border border-border md:col-span-3">
              <iframe
                title="Store location on Google Maps"
                src="https://www.google.com/maps?q=Whitefield,+Bengaluru,+Karnataka&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="h-full min-h-[400px] w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl border border-primary/20 p-12 text-center" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Talk to us on WhatsApp.</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Get instant quotes, check stock, and book your phone with home delivery — all on WhatsApp.</p>
          <Button asChild size="lg" className="mt-8 font-semibold text-whatsapp-foreground shadow-[var(--shadow-glow)]" style={{ background: "var(--whatsapp)" }}>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">Chat Now: +91 98765 43210</a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border bg-card/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "var(--gradient-brand)" }}>
                <Smartphone className="h-5 w-5 text-primary-foreground" />
              </div>
              Sharma Mobile Store
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Bengaluru's most loved mobile store. Genuine phones, easy EMI, and friendly service since 2014.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-semibold">4.9</span>
              <span className="text-muted-foreground">on Google</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Featured", "Products", "Offers", "About", "Reviews", "Visit"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Shop No. 14, ITPL Main Road, Whitefield, Bengaluru — 560066</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><a href="tel:+919876543210" className="hover:text-primary">+91 98765 43210</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /><a href="mailto:hello@sharmamobile.in" className="hover:text-primary">hello@sharmamobile.in</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Store Hours</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Mon – Sat: 10:00 AM – 9:00 PM</li>
              <li>Sunday: 11:00 AM – 8:00 PM</li>
            </ul>
            <Button asChild className="mt-5 w-full font-semibold text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
              <a href="tel:+919876543210"><Phone className="mr-2 h-4 w-4" />Call Now</a>
            </Button>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
            <p>© 2026 Sharma Mobile Store. All rights reserved.</p>
            <p>Whitefield • Bengaluru • Karnataka</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

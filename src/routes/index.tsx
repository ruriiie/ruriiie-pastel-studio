import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/site/product-card";
import { products, categoryLabels, type Category } from "@/lib/products";
import { ArrowRight, Heart, Truck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ruriiie Stationery — Cozy Pastel Stationery Studio" },
      { name: "description", content: "Aesthetic pastel stationery for cozy creativity — pens, journals, art supplies, and more." },
      { property: "og:title", content: "Ruriiie Stationery" },
      { property: "og:description", content: "Cozy pastel stationery for everyday joy." },
    ],
  }),
  component: Index,
});

const cats: Category[] = ["pens", "notebooks", "art", "cases"];

function Index() {
  const featured = products.slice(0, 4);
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blush px-3 py-1 text-xs font-medium text-blush-foreground">
              <Sparkles className="w-3 h-3" /> New season — Soft Bloom Edit
            </span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
              Stationery for{" "}
              <span className="bg-gradient-pastel px-3 rounded-2xl">cozy</span>{" "}
              little days.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-md">
              Pastel pens, gentle journals, and art supplies curated for slow mornings and softer thoughts.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7 bg-foreground text-background hover:bg-foreground/90 shadow-glow">
                <Link to="/shop">Shop Now <ArrowRight className="w-4 h-4 ml-1.5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-7 bg-card">
                <Link to="/about">Our story</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { icon: Heart, label: "Hand-picked" },
                { icon: Truck, label: "Free over $40" },
                { icon: Sparkles, label: "Pastel only" },
              ].map((f) => (
                <div key={f.label} className="text-center p-3 rounded-2xl bg-card/70 shadow-soft">
                  <f.icon className="w-4 h-4 mx-auto mb-1 text-foreground" />
                  <p className="text-xs text-muted-foreground">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-pastel blur-2xl opacity-60" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-glow">
              <img src={heroImg} alt="Pastel stationery flat lay" width={1536} height={1024} className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden sm:block bg-card rounded-2xl px-4 py-3 shadow-soft">
              <p className="text-xs text-muted-foreground">Loved by</p>
              <p className="font-display text-lg font-semibold">12k+ writers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Browse</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-1">Shop by category</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cats.map((c, i) => {
            const tints = ["bg-blush", "bg-sky", "bg-butter", "bg-blush"];
            const img = products.find((p) => p.category === c)!.image;
            return (
              <Link key={c} to={`/${c}` as any} className={`group rounded-3xl ${tints[i]} p-5 shadow-soft hover:shadow-glow transition-shadow`}>
                <div className="aspect-square rounded-2xl overflow-hidden bg-card">
                  <img src={img} alt={categoryLabels[c]} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="font-display font-medium">{categoryLabels[c]}</h3>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pretty things</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-1">Just in</h2>
          </div>
          <Link to="/shop" className="text-sm font-medium hover:underline">See all →</Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-[2rem] bg-gradient-pastel p-10 sm:p-14 text-center shadow-soft">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">Sweet things, straight to your inbox.</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">Join our soft-letter for new drops, studio diaries and 10% off your first order.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" required placeholder="you@cozy.com" className="flex-1 rounded-full bg-card px-5 h-12 outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-soft" />
            <Button type="submit" className="rounded-full h-12 px-6 bg-foreground text-background hover:bg-foreground/90">Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  );
}

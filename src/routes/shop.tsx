import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductGrid } from "@/components/site/product-card";
import { PageHeader } from "@/components/site/page-header";
import { products, categoryLabels, type Category } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All — Ruriiie Stationery" },
      { name: "description", content: "Browse our full collection of pastel stationery." },
      { property: "og:title", content: "Shop All — Ruriiie" },
      { property: "og:description", content: "Browse our full pastel stationery collection." },
    ],
  }),
  component: Shop,
});

const filters: ("all" | Category)[] = ["all", "pens", "notebooks", "art", "cases"];

function Shop() {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const items = filter === "all" ? products : products.filter((p) => p.category === filter);
  return (
    <>
      <PageHeader eyebrow="Collection" title="Shop All" description="A little garden of pastel stationery, refreshed each season." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === f ? "bg-foreground text-background" : "bg-card hover:bg-blush shadow-soft"
              }`}
            >
              {f === "all" ? "All" : categoryLabels[f]}
            </button>
          ))}
        </div>
        <ProductGrid products={items} />
      </section>
    </>
  );
}

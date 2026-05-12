import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/site/product-card";
import { PageHeader } from "@/components/site/page-header";
import { products } from "@/lib/products";

export const Route = createFileRoute("/pens")({
  head: () => ({
    meta: [
      { title: "Pens & Writing — Ruriiie Stationery" },
      { name: "description", content: "Soft pastel pens that glide like a dream." },
      { property: "og:title", content: "Pens & Writing" },
      { property: "og:description", content: "Soft pastel pens that glide like a dream." },
    ],
  }),
  component: Page,
});

function Page() {
  const items = products.filter((p) => p.category === "pens");
  return (
    <>
      <PageHeader eyebrow="Category" title="Pens & Writing" description="Soft pastel pens that glide like a dream." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <ProductGrid products={items} />
      </section>
    </>
  );
}

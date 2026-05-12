import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/site/product-card";
import { PageHeader } from "@/components/site/page-header";
import { products } from "@/lib/products";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Pencil Cases & Storage — Ruriiie Stationery" },
      { name: "description", content: "Soft pouches and tidy organizers for all your tools." },
      { property: "og:title", content: "Pencil Cases & Storage" },
      { property: "og:description", content: "Soft pouches and tidy organizers for all your tools." },
    ],
  }),
  component: Page,
});

function Page() {
  const items = products.filter((p) => p.category === "cases");
  return (
    <>
      <PageHeader eyebrow="Category" title="Pencil Cases & Storage" description="Soft pouches and tidy organizers for all your tools." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <ProductGrid products={items} />
      </section>
    </>
  );
}

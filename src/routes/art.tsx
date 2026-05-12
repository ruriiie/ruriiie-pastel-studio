import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/site/product-card";
import { PageHeader } from "@/components/site/page-header";
import { products } from "@/lib/products";

export const Route = createFileRoute("/art")({
  head: () => ({
    meta: [
      { title: "Art Supplies — Ruriiie Stationery" },
      { name: "description", content: "Watercolors, pencils, and pretty paint for creative afternoons." },
      { property: "og:title", content: "Art Supplies" },
      { property: "og:description", content: "Watercolors, pencils, and pretty paint for creative afternoons." },
    ],
  }),
  component: Page,
});

function Page() {
  const items = products.filter((p) => p.category === "art");
  return (
    <>
      <PageHeader eyebrow="Category" title="Art Supplies" description="Watercolors, pencils, and pretty paint for creative afternoons." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <ProductGrid products={items} />
      </section>
    </>
  );
}

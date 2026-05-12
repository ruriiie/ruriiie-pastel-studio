import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/site/product-card";
import { PageHeader } from "@/components/site/page-header";
import { products } from "@/lib/products";

export const Route = createFileRoute("/notebooks")({
  head: () => ({
    meta: [
      { title: "Notebooks & Journals — Ruriiie Stationery" },
      { name: "description", content: "Linen-bound journals and gentle notebooks for cozy thoughts." },
      { property: "og:title", content: "Notebooks & Journals" },
      { property: "og:description", content: "Linen-bound journals and gentle notebooks for cozy thoughts." },
    ],
  }),
  component: Page,
});

function Page() {
  const items = products.filter((p) => p.category === "notebooks");
  return (
    <>
      <PageHeader eyebrow="Category" title="Notebooks & Journals" description="Linen-bound journals and gentle notebooks for cozy thoughts." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <ProductGrid products={items} />
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";
import heroImg from "@/assets/hero.jpg";
import { Heart, Leaf, PenTool } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ruriiie Stationery" },
      { name: "description", content: "Our pastel little story — how Ruriiie Stationery began." },
      { property: "og:title", content: "About Ruriiie" },
      { property: "og:description", content: "Our pastel little story." },
      { property: "og:image", content: "/og.jpg" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="Our story" title="A studio of soft little things" description="Ruriiie began on a rainy afternoon, with a half-finished journal and a pen too pretty to put down." />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-[2rem] overflow-hidden shadow-glow">
          <img src={heroImg} alt="Studio" className="w-full aspect-[16/8] object-cover" />
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-8 text-muted-foreground">
          <p>
            We curate stationery the way you'd arrange flowers on a kitchen table — softly, slowly, with affection. Every pen, every journal, every pencil case is chosen for the quiet joy it brings to your day.
          </p>
          <p>
            Our pieces come from small makers who care about texture, weight, and color the way poets care about words. The result is a tiny pastel world you can carry in your bag.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Heart, title: "Made with love", body: "Every piece is hand-picked by our tiny team." },
            { icon: Leaf, title: "Gentle materials", body: "Recycled paper, refillable inks, soft cottons." },
            { icon: PenTool, title: "Crafted to last", body: "Heirloom-quality tools for everyday rituals." },
          ].map((b) => (
            <div key={b.title} className="rounded-3xl bg-card p-6 shadow-soft">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-pastel mb-3"><b.icon className="w-4 h-4" /></span>
              <h3 className="font-display text-lg font-semibold">{b.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{b.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

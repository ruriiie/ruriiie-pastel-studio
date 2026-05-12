export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center">
      {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>}
      <h1 className="mt-2 font-display text-4xl sm:text-5xl font-semibold">{title}</h1>
      {description && <p className="mt-3 max-w-xl mx-auto text-muted-foreground">{description}</p>}
    </section>
  );
}

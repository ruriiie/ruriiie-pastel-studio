import type { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCart } from "./cart-context";
import { Plus } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <article className="group rounded-3xl bg-card shadow-soft overflow-hidden hover:shadow-glow transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={product.name}
          width={768}
          height={768}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-butter text-butter-foreground">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-display font-medium text-base leading-snug">{product.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 min-h-[2.5em]">{product.description}</p>
        <div className="flex items-center justify-between pt-1">
          <span className="font-display text-lg font-semibold">${product.price.toFixed(2)}</span>
          <Button
            size="sm"
            onClick={() => add(product)}
            className="rounded-full bg-foreground text-background hover:bg-foreground/90"
          >
            <Plus className="w-3.5 h-3.5 mr-1" /> Add
          </Button>
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}

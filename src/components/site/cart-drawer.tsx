import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "./cart-context";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, subtotal, clear } = useCart();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Your Cart
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 -mx-4 py-4 space-y-3">
          {items.length === 0 && (
            <div className="text-center text-sm text-muted-foreground py-16">
              Your cart is empty — go pick something pretty.
            </div>
          )}
          {items.map(({ product, qty }) => (
            <div key={product.id} className="flex gap-3 p-3 rounded-2xl bg-card shadow-soft">
              <img src={product.image} alt={product.name} width={64} height={64} loading="lazy" className="w-16 h-16 object-cover rounded-xl" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium truncate">{product.name}</p>
                  <button onClick={() => remove(product.id)} aria-label="Remove" className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">${product.price.toFixed(2)}</p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full bg-blush/60">
                    <button className="w-7 h-7 grid place-items-center" onClick={() => setQty(product.id, qty - 1)} aria-label="Decrease"><Minus className="w-3 h-3" /></button>
                    <span className="px-2 text-sm">{qty}</span>
                    <button className="w-7 h-7 grid place-items-center" onClick={() => setQty(product.id, qty + 1)} aria-label="Increase"><Plus className="w-3 h-3" /></button>
                  </div>
                  <span className="text-sm font-medium">${(product.price * qty).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SheetFooter className="border-t border-border/60 pt-4">
          <div className="w-full space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-display text-lg font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <Button
              className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
              disabled={items.length === 0}
              onClick={() => { toast.success("Checkout is a demo — your cart is so cute though."); clear(); setOpen(false); }}
            >
              Checkout
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, User, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "./cart-context";
import { AuthDialog } from "./auth-dialog";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop All" },
  { to: "/pens", label: "Pens" },
  { to: "/notebooks", label: "Notebooks" },
  { to: "/art", label: "Art" },
  { to: "/cases", label: "Cases" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { count, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-display font-semibold text-xl text-foreground">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-pastel shadow-soft">
            <Sparkles className="w-4 h-4 text-foreground" />
          </span>
          Ruriiie
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-blush/60 transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-full text-sm font-medium text-foreground bg-blush" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="rounded-full hidden sm:inline-flex" onClick={() => setAuthOpen(true)}>
            <User className="w-4 h-4 mr-1.5" /> Sign in
          </Button>
          <button
            onClick={() => setOpen(true)}
            className="relative grid place-items-center w-10 h-10 rounded-full bg-card hover:bg-blush transition-colors shadow-soft"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-foreground text-background text-[10px] font-semibold grid place-items-center">
                {count}
              </span>
            )}
          </button>
          <button
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full bg-card shadow-soft"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm text-foreground hover:bg-blush"
              >
                {n.label}
              </Link>
            ))}
            <Button variant="outline" className="rounded-full mt-2" onClick={() => { setAuthOpen(true); setMenuOpen(false); }}>
              <User className="w-4 h-4 mr-1.5" /> Sign in
            </Button>
          </div>
        </div>
      )}

      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />
    </header>
  );
}

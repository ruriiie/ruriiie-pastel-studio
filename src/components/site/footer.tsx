import { Link } from "@tanstack/react-router";
import { Sparkles, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-cream/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl font-semibold">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-pastel shadow-soft">
              <Sparkles className="w-4 h-4" />
            </span>
            Ruriiie Stationery
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            A pastel little studio of writing things — made for slow mornings, soft notes, and creative joy.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/pens" className="hover:text-foreground">Pens & Writing</Link></li>
            <li><Link to="/notebooks" className="hover:text-foreground">Notebooks & Journals</Link></li>
            <li><Link to="/art" className="hover:text-foreground">Art Supplies</Link></li>
            <li><Link to="/cases" className="hover:text-foreground">Pencil Cases & Storage</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-3">Studio</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li className="flex gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="grid place-items-center w-9 h-9 rounded-full bg-card shadow-soft hover:bg-blush"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="Email" className="grid place-items-center w-9 h-9 rounded-full bg-card shadow-soft hover:bg-blush"><Mail className="w-4 h-4" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ruriiie Stationery. Made with soft hands.
      </div>
    </footer>
  );
}

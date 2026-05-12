import pen1 from "@/assets/pen-1.jpg";
import pen2 from "@/assets/pen-2.jpg";
import notebook1 from "@/assets/notebook-1.jpg";
import notebook2 from "@/assets/notebook-2.jpg";
import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";

export type Category = "pens" | "notebooks" | "art" | "cases";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  tag?: string;
  description: string;
};

export const products: Product[] = [
  { id: "p1", name: "Sakura Blossom Pen", price: 8.5, category: "pens", image: pen1, tag: "Bestseller", description: "A pillowy pink ballpoint that glides like silk." },
  { id: "p2", name: "Macaron Gel Pen Set", price: 14.0, category: "pens", description: "Six pastel gel pens for dreamy daily notes.", image: pen2 },
  { id: "p3", name: "Velvet Pink Linen Notebook", price: 22.0, category: "notebooks", image: notebook1, tag: "New", description: "Hardcover linen-bound journal with gilded edges." },
  { id: "p4", name: "Cloud Blue Reading Journal", price: 19.5, category: "notebooks", image: notebook2, description: "A serene companion for slow mornings and softer plans." },
  { id: "p5", name: "Pastel Watercolor Studio Kit", price: 38.0, category: "art", image: art1, tag: "Studio Pick", description: "A 24-pan watercolor set with travel brushes." },
  { id: "p6", name: "Sherbet Colored Pencils", price: 16.0, category: "art", image: art2, description: "Twelve pastel pencils that blend like a dream." },
  { id: "p7", name: "Quilted Blush Pencil Pouch", price: 18.0, category: "cases", image: case1, description: "Soft quilted leather pouch with a brassy zipper." },
  { id: "p8", name: "Buttercream Desk Organizer", price: 26.0, category: "cases", image: case2, tag: "Cozy", description: "A sunny tin caddy to corral your everyday tools." },
];

export const categoryLabels: Record<Category, string> = {
  pens: "Pens & Writing",
  notebooks: "Notebooks & Journals",
  art: "Art Supplies",
  cases: "Pencil Cases & Storage",
};

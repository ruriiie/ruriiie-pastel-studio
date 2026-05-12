import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/page-header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ruriiie Stationery" },
      { name: "description", content: "Say hello to the Ruriiie studio team." },
      { property: "og:title", content: "Contact Ruriiie" },
      { property: "og:description", content: "Say hello to our pastel studio." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Say hi" title="Contact us" description="We'd love to hear from you. Drop a line and we'll write back soon." />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 rounded-3xl bg-card p-6 sm:p-8 shadow-soft">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              setTimeout(() => { setLoading(false); toast.success("Message sent — thank you!"); (e.target as HTMLFormElement).reset(); }, 600);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label htmlFor="name">Name</Label><Input id="name" required maxLength={100} className="rounded-xl mt-1" /></div>
              <div><Label htmlFor="email">Email</Label><Input id="email" type="email" required maxLength={255} className="rounded-xl mt-1" /></div>
            </div>
            <div><Label htmlFor="subject">Subject</Label><Input id="subject" required maxLength={150} className="rounded-xl mt-1" /></div>
            <div><Label htmlFor="message">Message</Label><Textarea id="message" required maxLength={1000} rows={6} className="rounded-xl mt-1" /></div>
            <Button disabled={loading} className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-7 h-11">Send message</Button>
          </form>
        </div>
        <div className="md:col-span-2 space-y-3">
          {[
            { icon: Mail, title: "Email", body: "hello@ruriiie.studio" },
            { icon: MapPin, title: "Studio", body: "12 Petal Lane, Soft District" },
            { icon: Clock, title: "Hours", body: "Mon–Fri · 10am – 6pm" },
          ].map((b) => (
            <div key={b.title} className="rounded-3xl bg-card p-5 shadow-soft flex gap-3 items-start">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-pastel"><b.icon className="w-4 h-4" /></span>
              <div>
                <p className="font-display font-medium">{b.title}</p>
                <p className="text-sm text-muted-foreground">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

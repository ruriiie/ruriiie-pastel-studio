import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export function AuthDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [loading, setLoading] = useState(false);
  const submit = (kind: "login" | "signup") => (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(kind === "login" ? "Welcome back, lovely." : "Account created! ✨");
      onOpenChange(false);
    }, 600);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-3xl">
        <DialogHeader className="items-center text-center">
          <span className="grid place-items-center w-12 h-12 rounded-full bg-gradient-pastel shadow-soft mb-2">
            <Sparkles className="w-5 h-5" />
          </span>
          <DialogTitle className="font-display text-2xl">Welcome to Ruriiie</DialogTitle>
          <DialogDescription>Sign in to save your favorite pieces.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-full bg-blush/60">
            <TabsTrigger value="login" className="rounded-full">Sign in</TabsTrigger>
            <TabsTrigger value="signup" className="rounded-full">Sign up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={submit("login")} className="space-y-3 mt-4">
              <div><Label htmlFor="li-email">Email</Label><Input id="li-email" type="email" required className="rounded-xl" /></div>
              <div><Label htmlFor="li-pw">Password</Label><Input id="li-pw" type="password" required className="rounded-xl" /></div>
              <Button disabled={loading} className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">Sign in</Button>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form onSubmit={submit("signup")} className="space-y-3 mt-4">
              <div><Label htmlFor="su-name">Name</Label><Input id="su-name" required className="rounded-xl" /></div>
              <div><Label htmlFor="su-email">Email</Label><Input id="su-email" type="email" required className="rounded-xl" /></div>
              <div><Label htmlFor="su-pw">Password</Label><Input id="su-pw" type="password" required className="rounded-xl" /></div>
              <Button disabled={loading} className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">Create account</Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

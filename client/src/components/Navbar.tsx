import { Link } from "wouter";
import { Menu, X, Phone, Facebook, Instagram, Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "होम (Home)", href: "/" },
    { name: "परिचय (About)", href: "#about" },
    { name: "संकल्प (Vision)", href: "#vision" },
    { name: "गैलरी (Gallery)", href: "#gallery" },
    { name: "संपर्क (Contact)", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo / Brand */}
        <Link href="/">
          <a className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold border-2 border-white shadow-md">
              02
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl leading-none text-primary">शेखर भैया</span>
              <span className="text-xs text-muted-foreground font-medium">वार्ड नंबर 6</span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 animate-pulse">
            <span className="mr-2">🗳️</span> वोट करें
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors border-b pb-2"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full bg-primary text-white font-bold mt-4">
                समर्थन दें (Support Us)
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

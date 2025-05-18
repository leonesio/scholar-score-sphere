
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-education-primary">ScoreSync</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-education-primary transition-colors">
            Recursos
          </a>
          <a href="#benefits" className="text-sm font-medium hover:text-education-primary transition-colors">
            Benefícios
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-education-primary transition-colors">
            Depoimentos
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-education-primary transition-colors">
            Planos
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex">
            Entrar
          </Button>
          <Button className="bg-education-primary hover:bg-education-secondary">
            Começar Grátis
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

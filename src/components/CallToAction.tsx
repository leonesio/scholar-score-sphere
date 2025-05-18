
import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="bg-hero-pattern text-white py-20">
      <div className="section-container text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
          Transforme a gestão acadêmica da sua escola hoje mesmo
        </h2>
        
        <p className="text-lg max-w-2xl mx-auto text-white/90">
          Junte-se a centenas de instituições que já simplificaram seus processos
          e melhoraram seus resultados com o ScoreSync.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button size="lg" variant="secondary" className="bg-white text-education-primary hover:bg-gray-100">
            Começar Gratuitamente
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Agendar Demonstração
          </Button>
        </div>
        
        <p className="text-sm text-white/70">
          Sem necessidade de cartão de crédito • Suporte incluído • Cancele a qualquer momento
        </p>
      </div>
    </section>
  );
};

export default CallToAction;

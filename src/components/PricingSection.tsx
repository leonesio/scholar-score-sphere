
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    description: "Ideal para escolas pequenas",
    price: "R$ 299",
    billing: "/mês",
    features: [
      "Até 200 alunos",
      "Registro de notas e faltas",
      "Boletins digitais",
      "Suporte por e-mail",
      "1 administrador",
    ],
    highlighted: false,
    cta: "Começar Agora",
  },
  {
    name: "Profissional",
    description: "Perfeito para escolas médias",
    price: "R$ 499",
    billing: "/mês",
    features: [
      "Até 500 alunos",
      "Todos os recursos do plano Básico",
      "Relatórios avançados",
      "Comunicação integrada",
      "API para integrações",
      "Suporte prioritário",
      "3 administradores",
    ],
    highlighted: true,
    cta: "Escolher Plano",
  },
  {
    name: "Empresarial",
    description: "Para redes de ensino",
    price: "Personalizado",
    billing: "",
    features: [
      "Alunos ilimitados",
      "Todos os recursos do plano Profissional",
      "Multi-unidades",
      "Customização de relatórios",
      "Onboarding dedicado",
      "Gerente de sucesso",
      "Administradores ilimitados",
    ],
    highlighted: false,
    cta: "Fale Conosco",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Planos que se adaptam à sua instituição
        </h2>
        <p className="text-lg text-gray-600">
          Escolha o plano ideal para as necessidades da sua escola ou rede de ensino.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`animate-fade-in ${plan.highlighted ? "border-education-primary ring-2 ring-education-primary/20 shadow-lg" : "border"}`}
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-education-primary text-white text-sm font-medium rounded-full">
                Mais Popular
              </div>
            )}
            
            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500 text-sm">{plan.billing}</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              <Button 
                className={`w-full ${plan.highlighted ? "bg-education-primary hover:bg-education-secondary" : ""}`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center text-gray-600 max-w-2xl mx-auto">
        <p className="text-sm">
          Todos os planos incluem 14 dias de teste gratuito. Não é necessário cartão de crédito.
          Precisa de um plano customizado? Entre em contato com nossa equipe de vendas.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

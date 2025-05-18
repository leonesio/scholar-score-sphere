
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carla Mendes",
    role: "Professora de Matemática",
    image: "https://i.pravatar.cc/150?img=32",
    content: "O ScoreSync transformou completamente minha rotina de trabalho. Consigo lançar notas e gerar relatórios em metade do tempo que levava antes.",
    rating: 5,
  },
  {
    name: "Roberto Santos",
    role: "Coordenador Pedagógico",
    image: "https://i.pravatar.cc/150?img=58",
    content: "A facilidade de visualizar o desempenho de todas as turmas em um único painel nos ajudou a identificar rapidamente onde precisamos focar nossas ações pedagógicas.",
    rating: 5,
  },
  {
    name: "Márcia Oliveira",
    role: "Mãe de Aluno",
    image: "https://i.pravatar.cc/150?img=9",
    content: "Como mãe de dois adolescentes, ter acesso às notas e ao calendário de atividades em tempo real me ajuda a acompanhar o desenvolvimento deles mesmo com minha agenda cheia.",
    rating: 4,
  },
  {
    name: "Pedro Almeida",
    role: "Diretor Escolar",
    image: "https://i.pravatar.cc/150?img=17",
    content: "Implementamos o ScoreSync há apenas seis meses e já notamos uma melhora significativa na comunicação entre pais e professores, além da redução de erros nos boletins.",
    rating: 5,
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-br from-education-primary/5 to-education-accent/5 py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que dizem nossos usuários
          </h2>
          <p className="text-lg text-gray-600">
            Centenas de escolas já transformaram sua gestão acadêmica com nossa plataforma.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-education-primary"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <Separator />
                
                <p className="italic text-gray-700">"{testimonial.content}"</p>
                
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

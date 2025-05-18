
import React from "react";
import { 
  BookOpen, 
  Calendar, 
  Layout, 
  BarChart4, 
  MessageCircle,
  FileText
} from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-education-primary" />,
    title: "Registro de Notas",
    description: "Sistema intuitivo para lançamento e gerenciamento de notas, atividades e avaliações."
  },
  {
    icon: <Calendar className="h-8 w-8 text-education-primary" />,
    title: "Calendário Acadêmico",
    description: "Organize provas, trabalhos e eventos escolares em um calendário integrado."
  },
  {
    icon: <BarChart4 className="h-8 w-8 text-education-primary" />,
    title: "Relatórios Detalhados",
    description: "Gráficos e estatísticas do desempenho individual e da turma para análise completa."
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-education-primary" />,
    title: "Comunicação Direta",
    description: "Interação entre professores, alunos e pais para acompanhamento contínuo."
  },
  {
    icon: <Layout className="h-8 w-8 text-education-primary" />,
    title: "Dashboard Personalizado",
    description: "Visualize todas as informações importantes em um painel adaptado para cada usuário."
  },
  {
    icon: <FileText className="h-8 w-8 text-education-primary" />,
    title: "Boletins Digitais",
    description: "Gere boletins completos com histórico acadêmico e médias calculadas automaticamente."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recursos completos para gestão acadêmica
          </h2>
          <p className="text-lg text-gray-600">
            Nossa plataforma oferece todas as ferramentas necessárias para uma administração 
            escolar eficiente e transparente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-in" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

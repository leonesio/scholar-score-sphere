
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Simplifique a gestão de <span className="gradient-text">notas escolares</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Uma plataforma completa para professorees, alunos e pais acompanharem 
              o progresso acadêmico com facilidade e precisão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-education-primary hover:bg-education-secondary">
                Começar Agora
              </Button>
              <Button size="lg" variant="outline">
                Agendar Demo
              </Button>
            </div>
            <div className="pt-4 text-sm text-gray-500">
              Utilizado por +500 escolas em todo o Brasil
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Sistema de gerenciamento de notas" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-education-primary/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium text-gray-500">Média de aprovação</div>
              <div className="text-3xl font-bold text-education-primary">95%</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -z-10 top-0 left-1/3 w-[500px] h-[500px] bg-education-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

// Duplicate of HeroSection with a different id for HTML validation
const HeroSectionDuplicate = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Simplifique a gestão de <span className="gradient-text">notas escolares</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Uma plataforma completa para professorees, alunos e pais acompanharem 
              o progresso acadêmico com facilidade e precisão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-education-primary hover:bg-education-secondary">
                Começar Agora
              </Button>
              <Button size="lg" variant="outline">
                Agendar Demo
              </Button>
            </div>
            <div className="pt-4 text-sm text-gray-500">
              Utilizado por +500 escolas em todo o Brasil
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Sistema de gerenciamento de notas" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-education-primary/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium text-gray-500">Média de aprovação</div>
              <div className="text-3xl font-bold text-education-primary">95%</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -z-10 top-0 left-1/3 w-[500px] h-[500px] bg-education-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export { HeroSection, HeroSectionDuplicate };
export default HeroSection;

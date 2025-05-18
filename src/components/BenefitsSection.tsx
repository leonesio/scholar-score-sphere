
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const benefitsData = {
  professors: [
    "Reduza o tempo de trabalho administrativo em até 70%",
    "Calcule médias e conceitos automaticamente",
    "Crie avaliações personalizadas com facilidade",
    "Identifique alunos com dificuldades através de análises",
    "Mantenha um histórico completo de cada aluno",
    "Comunique-se diretamente com pais e responsáveis",
  ],
  students: [
    "Acompanhe seu desempenho em tempo real",
    "Receba notificações sobre novas notas e atividades",
    "Visualize médias e progresso por disciplina",
    "Organize prazos de entrega de trabalhos",
    "Acesse materiais de estudo complementares",
    "Solicite revisões e tire dúvidas diretamente com professores",
  ],
  parents: [
    "Acompanhe o desempenho dos seus filhos em tempo real",
    "Receba alertas sobre notas baixas ou faltas",
    "Comunique-se diretamente com professores",
    "Visualize o calendário de avaliações e atividades",
    "Compare o desempenho por período letivo",
    "Acesse boletins e relatórios completos a qualquer momento",
  ],
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Benefícios para toda a comunidade escolar
        </h2>
        <p className="text-lg text-gray-600">
          Nossa plataforma foi desenvolvida pensando nas necessidades específicas de cada usuário
          do ambiente educacional.
        </p>
      </div>

      <Tabs defaultValue="professors" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="professors">Professores</TabsTrigger>
          <TabsTrigger value="students">Alunos</TabsTrigger>
          <TabsTrigger value="parents">Pais</TabsTrigger>
        </TabsList>
        
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <TabsContent value="professors" className="animate-fade-in space-y-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-education-primary">
                  Para Professores
                </h3>
                <p className="text-gray-600 mb-6">
                  Simplifique suas tarefas administrativas e foque no que realmente importa: ensinar.
                  Com nosso sistema, você economiza tempo e ganha precisão na gestão acadêmica.
                </p>
                <ul className="space-y-3">
                  {benefitsData.professors.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Professor utilizando o sistema"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="students" className="animate-fade-in space-y-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-education-primary">
                  Para Alunos
                </h3>
                <p className="text-gray-600 mb-6">
                  Acompanhe seu progresso acadêmico, organize suas atividades e mantenha-se
                  sempre atualizado sobre seu desempenho em cada disciplina.
                </p>
                <ul className="space-y-3">
                  {benefitsData.students.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Aluno utilizando o sistema"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="parents" className="animate-fade-in space-y-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-education-primary">
                  Para Pais e Responsáveis
                </h3>
                <p className="text-gray-600 mb-6">
                  Acompanhe de perto o desenvolvimento acadêmico de seus filhos e mantenha uma
                  comunicação direta com a escola, mesmo com sua agenda ocupada.
                </p>
                <ul className="space-y-3">
                  {benefitsData.parents.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Pais utilizando o sistema"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default BenefitsSection;

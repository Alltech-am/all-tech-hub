import { useState } from "react";
import { AppSidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { ChatComposer } from "@/components/ChatComposer";
import { toast } from "sonner";

const Index = () => {
  const [, setTaskCount] = useState(0);

  const handleSubmit = (text: string) => {
    setTaskCount((c) => c + 1);
    toast.success("Tarefa criada", {
      description: text.length > 80 ? text.slice(0, 80) + "…" : text,
    });
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <AppSidebar onNewTask={() => toast("Nova tarefa", { description: "Comece digitando abaixo." })} />

      <main className="relative flex flex-1 flex-col">
        <TopBar />

        {/* glow backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-glow opacity-60" />

        <section className="relative flex flex-1 flex-col items-center justify-center px-6 pb-16">
          <div className="mb-10 animate-fade-in text-center">
            <h1 className="font-display text-5xl italic tracking-tight text-foreground sm:text-6xl">
              Em que <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">projeto</span> vamos trabalhar?
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Atribua tarefas, crie agentes e organize projetos com IA.
            </p>
          </div>

          <div className="w-full animate-scale-in">
            <div className="mx-auto flex justify-center">
              <ChatComposer onSubmit={handleSubmit} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

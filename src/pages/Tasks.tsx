import { Link } from "react-router-dom";
import { ListChecks, Plus, MessageSquareDashed } from "lucide-react";
import { AppSidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { toast } from "sonner";

export default function Tasks() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <AppSidebar onNewTask={() => toast("Nova tarefa")} />
      <main className="relative flex flex-1 flex-col">
        <TopBar />
        <section className="relative flex-1 overflow-y-auto px-6 py-10">
          <div className="mx-auto w-full max-w-4xl">
            <div className="mb-8 flex items-start justify-between gap-4 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <ListChecks className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-display text-3xl italic tracking-tight sm:text-4xl">
                    Todas as tarefas
                  </h1>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Acompanhe e organize tudo o que está em andamento.
                  </p>
                </div>
              </div>
              <Link
                to="/nova-tarefa"
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-base hover:scale-[1.02]"
              >
                <Plus className="h-4 w-4" />
                Nova tarefa
              </Link>
            </div>

            <div className="rounded-2xl border border-dashed border-border bg-card/30 p-12 text-center animate-scale-in">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-dashed border-border/70 text-muted-foreground/70">
                <MessageSquareDashed className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Nenhuma tarefa ainda. Crie a primeira para começar.
              </p>
              <Link
                to="/nova-tarefa"
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/60 px-3 py-1.5 text-xs text-foreground/85 transition-base hover:border-primary/40 hover:bg-card"
              >
                <Plus className="h-3.5 w-3.5" />
                Nova tarefa
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

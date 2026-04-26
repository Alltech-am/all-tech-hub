import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { AppSidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { toast } from "sonner";

export default function Search() {
  const [q, setQ] = useState("");
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <AppSidebar onNewTask={() => toast("Nova tarefa")} />
      <main className="relative flex flex-1 flex-col">
        <TopBar />
        <section className="relative flex-1 overflow-y-auto px-6 py-10">
          <div className="mx-auto w-full max-w-2xl">
            <div className="mb-6 flex items-center gap-3 animate-fade-in">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <SearchIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="font-display text-3xl italic tracking-tight">Pesquisar</h1>
            </div>

            <div className="relative animate-scale-in">
              <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar tarefas, conversas, projetos…"
                className="w-full rounded-2xl border border-border bg-card/80 py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 shadow-soft backdrop-blur transition-base focus:border-primary/40 focus:shadow-glow focus:outline-none"
              />
            </div>

            <div className="mt-10 rounded-xl border border-dashed border-border bg-card/30 p-8 text-center text-sm text-muted-foreground">
              {q ? `Nenhum resultado para "${q}"` : "Comece digitando para pesquisar."}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

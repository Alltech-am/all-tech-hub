import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, FolderPlus } from "lucide-react";
import { AppSidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { toast } from "sonner";

export default function NewProject() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    toast.success("Projeto criado", { description: name });
    navigate("/");
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <AppSidebar onNewTask={() => toast("Nova tarefa")} />
      <main className="relative flex flex-1 flex-col">
        <TopBar />
        <section className="relative flex-1 overflow-y-auto px-6 py-10">
          <div className="mx-auto w-full max-w-2xl">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-base hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar
            </Link>

            <div className="mb-8 flex items-start gap-4 animate-fade-in">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <FolderPlus className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl italic tracking-tight sm:text-4xl">
                  Novo projeto
                </h1>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Organize tarefas, conversas e arquivos em um só lugar.
                </p>
              </div>
            </div>

            <form onSubmit={handleCreate} className="space-y-5 animate-scale-in">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Nome do projeto
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Lançamento Q2"
                  className="w-full rounded-xl border border-border bg-card/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-soft transition-base focus:border-primary/40 focus:shadow-glow focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Descrição (opcional)
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Conte o objetivo deste projeto…"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-border bg-card/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-soft transition-base focus:border-primary/40 focus:shadow-glow focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Link
                  to="/"
                  className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-base hover:text-foreground"
                >
                  Cancelar
                </Link>
                <button
                  type="submit"
                  disabled={!name.trim()}
                  className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-base hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                >
                  Criar projeto
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

import { BookOpen, FileText, Image as ImageIcon, Code2 } from "lucide-react";
import { AppSidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { toast } from "sonner";

const tabs = ["Tudo", "Documentos", "Imagens", "Código"];

export default function Library() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <AppSidebar onNewTask={() => toast("Nova tarefa")} />
      <main className="relative flex flex-1 flex-col">
        <TopBar />
        <section className="relative flex-1 overflow-y-auto px-6 py-10">
          <div className="mx-auto w-full max-w-4xl">
            <div className="mb-8 flex items-start gap-4 animate-fade-in">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl italic tracking-tight sm:text-4xl">
                  Biblioteca
                </h1>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Todos os arquivos e artefatos gerados pelo All Tech.
                </p>
              </div>
            </div>

            <div className="mb-6 flex gap-1 border-b border-border">
              {tabs.map((t, i) => (
                <button
                  key={t}
                  className={`relative px-4 py-2 text-sm transition-base ${
                    i === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                  {i === 0 && (
                    <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-primary" />
                  )}
                </button>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 animate-scale-in">
              {[FileText, ImageIcon, Code2, FileText, ImageIcon, Code2].map((Icon, i) => (
                <div
                  key={i}
                  className="group cursor-pointer rounded-xl border border-border bg-card/60 p-4 transition-base hover:border-primary/40 hover:bg-card hover:shadow-glow"
                >
                  <div className="flex h-24 items-center justify-center rounded-lg bg-muted/40">
                    <Icon className="h-8 w-8 text-muted-foreground transition-base group-hover:text-primary" />
                  </div>
                  <div className="mt-3">
                    <p className="text-sm font-medium">Arquivo {i + 1}</p>
                    <p className="text-xs text-muted-foreground">Há 2 dias</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

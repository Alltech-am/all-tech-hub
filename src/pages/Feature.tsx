import { Link } from "react-router-dom";
import { ArrowLeft, LucideIcon } from "lucide-react";
import { AppSidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { ChatComposer } from "@/components/ChatComposer";
import { toast } from "sonner";

interface FeaturePageProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  placeholder?: string;
  examples?: string[];
}

export default function FeaturePage({
  title,
  subtitle,
  icon: Icon,
  examples = [],
}: FeaturePageProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <AppSidebar onNewTask={() => toast("Nova tarefa", { description: "Comece digitando abaixo." })} />

      <main className="relative flex flex-1 flex-col">
        <TopBar />

        <div className="pointer-events-none absolute inset-0 bg-glow opacity-50" />

        <section className="relative flex flex-1 flex-col overflow-y-auto px-6 py-10">
          <div className="mx-auto w-full max-w-3xl">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-base hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar
            </Link>

            <div className="mb-8 flex items-start gap-4 animate-fade-in">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl italic tracking-tight text-foreground sm:text-4xl">
                  {title}
                </h1>
                <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>
              </div>
            </div>

            <div className="animate-scale-in">
              <ChatComposer
                onSubmit={(text) =>
                  toast.success("Tarefa criada", {
                    description: text.length > 80 ? text.slice(0, 80) + "…" : text,
                  })
                }
              />
            </div>

            {examples.length > 0 && (
              <div className="mt-10">
                <h2 className="mb-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Exemplos para começar
                </h2>
                <div className="grid gap-2 sm:grid-cols-2">
                  {examples.map((ex) => (
                    <button
                      key={ex}
                      onClick={() =>
                        toast.success("Tarefa criada", { description: ex })
                      }
                      className="rounded-xl border border-border bg-card/60 p-4 text-left text-sm text-foreground/85 transition-base hover:border-primary/40 hover:bg-card hover:shadow-glow"
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

import { MoreHorizontal, FileText, Code2, BarChart3, Mail, Database, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { AppSidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { toast } from "sonner";

const categories = [
  { icon: FileText, title: "Escrita", desc: "Artigos, copys, e-mails e roteiros." },
  { icon: Code2, title: "Código", desc: "Scripts, automações e refatorações." },
  { icon: BarChart3, title: "Análise de dados", desc: "Planilhas, dashboards e insights." },
  { icon: Mail, title: "E-mails", desc: "Sequências, follow-ups e newsletters." },
  { icon: Database, title: "Banco de dados", desc: "Schemas, queries e migrações." },
  { icon: Bot, title: "Automações", desc: "Fluxos e integrações entre apps." },
];

export default function More() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <AppSidebar onNewTask={() => toast("Nova tarefa")} />
      <main className="relative flex flex-1 flex-col">
        <TopBar />
        <section className="relative flex-1 overflow-y-auto px-6 py-10">
          <div className="mx-auto w-full max-w-4xl">
            <div className="mb-8 flex items-start gap-4 animate-fade-in">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <MoreHorizontal className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl italic tracking-tight sm:text-4xl">
                  Mais possibilidades
                </h1>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Explore tudo que o All Tech pode fazer por você.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 animate-scale-in">
              {categories.map((c) => {
                const Icon = c.icon;
                return (
                  <Link
                    key={c.title}
                    to="/"
                    className="group rounded-xl border border-border bg-card/60 p-4 transition-base hover:border-primary/40 hover:bg-card hover:shadow-glow"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 text-sm font-medium">{c.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

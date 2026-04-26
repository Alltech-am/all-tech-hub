import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Cloud,
  Github,
  Slack,
  Database,
  Figma,
  FileText,
  Mail,
  Calendar,
  HardDrive,
  MessageSquare,
  Trello,
  Zap,
  Check,
} from "lucide-react";
import { AppSidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { toast } from "sonner";
import { useState } from "react";

const integrations = [
  { id: "gdrive", name: "Google Drive", desc: "Acesse arquivos e documentos", icon: HardDrive, connected: true },
  { id: "github", name: "GitHub", desc: "Sincronize repositórios e PRs", icon: Github, connected: true },
  { id: "slack", name: "Slack", desc: "Envie mensagens e notificações", icon: Slack, connected: false },
  { id: "notion", name: "Notion", desc: "Leia e crie páginas", icon: FileText, connected: true },
  { id: "figma", name: "Figma", desc: "Importe designs e protótipos", icon: Figma, connected: false },
  { id: "gmail", name: "Gmail", desc: "Leia e envie emails", icon: Mail, connected: true },
  { id: "calendar", name: "Google Calendar", desc: "Gerencie eventos e reuniões", icon: Calendar, connected: false },
  { id: "supabase", name: "Supabase", desc: "Banco de dados e autenticação", icon: Database, connected: true },
  { id: "discord", name: "Discord", desc: "Bots e mensagens em servidores", icon: MessageSquare, connected: false },
  { id: "trello", name: "Trello", desc: "Gerencie quadros e cards", icon: Trello, connected: false },
  { id: "zapier", name: "Zapier", desc: "Automatize fluxos entre apps", icon: Zap, connected: false },
  { id: "dropbox", name: "Dropbox", desc: "Armazenamento na nuvem", icon: Cloud, connected: false },
];

export default function Integrations() {
  const [items, setItems] = useState(integrations);

  const toggle = (id: string) => {
    setItems((prev) =>
      prev.map((i) => {
        if (i.id !== id) return i;
        const next = !i.connected;
        toast.success(next ? `${i.name} conectado` : `${i.name} desconectado`);
        return { ...i, connected: next };
      })
    );
  };

  const connectedCount = items.filter((i) => i.connected).length;

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <AppSidebar onNewTask={() => toast("Nova tarefa")} />
      <main className="relative flex flex-1 flex-col">
        <TopBar />
        <div className="pointer-events-none absolute inset-0 bg-glow opacity-50" />
        <section className="relative flex-1 overflow-y-auto px-6 py-10">
          <div className="mx-auto w-full max-w-4xl">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-base hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar
            </Link>

            <div className="mb-8 flex items-start gap-4 animate-fade-in">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Cloud className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl italic tracking-tight text-foreground sm:text-4xl">
                  Integrações
                </h1>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {connectedCount} de {items.length} serviços conectados
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 animate-scale-in">
              {items.map((it) => {
                const Icon = it.icon;
                return (
                  <div
                    key={it.id}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card/60 p-4 transition-base hover:border-primary/40 hover:bg-card"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                        <Icon className="h-5 w-5 text-foreground/80" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-medium text-foreground truncate">{it.name}</h3>
                          {it.connected && (
                            <span className="flex items-center gap-1 rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                              <Check className="h-2.5 w-2.5" />
                              Ativo
                            </span>
                          )}
                        </div>
                        <p className="truncate text-xs text-muted-foreground">{it.desc}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggle(it.id)}
                      className={
                        it.connected
                          ? "shrink-0 rounded-lg border border-border px-3 py-1.5 text-xs text-foreground/80 transition-base hover:border-destructive/40 hover:text-destructive"
                          : "shrink-0 rounded-lg bg-gradient-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-glow transition-base hover:scale-105"
                      }
                    >
                      {it.connected ? "Desconectar" : "Conectar"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

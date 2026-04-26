import { useState } from "react";
import {
  Plus,
  Search,
  BookOpen,
  Sparkles,
  Folder,
  Settings,
  Plug,
  UserCircle2,
  Gift,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  onNewTask: () => void;
}

const projects = [{ id: "1", name: "All Tech — Plataforma" }];

export function AppSidebar({ onNewTask }: SidebarProps) {
  const [active, setActive] = useState("agent");

  const menu = [
    { id: "agent", label: "Agent", icon: Sparkles, badge: "Novo" },
    { id: "search", label: "Pesquisar", icon: Search },
    { id: "library", label: "Biblioteca", icon: BookOpen },
  ];

  return (
    <aside className="flex h-screen w-[260px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      {/* Brand */}
      <div className="flex items-center gap-2 px-4 pt-5 pb-4">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
          <span className="text-[13px] font-bold text-primary-foreground">A</span>
        </div>
        <span className="text-[15px] font-semibold tracking-tight">All Tech</span>
      </div>

      {/* New task */}
      <div className="px-3">
        <button
          onClick={onNewTask}
          className="group flex w-full items-center justify-between rounded-xl border border-sidebar-border bg-sidebar-accent/40 px-3 py-2.5 text-sm font-medium transition-base hover:border-primary/40 hover:bg-sidebar-accent hover:shadow-glow"
        >
          <span className="flex items-center gap-2">
            <Plus className="h-4 w-4 text-primary" />
            Nova tarefa
          </span>
          <kbd className="rounded-md bg-background/60 px-1.5 py-0.5 text-[10px] text-muted-foreground">
            ⌘N
          </kbd>
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-5 px-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-base",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="rounded-md bg-primary/15 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Projects */}
      <div className="mt-6 px-2">
        <div className="flex items-center justify-between px-3 pb-1.5">
          <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Projetos
          </span>
          <button className="text-muted-foreground transition-base hover:text-foreground">
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
        {projects.map((p) => (
          <button
            key={p.id}
            className="group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/75 transition-base hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
          >
            <Folder className="h-4 w-4" />
            <span className="flex-1 truncate text-left">{p.name}</span>
            <ChevronRight className="h-3.5 w-3.5 opacity-0 transition-base group-hover:opacity-60" />
          </button>
        ))}
      </div>

      {/* Tasks */}
      <div className="mt-6 px-2">
        <div className="px-3 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Tarefas
        </div>
        <div className="rounded-lg px-3 py-2 text-xs text-muted-foreground">
          Nenhuma tarefa ainda
        </div>
        <button className="px-3 py-1 text-xs text-primary/90 transition-base hover:text-primary">
          Todas as tarefas →
        </button>
      </div>

      {/* Footer */}
      <div className="mt-auto p-3">
        <div className="mb-3 overflow-hidden rounded-xl border border-sidebar-border bg-gradient-to-br from-sidebar-accent to-sidebar p-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Gift className="h-4 w-4 text-primary" />
            Compartilhe All Tech
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Receba créditos por cada amigo que entrar.
          </p>
          <button className="mt-2.5 w-full rounded-md bg-foreground/95 px-3 py-1.5 text-xs font-medium text-background transition-base hover:bg-foreground">
            Convidar
          </button>
        </div>

        <div className="flex items-center justify-around border-t border-sidebar-border pt-3 text-muted-foreground">
          <button className="rounded-md p-1.5 transition-base hover:bg-sidebar-accent hover:text-foreground" title="Ajustes">
            <Settings className="h-4 w-4" />
          </button>
          <button className="rounded-md p-1.5 transition-base hover:bg-sidebar-accent hover:text-foreground" title="Integrações">
            <Plug className="h-4 w-4" />
          </button>
          <button className="rounded-md p-1.5 transition-base hover:bg-sidebar-accent hover:text-foreground" title="Conta">
            <UserCircle2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}

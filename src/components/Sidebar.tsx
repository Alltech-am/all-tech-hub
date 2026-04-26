import {
  Plus,
  Search,
  BookOpen,
  Sparkles,
  Settings,
  Plug,
  UserCircle2,
  Gift,
  SquarePen,
  FolderPlus,
  ListFilter,
  MessageSquareDashed,
  ChevronRight,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarProps {
  onNewTask: () => void;
}

export function AppSidebar({ onNewTask }: SidebarProps) {
  const navigate = useNavigate();

  const menu = [
    { to: "/nova-tarefa", label: "Nova tarefa", icon: SquarePen, onClick: onNewTask },
    { to: "/agent", label: "Agent", icon: Sparkles, badge: "Novo" },
    { to: "/pesquisar", label: "Pesquisar", icon: Search },
    { to: "/biblioteca", label: "Biblioteca", icon: BookOpen },
  ];

  return (
    <aside className="flex h-screen w-[260px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      {/* Brand */}
      <NavLink to="/" className="flex items-center gap-2 px-4 pt-5 pb-5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
          <span className="text-[13px] font-bold text-primary-foreground">A</span>
        </div>
        <span className="text-[15px] font-semibold tracking-tight">All Tech</span>
      </NavLink>

      {/* Menu */}
      <nav className="px-2">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={item.onClick}
              className={({ isActive }) =>
                cn(
                  "group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-base",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                )
              }
            >
              <Icon className="h-4 w-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="rounded-md bg-primary/15 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Projects */}
      <div className="mt-6 px-2">
        <div className="flex items-center justify-between px-3 pb-1.5">
          <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Projetos
          </span>
          <button
            onClick={() => navigate("/projetos/novo")}
            className="text-muted-foreground transition-base hover:text-foreground"
            title="Novo projeto"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
        <NavLink
          to="/projetos/novo"
          className={({ isActive }) =>
            cn(
              "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-base",
              isActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
            )
          }
        >
          <FolderPlus className="h-4 w-4" />
          Novo projeto
        </NavLink>
      </div>

      {/* Tasks */}
      <div className="mt-6 flex flex-1 flex-col px-2 min-h-0">
        <div className="flex items-center justify-between px-3 pb-1.5">
          <NavLink
            to="/tarefas"
            className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground transition-base hover:text-foreground"
          >
            Todas as tarefas
          </NavLink>
          <button
            className="text-muted-foreground transition-base hover:text-foreground"
            title="Filtrar"
          >
            <ListFilter className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-dashed border-border/70 text-muted-foreground/70">
            <MessageSquareDashed className="h-5 w-5" />
          </div>
          <p className="mt-3 text-xs text-muted-foreground/80">
            Crie uma nova tarefa para começar
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3">
        <button className="mb-3 flex w-full items-center justify-between gap-2 rounded-xl border border-sidebar-border bg-gradient-to-br from-sidebar-accent to-sidebar p-3 text-left transition-base hover:border-primary/40 hover:shadow-glow">
          <div className="flex items-center gap-2.5">
            <Gift className="h-4 w-4 text-primary" />
            <div>
              <div className="text-[13px] font-medium">Compartilhe All Tech com…</div>
              <div className="text-[11px] text-muted-foreground">Receba 500 créditos cada</div>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </button>

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

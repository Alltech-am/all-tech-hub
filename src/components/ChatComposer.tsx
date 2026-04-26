import { useState, useRef, KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Paperclip,
  Cloud,
  Monitor,
  Mic,
  ArrowUp,
  Presentation,
  Globe,
  AppWindow,
  Palette,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatComposerProps {
  onSubmit: (text: string) => void;
}

const quickActions = [
  { label: "Criar slides", icon: Presentation, to: "/slides" },
  { label: "Criar site", icon: Globe, to: "/site" },
  { label: "Desenvolver apps desktop", icon: AppWindow, to: "/apps" },
  { label: "Design", icon: Palette, to: "/design" },
  { label: "Mais", icon: MoreHorizontal, to: "/mais" },
];

export function ChatComposer({ onSubmit }: ChatComposerProps) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);

  const send = () => {
    const v = value.trim();
    if (!v) return;
    onSubmit(v);
    setValue("");
    if (ref.current) ref.current.style.height = "auto";
  };

  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const onInput = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 220) + "px";
  };

  return (
    <div className="w-full max-w-3xl">
      {/* Composer */}
      <div className="group relative rounded-2xl border border-border bg-card/80 p-3 shadow-soft backdrop-blur transition-base focus-within:border-primary/40 focus-within:shadow-glow">
        <textarea
          ref={ref}
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onInput={onInput}
          onKeyDown={onKey}
          placeholder="Atribua uma tarefa ou pergunte qualquer coisa"
          className="block w-full resize-none bg-transparent px-2 pt-1 pb-2 text-[15px] leading-relaxed text-foreground placeholder:text-muted-foreground/70 focus:outline-none scrollbar-thin"
        />

        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-1 text-muted-foreground">
            <IconBtn title="Adicionar"><Plus className="h-4 w-4" /></IconBtn>
            <IconBtn title="Anexar arquivo"><Paperclip className="h-4 w-4" /></IconBtn>
            <IconBtn title="Integrações" badge="+6"><Cloud className="h-4 w-4" /></IconBtn>
            <IconBtn title="Modo execução"><Monitor className="h-4 w-4" /></IconBtn>
          </div>

          <div className="flex items-center gap-1">
            <IconBtn title="Voz"><Mic className="h-4 w-4" /></IconBtn>
            <button
              onClick={send}
              disabled={!value.trim()}
              className={cn(
                "ml-1 flex h-8 w-8 items-center justify-center rounded-lg transition-base",
                value.trim()
                  ? "bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105"
                  : "bg-muted text-muted-foreground"
              )}
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {quickActions.map((a) => {
          const Icon = a.icon;
          return (
            <Link
              key={a.label}
              to={a.to}
              className="flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs text-foreground/85 transition-base hover:border-primary/40 hover:bg-card hover:text-foreground"
            >
              <Icon className="h-3.5 w-3.5 text-muted-foreground" />
              {a.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function IconBtn({
  children,
  title,
  badge,
}: {
  children: React.ReactNode;
  title: string;
  badge?: string;
}) {
  return (
    <button
      title={title}
      className="relative flex h-8 items-center gap-1 rounded-lg px-2 text-muted-foreground transition-base hover:bg-accent hover:text-foreground"
    >
      {children}
      {badge && <span className="text-[11px] font-medium">{badge}</span>}
    </button>
  );
}

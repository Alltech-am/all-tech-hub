import { useState, useRef, KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  X,
  FileText,
  Image as ImageIcon,
  File as FileIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { AddMenu } from "./AddMenu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

interface Attachment {
  id: string;
  name: string;
  size: number;
  type: string;
}

const fileIconFor = (type: string) => {
  if (type.startsWith("image/")) return ImageIcon;
  if (type.includes("pdf") || type.includes("text") || type.includes("document"))
    return FileText;
  return FileIcon;
};

const formatSize = (b: number) => {
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1024 / 1024).toFixed(1)} MB`;
};

export function ChatComposer({ onSubmit }: ChatComposerProps) {
  const [value, setValue] = useState("");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [execMode, setExecMode] = useState(false);
  const [recording, setRecording] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const send = () => {
    const v = value.trim();
    if (!v && attachments.length === 0) return;
    onSubmit(
      v +
        (attachments.length
          ? ` (${attachments.length} anexo${attachments.length > 1 ? "s" : ""})`
          : "") +
        (execMode ? " [modo execução]" : "")
    );
    setValue("");
    setAttachments([]);
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

  const onFiles = (files: FileList | null) => {
    if (!files) return;
    const next: Attachment[] = [];
    Array.from(files).forEach((f) => {
      if (f.size > 20 * 1024 * 1024) {
        toast.error(`${f.name} excede o limite de 20MB`);
        return;
      }
      next.push({
        id: `${f.name}-${f.size}-${Date.now()}-${Math.random()}`,
        name: f.name,
        size: f.size,
        type: f.type,
      });
    });
    if (next.length) {
      setAttachments((prev) => [...prev, ...next]);
      toast.success(
        next.length === 1 ? "Arquivo anexado" : `${next.length} arquivos anexados`
      );
    }
  };

  const removeAttachment = (id: string) =>
    setAttachments((prev) => prev.filter((a) => a.id !== id));

  const toggleVoice = () => {
    setRecording((r) => {
      const next = !r;
      toast(next ? "Gravando voz…" : "Gravação encerrada");
      return next;
    });
  };

  return (
    <div className="w-full max-w-3xl">
      <input
        ref={fileRef}
        type="file"
        multiple
        hidden
        onChange={(e) => {
          onFiles(e.target.files);
          e.target.value = "";
        }}
      />
      <input
        ref={imageRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(e) => {
          onFiles(e.target.files);
          e.target.value = "";
        }}
      />

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

        {/* Attachments preview */}
        {attachments.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-1.5 px-1">
            {attachments.map((a) => {
              const Icon = fileIconFor(a.type);
              return (
                <div
                  key={a.id}
                  className="group/chip flex items-center gap-2 rounded-lg border border-border bg-accent/60 py-1 pl-2 pr-1 text-xs"
                >
                  <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="max-w-[160px] truncate text-foreground/90">
                    {a.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {formatSize(a.size)}
                  </span>
                  <button
                    onClick={() => removeAttachment(a.id)}
                    className="flex h-5 w-5 items-center justify-center rounded-md text-muted-foreground transition-base hover:bg-background hover:text-foreground"
                    aria-label="Remover"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-1 text-muted-foreground">
            <AddMenu
              onPickImage={() => imageRef.current?.click()}
              onPickCode={() =>
                setValue((v) => (v ? v + "\n\n```\n\n```" : "```\n\n```"))
              }
              trigger={
                <button
                  title="Adicionar"
                  className="relative flex h-8 items-center gap-1 rounded-lg px-2 text-muted-foreground transition-base hover:bg-accent hover:text-foreground"
                >
                  <Plus className="h-4 w-4" />
                </button>
              }
            />

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => fileRef.current?.click()}
                  className="relative flex h-8 items-center gap-1 rounded-lg px-2 text-muted-foreground transition-base hover:bg-accent hover:text-foreground"
                >
                  <Paperclip className="h-4 w-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Anexar arquivo (até 20MB)</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => navigate("/integracoes")}
                  className="relative flex h-8 items-center gap-1 rounded-lg px-2 text-muted-foreground transition-base hover:bg-accent hover:text-foreground"
                >
                  <Cloud className="h-4 w-4" />
                  <span className="text-[11px] font-medium">+6</span>
                </button>
              </TooltipTrigger>
              <TooltipContent>Gerenciar integrações</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => {
                    const next = !execMode;
                    setExecMode(next);
                    toast(
                      next ? "Modo execução ativado" : "Modo execução desativado",
                      {
                        description: next
                          ? "Código será executado em sandbox"
                          : undefined,
                      }
                    );
                  }}
                  className={cn(
                    "relative flex h-8 items-center gap-1 rounded-lg px-2 transition-base",
                    execMode
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  <Monitor className="h-4 w-4" />
                  {execMode && (
                    <span className="text-[11px] font-medium">DEV</span>
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                {execMode ? "Modo execução ativo" : "Ativar modo execução"}
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={toggleVoice}
                  className={cn(
                    "relative flex h-8 items-center gap-1 rounded-lg px-2 transition-base",
                    recording
                      ? "bg-destructive/15 text-destructive animate-pulse"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  <Mic className="h-4 w-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                {recording ? "Parar gravação" : "Ditar por voz"}
              </TooltipContent>
            </Tooltip>
            <button
              onClick={send}
              disabled={!value.trim() && attachments.length === 0}
              className={cn(
                "ml-1 flex h-8 w-8 items-center justify-center rounded-lg transition-base",
                value.trim() || attachments.length
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

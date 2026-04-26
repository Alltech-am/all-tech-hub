import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  FileText,
  FolderPlus,
  Bot,
  Sparkles,
  Image as ImageIcon,
  Code2,
} from "lucide-react";

interface AddMenuProps {
  trigger: React.ReactNode;
  onPickImage?: () => void;
  onPickCode?: () => void;
}

export function AddMenu({ trigger, onPickImage, onPickCode }: AddMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-60">
        <DropdownMenuLabel className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Criar
        </DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <Link to="/nova-tarefa" className="cursor-pointer">
            <FileText className="mr-2 h-4 w-4" />
            Nova tarefa
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/projetos/novo" className="cursor-pointer">
            <FolderPlus className="mr-2 h-4 w-4" />
            Novo projeto
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/agent" className="cursor-pointer">
            <Bot className="mr-2 h-4 w-4" />
            Novo agente
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Inserir
        </DropdownMenuLabel>
        <DropdownMenuItem onClick={onPickImage} className="cursor-pointer">
          <ImageIcon className="mr-2 h-4 w-4" />
          Imagem
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onPickCode} className="cursor-pointer">
          <Code2 className="mr-2 h-4 w-4" />
          Bloco de código
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/mais" className="cursor-pointer">
            <Sparkles className="mr-2 h-4 w-4" />
            Sugestões de IA
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const AddMenuTriggerIcon = Plus;

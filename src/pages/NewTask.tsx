import { SquarePen } from "lucide-react";
import FeaturePage from "./Feature";

export default function NewTask() {
  return (
    <FeaturePage
      title="Nova tarefa"
      subtitle="Descreva o que você quer realizar e a IA cuida do resto."
      icon={SquarePen}
      examples={[
        "Resumir os e-mails não lidos da última semana",
        "Criar um plano de marketing para lançamento de produto",
        "Analisar dados de vendas do trimestre em uma planilha",
        "Escrever um artigo de blog sobre produtividade com IA",
      ]}
    />
  );
}

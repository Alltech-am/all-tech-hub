import { Sparkles } from "lucide-react";
import FeaturePage from "./Feature";

export default function Agent() {
  return (
    <FeaturePage
      title="Agent"
      subtitle="Crie agentes autônomos que executam tarefas complexas por você."
      icon={Sparkles}
      examples={[
        "Agente que monitora preços e me avisa por e-mail",
        "Pesquisador automático de leads no LinkedIn",
        "Agente de suporte que responde tickets",
        "Curador de conteúdo que resume notícias diárias",
      ]}
    />
  );
}

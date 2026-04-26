import { Presentation } from "lucide-react";
import FeaturePage from "./Feature";

export default function Slides() {
  return (
    <FeaturePage
      title="Criar slides"
      subtitle="Gere apresentações completas a partir de uma ideia ou briefing."
      icon={Presentation}
      examples={[
        "Apresentação de pitch para investidores Série A",
        "Slide deck sobre tendências de IA em 2026",
        "Treinamento interno de onboarding em 10 slides",
        "Relatório trimestral de vendas com gráficos",
      ]}
    />
  );
}

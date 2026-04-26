import { Palette } from "lucide-react";
import FeaturePage from "./Feature";

export default function Design() {
  return (
    <FeaturePage
      title="Design"
      subtitle="Crie identidades visuais, mockups e protótipos."
      icon={Palette}
      examples={[
        "Identidade visual para marca de café especial",
        "Mockup de app mobile de meditação",
        "Sistema de design com tokens e componentes",
        "Banners para campanha de redes sociais",
      ]}
    />
  );
}

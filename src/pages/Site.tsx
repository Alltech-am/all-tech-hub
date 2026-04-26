import { Globe } from "lucide-react";
import FeaturePage from "./Feature";

export default function Site() {
  return (
    <FeaturePage
      title="Criar site"
      subtitle="Construa landing pages e sites completos com IA."
      icon={Globe}
      examples={[
        "Landing page para SaaS de gestão financeira",
        "Site institucional para clínica odontológica",
        "Portfólio pessoal de designer minimalista",
        "E-commerce de roupas com checkout",
      ]}
    />
  );
}

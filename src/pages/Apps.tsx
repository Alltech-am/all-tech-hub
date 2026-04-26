import { AppWindow } from "lucide-react";
import FeaturePage from "./Feature";

export default function Apps() {
  return (
    <FeaturePage
      title="Desenvolver aplicativos desktop"
      subtitle="Crie apps nativos para Windows, macOS e Linux."
      icon={AppWindow}
      examples={[
        "App de produtividade com timer Pomodoro",
        "Editor de markdown com preview em tempo real",
        "Gerenciador de senhas criptografado",
        "Cliente de e-mail minimalista",
      ]}
    />
  );
}

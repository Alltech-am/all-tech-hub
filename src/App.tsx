import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Slides from "./pages/Slides.tsx";
import Site from "./pages/Site.tsx";
import Apps from "./pages/Apps.tsx";
import Design from "./pages/Design.tsx";
import More from "./pages/More.tsx";
import Agent from "./pages/Agent.tsx";
import Search from "./pages/Search.tsx";
import Library from "./pages/Library.tsx";
import NewTask from "./pages/NewTask.tsx";
import NewProject from "./pages/NewProject.tsx";
import Tasks from "./pages/Tasks.tsx";
import Integrations from "./pages/Integrations.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nova-tarefa" element={<NewTask />} />
          <Route path="/projetos/novo" element={<NewProject />} />
          <Route path="/tarefas" element={<Tasks />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/pesquisar" element={<Search />} />
          <Route path="/biblioteca" element={<Library />} />
          <Route path="/slides" element={<Slides />} />
          <Route path="/site" element={<Site />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/design" element={<Design />} />
          <Route path="/mais" element={<More />} />
          <Route path="/integracoes" element={<Integrations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

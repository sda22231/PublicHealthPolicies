import { useState } from "react";
import Header from "@/components/Header";
import TabNavigation, { POLICY_TABS } from "@/components/TabNavigation";
import PolicyContent from "@/components/PolicyContent";
import Footer from "@/components/Footer";

const POLICY_INFO = {
  sus: {
    title: "Sistema Único de Saúde (SUS)",
    subtitle: "Sistema público de saúde universal e igualitário no Brasil"
  },
  pnh: {
    title: "Política Nacional de Humanização (PNH)",
    subtitle: "Humanização do atendimento em saúde"
  },
  pnps: {
    title: "Política Nacional de Promoção da Saúde (PNPS)",
    subtitle: "Promoção da qualidade de vida e redução de vulnerabilidade"
  },
  pnstt: {
    title: "Política Nacional de Saúde do Trabalhador e da Trabalhadora (PNSTT)",
    subtitle: "Atenção integral à saúde dos trabalhadores"
  },
  pnaish: {
    title: "Política Nacional de Atenção Integral à Saúde do Homem (PNAISH)",
    subtitle: "Cuidado específico com a saúde masculina"
  },
  deficiencia: {
    title: "Política Nacional de Saúde da Pessoa com Deficiência",
    subtitle: "Atenção integral à saúde de pessoas com deficiência"
  },
  lgbt: {
    title: "Política Nacional de Saúde Integral de LGBT",
    subtitle: "Promoção da saúde integral da população LGBT"
  },
  idoso: {
    title: "Estatuto do Idoso",
    subtitle: "Direitos e proteção legal da pessoa idosa"
  },
  "pessoa-idosa": {
    title: "Políticas da Pessoa Idosa",
    subtitle: "Políticas públicas para atenção ao envelhecimento"
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("sus");
  const [searchQuery, setSearchQuery] = useState("");

  const currentPolicy = POLICY_INFO[activeTab as keyof typeof POLICY_INFO];

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={setSearchQuery} />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1">
        <PolicyContent 
          title={currentPolicy.title}
          subtitle={currentPolicy.subtitle}
        />
      </main>
      <Footer />
    </div>
  );
}

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import TabNavigation, { POLICY_TABS } from "@/components/TabNavigation";
import PolicyContent from "@/components/PolicyContent";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

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

  const filteredPolicies = useMemo(() => {
    if (!searchQuery.trim()) return null;
    
    const query = searchQuery.toLowerCase();
    return POLICY_TABS.filter(tab => {
      const policy = POLICY_INFO[tab.id as keyof typeof POLICY_INFO];
      return (
        tab.label.toLowerCase().includes(query) ||
        tab.id.toLowerCase().includes(query) ||
        policy.title.toLowerCase().includes(query) ||
        policy.subtitle.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  const currentPolicy = POLICY_INFO[activeTab as keyof typeof POLICY_INFO];

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={setSearchQuery} />
      <TabNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        filteredTabs={filteredPolicies}
      />
      <main className="flex-1">
        {searchQuery.trim() && filteredPolicies && filteredPolicies.length === 0 ? (
          <div className="container mx-auto px-4 py-16">
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-16">
                <Search className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Nenhum resultado encontrado
                </h3>
                <p className="text-muted-foreground text-center">
                  Não foram encontradas políticas para "{searchQuery}".
                  <br />
                  Tente buscar por outro termo.
                </p>
              </CardContent>
            </Card>
          </div>
        ) : (
          <PolicyContent 
            title={currentPolicy.title}
            subtitle={currentPolicy.subtitle}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

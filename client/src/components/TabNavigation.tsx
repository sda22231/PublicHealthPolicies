import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Heart, Smile, Briefcase, User, Accessibility, Rainbow, Users, UserCog } from "lucide-react";

export interface PolicyTab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  filteredTabs?: PolicyTab[] | null;
}

export const POLICY_TABS: PolicyTab[] = [
  { id: "sus", label: "SUS", icon: <Activity className="h-4 w-4" /> },
  { id: "pnh", label: "PNH", icon: <Heart className="h-4 w-4" /> },
  { id: "pnps", label: "PNPS", icon: <Smile className="h-4 w-4" /> },
  { id: "pnstt", label: "PNSTT", icon: <Briefcase className="h-4 w-4" /> },
  { id: "pnaish", label: "PNAISH", icon: <User className="h-4 w-4" /> },
  { id: "deficiencia", label: "Pessoa com Deficiência", icon: <Accessibility className="h-4 w-4" /> },
  { id: "lgbt", label: "LGBT", icon: <Rainbow className="h-4 w-4" /> },
  { id: "idoso", label: "Estatuto do Idoso", icon: <Users className="h-4 w-4" /> },
  { id: "pessoa-idosa", label: "Pessoa Idosa", icon: <UserCog className="h-4 w-4" /> },
];

export default function TabNavigation({ activeTab, onTabChange, filteredTabs }: TabNavigationProps) {
  const tabsToDisplay = filteredTabs || POLICY_TABS;
  
  return (
    <div className="border-b bg-card">
      <div className="container mx-auto px-4">
        <Tabs value={activeTab} onValueChange={onTabChange}>
          <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-1 bg-transparent p-0">
            {tabsToDisplay.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap"
                data-testid={`button-tab-${tab.id}`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}

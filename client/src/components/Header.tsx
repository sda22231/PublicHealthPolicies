import { Search, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch?.(value);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-primary" data-testid="text-app-title">
              Políticas Públicas em Saúde
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground" data-testid="text-credits">
              Desenvolvido e Idealizado por Marcelo Marques Cerri
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar políticas e termos..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                data-testid="input-search"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

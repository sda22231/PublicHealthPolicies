import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 Políticas Públicas em Saúde
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
              Desenvolvido com <Heart className="h-3 w-3 text-primary fill-primary" /> por Marcelo Marques Cerri
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground">
              Plataforma educacional para o estudo de políticas públicas em enfermagem
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

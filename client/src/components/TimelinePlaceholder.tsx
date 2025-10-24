import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function TimelinePlaceholder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Linha do Tempo - Marcos Históricos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground italic">
            A linha do tempo histórica será adicionada aqui...
          </p>
          <div className="relative pl-8 space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative">
                <div className="absolute left-[-2rem] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                {item < 3 && (
                  <div className="absolute left-[-1.5rem] top-5 h-full w-0.5 bg-border" />
                )}
                <div className="h-20 rounded-md border-2 border-dashed border-muted flex items-center px-4">
                  <span className="text-sm text-muted-foreground">
                    Marco {item} - Ano e descrição
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

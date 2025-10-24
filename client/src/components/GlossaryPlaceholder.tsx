import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function GlossaryPlaceholder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Glossário de Termos-Chave
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground italic">
            Definições de termos importantes serão adicionadas aqui...
          </p>
          <div className="grid gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="p-4 rounded-md border bg-accent/20">
                <div className="space-y-2">
                  <div className="h-5 w-32 bg-primary/20 rounded animate-pulse" />
                  <div className="h-4 bg-muted/40 rounded animate-pulse" />
                  <div className="h-4 w-3/4 bg-muted/40 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

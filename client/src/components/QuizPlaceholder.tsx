import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function QuizPlaceholder() {
  const [showAnswer, setShowAnswer] = useState<number | null>(null);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-primary" />
          Área de Fixação - Questões e Gabaritos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground italic">
            Questões práticas com gabaritos comentados serão adicionadas aqui...
          </p>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-4 rounded-md border bg-card">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-primary">Q{item}.</span>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-muted/40 rounded animate-pulse" />
                      <div className="h-4 w-5/6 bg-muted/40 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="pl-6 space-y-2">
                    {['A', 'B', 'C', 'D'].map((option) => (
                      <div key={option} className="flex items-center gap-2">
                        <span className="text-sm font-medium">{option})</span>
                        <div className="h-3 flex-1 bg-muted/30 rounded animate-pulse" />
                      </div>
                    ))}
                  </div>
                  <div className="pl-6 pt-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setShowAnswer(showAnswer === item ? null : item)}
                      data-testid={`button-show-answer-${item}`}
                    >
                      {showAnswer === item ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Ocultar Gabarito
                        </>
                      ) : (
                        'Ver Gabarito Comentado'
                      )}
                    </Button>
                    {showAnswer === item && (
                      <div className="mt-3 p-3 bg-secondary/10 rounded-md border border-secondary/20">
                        <p className="text-sm font-medium text-secondary-foreground mb-1">
                          Resposta: Opção correta
                        </p>
                        <p className="text-sm text-muted-foreground italic">
                          Gabarito comentado será adicionado aqui...
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

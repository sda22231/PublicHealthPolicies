import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface ContentPlaceholderProps {
  title: string;
  icon?: React.ReactNode;
  description?: string;
}

export default function ContentPlaceholder({ title, icon, description }: ContentPlaceholderProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon || <FileText className="h-5 w-5 text-primary" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground space-y-2">
          <p className="italic">
            {description || "Conteúdo será adicionado em breve..."}
          </p>
          <div className="h-32 rounded-md border-2 border-dashed border-muted flex items-center justify-center">
            <span className="text-sm text-muted-foreground">Espaço reservado para conteúdo</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

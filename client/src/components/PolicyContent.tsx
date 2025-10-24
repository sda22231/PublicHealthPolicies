import ContentPlaceholder from "./ContentPlaceholder";
import TimelinePlaceholder from "./TimelinePlaceholder";
import TablePlaceholder from "./TablePlaceholder";
import GlossaryPlaceholder from "./GlossaryPlaceholder";
import QuizPlaceholder from "./QuizPlaceholder";
import { FileText } from "lucide-react";

interface PolicyContentProps {
  title: string;
  subtitle?: string;
}

export default function PolicyContent({ title, subtitle }: PolicyContentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="text-policy-title">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground" data-testid="text-policy-subtitle">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-8">
        <ContentPlaceholder 
          title="Conteúdo Principal" 
          icon={<FileText className="h-5 w-5 text-primary" />}
          description="O texto principal parafraseado sobre esta política será adicionado aqui..."
        />

        <TablePlaceholder />

        <TimelinePlaceholder />

        <GlossaryPlaceholder />

        <QuizPlaceholder />
      </div>
    </div>
  );
}

import ContentPlaceholder from '../ContentPlaceholder';
import { BookOpen } from 'lucide-react';

export default function ContentPlaceholderExample() {
  return (
    <div className="p-6 space-y-4">
      <ContentPlaceholder 
        title="Introdução" 
        icon={<BookOpen className="h-5 w-5 text-primary" />}
        description="Este espaço será preenchido com o conteúdo introdutório sobre a política."
      />
    </div>
  );
}

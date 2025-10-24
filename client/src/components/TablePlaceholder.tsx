import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table } from "lucide-react";

export default function TablePlaceholder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Table className="h-5 w-5 text-primary" />
          Tabelas Comparativas / Resumos Práticos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground italic">
            Tabelas e resumos comparativos serão adicionados aqui...
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-3 text-left text-sm font-medium">Aspecto</th>
                  <th className="p-3 text-left text-sm font-medium">Descrição</th>
                  <th className="p-3 text-left text-sm font-medium">Referência</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((row) => (
                  <tr key={row} className="border-b">
                    <td className="p-3">
                      <div className="h-6 bg-muted/30 rounded animate-pulse" />
                    </td>
                    <td className="p-3">
                      <div className="h-6 bg-muted/30 rounded animate-pulse" />
                    </td>
                    <td className="p-3">
                      <div className="h-6 bg-muted/30 rounded animate-pulse" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

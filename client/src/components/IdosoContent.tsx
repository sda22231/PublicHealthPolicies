import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, Shield, Users, Heart, Scale, AlertTriangle, BookOpen } from "lucide-react";

export default function IdosoContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="text-policy-title">
          Estatuto do Idoso
        </h2>
        <p className="text-lg text-muted-foreground" data-testid="text-policy-subtitle">
          Legislação fundamental que regulamenta direitos e proteção da pessoa idosa no Brasil
        </p>
      </div>

      <div className="space-y-8">
        {/* Contexto Histórico */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Contexto Histórico e Legal: Construção Recente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              As políticas públicas voltadas para a pessoa idosa no Brasil constituem uma área de intervenção ainda recente:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Política Nacional do Idoso (PNI)</h4>
                <p className="text-sm text-foreground">
                  Instituída em 1994, foi o primeiro marco legal específico para a população idosa.
                </p>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Estatuto do Idoso</h4>
                <p className="text-sm text-foreground">
                  Publicado em 2003, é o documento legal mais abrangente sobre o tema.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground italic text-sm">
              A implementação dessas políticas e legislações é um fato recente que exige que profissionais e sociedade se preparem para lidar com esse novo arcabouço legal.
            </p>
          </CardContent>
        </Card>

        {/* O Estatuto */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              O Estatuto do Idoso (Lei 10.741/2003)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Identificação Legal</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• <strong>Nome e Data:</strong> Lei nº 10.741, de 1º de outubro de 2003</li>
                <li>• <strong>Abrangência:</strong> Regulamenta e garante os direitos de todos os cidadãos acima de 60 anos</li>
                <li>• <strong>Estrutura:</strong> Documento extenso com 118 artigos</li>
              </ul>
            </div>

            <p className="text-foreground">
              O Estatuto é o instrumento maior e potencial para garantir a proteção e regulamentar os direitos da pessoa idosa, consolidando e sistematizando conteúdos produzidos anteriormente.
            </p>
          </CardContent>
        </Card>

        {/* Corresponsabilização */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Corresponsabilização: Obrigações Compartilhadas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2">Artigo 3º - Conceito Central</h4>
              <p className="text-sm text-foreground">
                O artigo trata das obrigações familiares e sociais em relação ao idoso, estabelecendo o conceito de <strong>corresponsabilização</strong> pela proteção e cuidado.
              </p>
            </div>

            <p className="text-foreground mb-3">
              A obrigação de garantir a proteção e assegurar a efetivação dos direitos (vida, educação, saúde, alimentação) é compartilhada por:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-secondary/10 rounded-md border border-secondary/20">
                <h5 className="font-semibold text-secondary text-sm mb-1">1. A Família</h5>
                <p className="text-xs text-foreground">Responsabilidade familiar direta</p>
              </div>

              <div className="p-3 bg-secondary/10 rounded-md border border-secondary/20">
                <h5 className="font-semibold text-secondary text-sm mb-1">2. A Comunidade e a Sociedade</h5>
                <p className="text-xs text-foreground">Responsabilidade social coletiva</p>
              </div>

              <div className="p-3 bg-secondary/10 rounded-md border border-secondary/20">
                <h5 className="font-semibold text-secondary text-sm mb-1">3. O Estado</h5>
                <p className="text-xs text-foreground">Responsabilidade institucional</p>
              </div>

              <div className="p-3 bg-secondary/10 rounded-md border border-secondary/20">
                <h5 className="font-semibold text-secondary text-sm mb-1">Convivência Comunitária</h5>
                <p className="text-xs text-foreground">Garantia de inserção social</p>
              </div>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Base Constitucional</h4>
              <p className="text-sm text-foreground mb-2">
                A Constituição Federal de 1988 (a "Constituição Cidadã") foi o primeiro texto constitucional brasileiro a trazer, de forma expressa, a necessidade de garantir direitos da pessoa idosa.
              </p>
              <p className="text-sm text-foreground">
                <strong>Artigo 230 da CF/88:</strong> Estabelece que a família, a sociedade e o Estado têm o dever de amparar as pessoas idosas, defendendo sua dignidade, bem-estar e garantindo-lhes o direito à vida.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Transição Demográfica */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Cenário Nacional: Transição Demográfica e Epidemiológica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              O debate sobre a legislação do idoso é crucial devido ao cenário de transição demográfica e epidemiológica no Brasil.
            </p>

            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-2">Mudança na Pirâmide Etária</h4>
              <p className="text-sm text-foreground">
                A pirâmide etária vem estreitando sua base, indicando que o país é, e será cada vez mais, composto por pessoas idosas.
              </p>
            </div>

            <p className="text-muted-foreground italic">
              É fundamental que a sociedade e as políticas públicas (incluindo a legislação de garantia de direitos) estejam alinhadas com esse momento de transição.
            </p>
          </CardContent>
        </Card>

        {/* Intersetorialidade */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Transversalidade e Intersetorialidade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              O Estatuto do Idoso não é um documento isolado; ele dialoga com outros instrumentos:
            </p>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Constituição Federal</li>
              <li>• Política Nacional do Idoso</li>
              <li>• Política Nacional de Saúde da Pessoa Idosa</li>
            </ul>

            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">A Intersetorialidade (Artigo 15)</h4>
              <p className="text-sm text-foreground mb-2">
                O Estatuto reforça a necessidade de intersetorialidade:
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• <strong>Conceito:</strong> Não se pode falar em promoção de saúde e qualidade de vida sem ações intersetoriais</li>
                <li>• <strong>Necessidade:</strong> As ações de saúde não dependem somente do setor saúde</li>
                <li>• <strong>Perspectiva:</strong> Políticas transversais abrangendo outras áreas do governo para garantir o conceito ampliado de saúde</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Direito à Saúde */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Acesso e Integralidade do Cuidado à Saúde (Artigo 15)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              O Artigo 15 trata especificamente do direito à saúde, garantindo a atenção integral à saúde do idoso por intermédio do SUS.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h5 className="font-semibold text-primary mb-2">Integralidade</h5>
                <p className="text-sm text-foreground">Garante a atenção integral do cuidado</p>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h5 className="font-semibold text-primary mb-2">Universalidade</h5>
                <p className="text-sm text-foreground">Garante universalidade do acesso</p>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h5 className="font-semibold text-primary mb-2">Equidade</h5>
                <p className="text-sm text-foreground">Substituiu o termo "igualdade" original</p>
              </div>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2">Conjunto de Ações e Serviços</h4>
              <p className="text-sm text-foreground mb-2">
                A atenção integral assegurada compreende ações que cobrem todos os níveis:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="p-2 bg-background rounded border border-accent/20">
                  <p className="font-medium text-foreground text-center">Prevenção</p>
                </div>
                <div className="p-2 bg-background rounded border border-accent/20">
                  <p className="font-medium text-foreground text-center">Promoção</p>
                </div>
                <div className="p-2 bg-background rounded border border-accent/20">
                  <p className="font-medium text-foreground text-center">Proteção</p>
                </div>
                <div className="p-2 bg-background rounded border border-accent/20">
                  <p className="font-medium text-foreground text-center">Recuperação</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Direitos e Proteção na Assistência</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Direito a Acompanhante:</strong> O idoso, mesmo internado ou em observação, tem direito a um acompanhante em tempo integral</li>
                <li>• <strong>Autonomia:</strong> O idoso no pleno domínio de suas faculdades mentais tem direito de optar pelo tratamento que lhe for mais favorável</li>
                <li>• <strong>Proteção:</strong> É vedado exigir o comparecimento do idoso enfermo a órgãos públicos</li>
                <li>• <strong>Consonância com PNH:</strong> Em consonância com a Política Nacional de Humanização (visita aberta e acompanhante)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Marcos Legais Anteriores */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              Marcos Legais Anteriores ao Estatuto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              O Estatuto do Idoso (2003) sistematiza e potencializa o que foi construído anteriormente:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Política Nacional do Idoso (PNI) - 1994</h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• <strong>Lei:</strong> Lei nº 8.842 de 1994</li>
                  <li>• <strong>Regulamentação:</strong> Foi regulamentada em 1996, com a criação do Conselho Nacional do Idoso</li>
                  <li>• <strong>Importância:</strong> Contribui para melhor compreensão da concepção de saúde das pessoas idosas</li>
                  <li>• <strong>Foco Estrutural:</strong> Trata da descentralização das ações, envolvendo todos os entes federados em parceria com entidades governamentais e não governamentais</li>
                  <li>• <strong>Contexto Histórico:</strong> A ênfase na descentralização em 1994 dialoga com o forte período de municipalização nos anos 1990 e o lançamento do Programa de Saúde da Família (PSF)</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Política Nacional de Saúde da Pessoa Idosa (PNSPPI) - 1999</h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• <strong>Ano:</strong> Lançada em 1999</li>
                  <li>• <strong>Órgão:</strong> Lançada pelo Ministério da Saúde</li>
                  <li>• <strong>Conteúdo:</strong> Estabelece diretrizes essenciais que norteiam a definição e redefinição de programas, projetos e planos no âmbito da Saúde</li>
                  <li>• <strong>Objetivo:</strong> Documento transversal que busca garantir a atenção integral à população em processo de envelhecimento</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Proteção e Sanções */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Medidas de Proteção e Sanções por Violência
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              O Estatuto do Idoso é um instrumento de proteção, mas também trata dos deveres e das sanções relacionadas à violação de direitos (Artigos 96 a 106).
            </p>

            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-2">Notificação Compulsória da Violência</h4>
              <p className="text-sm text-foreground mb-3">
                Os casos de suspeita ou confirmação de violência praticada contra idosos serão objeto de notificação compulsória.
              </p>

              <ul className="space-y-2 text-sm text-foreground">
                <li>• <strong>Obrigação Legal:</strong> Serviços de Saúde (públicos e privados) são obrigados a notificar a Autoridade Sanitária e comunicar os fatos aos órgãos enumerados em lei</li>
                <li>• <strong>Desde quando:</strong> A notificação da violência tornou-se agravo de notificação compulsória desde 2011</li>
              </ul>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2">Tipos de Violência Previstas</h4>
              <p className="text-sm text-foreground mb-2">
                O Estatuto prevê sanções específicas para diversos tipos de lesão ou violência:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <div className="p-2 bg-background rounded border">
                  <p className="text-center font-medium text-foreground">Sexual</p>
                </div>
                <div className="p-2 bg-background rounded border">
                  <p className="text-center font-medium text-foreground">Financeira</p>
                </div>
                <div className="p-2 bg-background rounded border">
                  <p className="text-center font-medium text-foreground">Psicológica</p>
                </div>
                <div className="p-2 bg-background rounded border">
                  <p className="text-center font-medium text-foreground">Medicamentosa</p>
                </div>
                <div className="p-2 bg-background rounded border">
                  <p className="text-center font-medium text-foreground">Cárcere Privado</p>
                </div>
                <div className="p-2 bg-background rounded border">
                  <p className="text-center font-medium text-foreground">Abandono</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resumo Prático */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Resumo Prático
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-primary/20 p-3 text-left font-semibold">Tópico</th>
                    <th className="border border-primary/20 p-3 text-left font-semibold">Conceito Central</th>
                    <th className="border border-primary/20 p-3 text-left font-semibold">Termos-Chave</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-muted p-3 font-medium">Estatuto do Idoso</td>
                    <td className="border border-muted p-3">Lei que consolida e regulamenta direitos de cidadãos com 60 anos ou mais</td>
                    <td className="border border-muted p-3 text-muted-foreground">Lei 10.741/2003, 118 artigos, Documento transversal</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-muted p-3 font-medium">Corresponsabilização</td>
                    <td className="border border-muted p-3">Obrigação compartilhada de proteção e amparo</td>
                    <td className="border border-muted p-3 text-muted-foreground">Família, Sociedade, Comunidade e Estado</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-3 font-medium">Direito à Saúde (Art. 15)</td>
                    <td className="border border-muted p-3">Atenção Integral e universal via SUS</td>
                    <td className="border border-muted p-3 text-muted-foreground">Integralidade, Universalidade, Equidade</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-muted p-3 font-medium">Rede de Políticas</td>
                    <td className="border border-muted p-3">Necessidade de diálogo e ações conjuntas</td>
                    <td className="border border-muted p-3 text-muted-foreground">Transversalidade, Intersetorialidade</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-3 font-medium">PNI (1994)</td>
                    <td className="border border-muted p-3">Política que marcou a pauta do idoso e focou na gestão</td>
                    <td className="border border-muted p-3 text-muted-foreground">Lei 8.842/94, Descentralização das ações</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-muted p-3 font-medium">PNSPPI (1999)</td>
                    <td className="border border-muted p-3">Política específica de saúde do Ministério da Saúde</td>
                    <td className="border border-muted p-3 text-muted-foreground">Diretrizes essenciais para programas e projetos</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-3 font-medium">Proteção e Sanções</td>
                    <td className="border border-muted p-3">Regulamenta punições para violação de direitos</td>
                    <td className="border border-muted p-3 text-muted-foreground">Notificação Compulsória, Violência (sexual, financeira, abandono)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

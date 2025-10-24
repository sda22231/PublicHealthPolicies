import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Heart, Scale, Users, Building2, Network, Target, AlertTriangle, BookOpen } from "lucide-react";

export default function SUSContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="text-policy-title">
          Sistema Único de Saúde (SUS)
        </h2>
        <p className="text-lg text-muted-foreground" data-testid="text-policy-subtitle">
          Fundamentos, estrutura e princípios do sistema público de saúde brasileiro
        </p>
      </div>

      <div className="space-y-8">
        {/* Base Legal */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              Base Legal e Fundamentos do SUS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              A compreensão do Sistema Único de Saúde (SUS) fundamenta-se em um tripé jurídico essencial:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">1. Constituição Federal de 1988 (CF/88)</h4>
                <p className="text-sm text-foreground">
                  Documento que estabeleceu a saúde como direito de todos e dever do Estado, sendo o antecedente imediato do SUS.
                </p>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">2. Lei Orgânica da Saúde nº 8.080/90</h4>
                <p className="text-sm text-foreground">
                  A primeira e mais abrangente Lei Orgânica, responsável por regulamentar e operacionalizar o SUS.
                </p>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">3. Lei Orgânica da Saúde nº 8.142/90</h4>
                <p className="text-sm text-foreground">
                  A segunda Lei Orgânica, que regulamenta a participação comunitária e as transferências intergovernamentais de recursos financeiros.
                </p>
              </div>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <p className="text-sm font-medium text-foreground">
                <strong>Importante:</strong> As Leis 8.080/90 e 8.142/90 são as únicas duas leis do Sistema Único de Saúde e são extremamente cobradas em concursos públicos.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Antecedentes - INAMPS */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Antecedentes do SUS: A Era INAMPS (Pré-SUS)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              Antes da criação do SUS, nas décadas de 1970 e 1980, vigorava o INAMPS (Instituto Nacional de Assistência Médica e Previdência Social), conhecido como o sistema "pré-SUS".
            </p>

            <div>
              <h4 className="font-semibold text-lg mb-3">Características do INAMPS</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                  <h5 className="font-semibold text-destructive mb-2">Foco na Previdência Social e Privilégio</h5>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• <strong>Atendimento Privilegiado:</strong> O sistema beneficiava quem contribuía com a Previdência Social</li>
                    <li>• <strong>Público-alvo:</strong> Trabalhadores formais (carteira assinada) e seus dependentes</li>
                    <li>• <strong>Violação da Equidade:</strong> Esse privilégio contraria o princípio da Equidade do SUS</li>
                  </ul>
                </div>

                <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                  <h5 className="font-semibold text-destructive mb-2">Atenção Hospitalocêntrica</h5>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• <strong>Centralização:</strong> A atenção era focada nos hospitais</li>
                    <li>• <strong>Modelo Curativo:</strong> Predominava o tratamento em vez da prevenção</li>
                    <li>• <strong>Contraste com SUS:</strong> O SUS é preventivo e curativo, atende o indivíduo e o coletivo</li>
                  </ul>
                </div>

                <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                  <h5 className="font-semibold text-destructive mb-2">Sistema Centralizado</h5>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• As ações e serviços eram centralizados na esfera federal (Ministério da Saúde)</li>
                    <li>• <strong>Diferença do SUS:</strong> O SUS distribui responsabilidades entre federal, estadual, distrital e municipal</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 8ª Conferência Nacional de Saúde */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Marco Histórico: 8ª Conferência Nacional de Saúde (1986)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              Em 1986, ocorreu um dos eventos mais importantes para a saúde pública brasileira: a Oitava Conferência Nacional de Saúde.
            </p>

            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">O Movimento Sanitário</h4>
              <p className="text-sm text-foreground mb-2">
                A conferência foi palco para o Movimento Sanitário (presidido por Sérgio Arouca), que defendia que:
              </p>
              <ul className="space-y-1 text-sm text-foreground">
                <li>• A saúde é direito de todas as pessoas</li>
                <li>• É dever do Estado garantir esse direito</li>
                <li>• Deve haver participação de diversos segmentos da sociedade</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">O Embrião do SUS: SUDS</h4>
              <p className="text-sm text-foreground mb-3">
                Na conferência, surgiu o SUDS (Sistema Unificado e Descentralizado de Saúde), considerado o embrião do SUS:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Unificação:</strong> Unia ações de saúde</li>
                <li>• <strong>Descentralização:</strong> Começava a distribuir serviços para outras esferas de governo</li>
                <li>• <strong>Transição:</strong> Início da mudança do modelo centralizado do INAMPS</li>
              </ul>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2">Princípios Orientadores do Futuro SUS</h4>
              <p className="text-sm text-foreground mb-2">
                O debate estabeleceu princípios que deveriam guiar o sistema de saúde:
              </p>
              <ul className="space-y-1 text-sm text-foreground">
                <li>• <strong>Para Todos:</strong> Não apenas trabalhadores formais</li>
                <li>• <strong>Igualitário:</strong> Sem privilégios ou restrições</li>
                <li>• <strong>Integral:</strong> Atendimento em todos os níveis de assistência</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Estabelecimento Constitucional */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Estabelecimento Constitucional do SUS (1988)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              O SUS foi oficialmente estabelecido com a promulgação da Constituição Federal de 1988, considerada a lei suprema do país.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Dever do Estado</h4>
                <p className="text-sm text-foreground">
                  A CF/88 determinou que é dever do Estado garantir saúde a toda a população, embora desafios práticos possam existir.
                </p>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Localização na Constituição</h4>
                <p className="text-sm text-foreground">
                  Título VIII, Capítulo II, Seção II, abrangendo os artigos 196 a 200.
                </p>
              </div>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <p className="text-sm font-medium text-foreground">
                <strong>Importante:</strong> O SUS foi <strong>estabelecido</strong> na Constituição Federal (1988), mas foi <strong>regulamentado</strong> pela Lei 8.080/90. É vital manter o foco nessa distinção em termos de legislação.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Estrutura e Organização */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Estrutura e Organização do SUS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              A organização do SUS é pautada pela descentralização e pela formação de uma rede complexa.
            </p>

            <div>
              <h4 className="font-semibold text-lg mb-3">Descentralização</h4>
              <p className="text-sm text-foreground mb-3">
                O SUS é um sistema descentralizado:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Processo:</strong> Ações e serviços antes centralizados foram distribuídos entre Federal, Estadual, Distrito Federal e Municípios</li>
                <li>• <strong>Aplicação:</strong> Os municípios, por estarem mais próximos do cidadão, assumem a responsabilidade pela prestação de serviços</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">Rede Regionalizada e Hierarquizada</h4>
              <div className="space-y-3">
                <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                  <h5 className="font-semibold text-secondary mb-2">Regionalização</h5>
                  <ul className="space-y-1 text-sm text-foreground">
                    <li>• Eixo estruturante do SUS, altamente enfatizado na legislação (NOAS)</li>
                    <li>• <strong>Função:</strong> Garantir o acesso e a acessibilidade (palavra-chave) a todas as pessoas</li>
                    <li>• A rede de atendimento é montada para facilitar esse acesso</li>
                  </ul>
                </div>

                <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                  <h5 className="font-semibold text-secondary mb-2">Hierarquização</h5>
                  <ul className="space-y-1 text-sm text-foreground">
                    <li>• Composição de várias unidades interligadas, cada uma com tarefas específicas</li>
                    <li>• <strong>Níveis:</strong> Ministério da Saúde (Federal), Secretarias Estaduais/DF e Secretarias Municipais</li>
                    <li>• <strong>Acesso do Cidadão:</strong> O usuário geralmente entra pela rede Municipal (nível primário) e caminha pelo SUS graças à rede interligada</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2">Integralidade na Rede</h4>
              <p className="text-sm text-foreground mb-2">
                A rede regionalizada e hierarquizada proporciona ao cidadão a integralidade na atenção:
              </p>
              <ul className="space-y-1 text-sm text-foreground">
                <li>• <strong>Acesso em todos os níveis:</strong> Não se restringe apenas ao nível primário (município)</li>
                <li>• <strong>Universalidade de Usuários:</strong> Qualquer cidadão em território brasileiro (incluindo estrangeiros) tem direito a atenção integral</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Princípios Basilares */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Princípios Basilares e Estruturantes do SUS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              Os princípios basilares (fundamentais ou estruturantes) do SUS são a base ideológica do sistema: <strong>Universalidade, Equidade e Integralidade</strong>.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">A. Universalidade</h4>
                <p className="text-sm text-foreground mb-2">
                  O princípio da Universalidade significa que o SUS é para todos.
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• <strong>Definição:</strong> Garante que todos os cidadãos brasileiros e qualquer pessoa em território nacional tenham acesso ao sistema de saúde</li>
                  <li>• <strong>Abrangência do Acesso:</strong> Deve ser garantido a todo tipo de assistência, desde a Atenção Básica até procedimentos de alta complexidade (ex: transplante de órgãos)</li>
                </ul>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">B. Equidade</h4>
                <p className="text-sm text-foreground mb-2">
                  A Equidade exige que situações desiguais devam ser tratadas desigualmente.
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• <strong>Aplicação:</strong> O acesso, embora universal, deve ocorrer de acordo com a necessidade específica do indivíduo</li>
                  <li>• <strong>Objetivo:</strong> Oferecer mais a quem precisa de mais, sem preconceito, privilégio ou restrições</li>
                  <li>• <strong>Distribuição de Recursos:</strong> O financiamento e os recursos devem ser direcionados onde há maior necessidade</li>
                </ul>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">C. Integralidade</h4>
                <p className="text-sm text-foreground mb-2">
                  O princípio da Integralidade refere-se a um atendimento integral em todos os níveis de assistência.
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• <strong>Abrangência do Cuidado:</strong> O cuidado deve ser tanto preventivo quanto curativo</li>
                  <li>• <strong>Foco Duplo:</strong> O tratamento deve ser dirigido ao indivíduo e, simultaneamente, à coletividade</li>
                  <li>• <strong>Conceito de Saúde (OMS):</strong> O SUS incorpora o conceito da OMS: saúde como completo bem-estar físico, mental e social, não apenas ausência de doenças</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resumo Prático */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Resumo Prático para Fixação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-primary/20 p-3 text-left font-semibold text-foreground">Tópico</th>
                    <th className="border border-primary/20 p-3 text-left font-semibold text-foreground">Conceito Central</th>
                    <th className="border border-primary/20 p-3 text-left font-semibold text-foreground">Termos-Chave</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-muted p-3 font-medium text-foreground">Antecedentes (INAMPS)</td>
                    <td className="border border-muted p-3 text-foreground">Privilegiava trabalhadores formais. Era curativo e centralizado na União.</td>
                    <td className="border border-muted p-3 text-muted-foreground">Hospitalocêntrico, Curativo, Centralizado, Previdência Social</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-muted p-3 font-medium text-foreground">8ª Conferência (1986)</td>
                    <td className="border border-muted p-3 text-foreground">Estabeleceu o direito à saúde como dever do Estado. Gerou o SUDS</td>
                    <td className="border border-muted p-3 text-muted-foreground">Movimento Sanitário, SUDS, Embrião do SUS</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-3 font-medium text-foreground">Base Legal (Tripé)</td>
                    <td className="border border-muted p-3 text-foreground">CF/88 (Estabelece), Lei 8.080/90 (Regulamenta), Lei 8.142/90 (Participação e Financiamento)</td>
                    <td className="border border-muted p-3 text-muted-foreground">CF/88, Lei 8.080/90, Lei 8.142/90</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-muted p-3 font-medium text-foreground">Estrutura do SUS</td>
                    <td className="border border-muted p-3 text-foreground">Distribuição de responsabilidades entre as três esferas de governo</td>
                    <td className="border border-muted p-3 text-muted-foreground">Descentralizado</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-3 font-medium text-foreground">Organização da Rede</td>
                    <td className="border border-muted p-3 text-foreground">Necessidade de facilitar o acesso em todos os níveis de complexidade</td>
                    <td className="border border-muted p-3 text-muted-foreground">Regionalizada e Hierarquizada, Acessibilidade</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-muted p-3 font-medium text-foreground">Princípios Basilares</td>
                    <td className="border border-muted p-3 text-foreground">O SUS é para todos, trata as diferenças e oferece cuidado completo</td>
                    <td className="border border-muted p-3 text-muted-foreground">Universalidade, Equidade, Integralidade</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-3 font-medium text-foreground">Integralidade</td>
                    <td className="border border-muted p-3 text-foreground">Abrange todos os níveis de assistência, focando na prevenção e na cura</td>
                    <td className="border border-muted p-3 text-muted-foreground">Preventivo e Curativo, Individual e Coletivo</td>
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

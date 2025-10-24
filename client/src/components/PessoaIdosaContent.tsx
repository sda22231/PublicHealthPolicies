import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, Clock, BookOpen, AlertCircle, Users, TrendingUp } from "lucide-react";

export default function PessoaIdosaContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="text-policy-title">
          Políticas da Pessoa Idosa
        </h2>
        <p className="text-lg text-muted-foreground" data-testid="text-policy-subtitle">
          Políticas públicas para atenção à saúde e envelhecimento ativo
        </p>
      </div>

      <div className="space-y-8">
        {/* Contexto Demográfico */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Contexto Demográfico e Urgência do Envelhecimento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Cenário Global e Nacional</h3>
              <p className="text-foreground mb-3">
                O envelhecimento populacional é um fenômeno acelerado e tema urgente para a saúde pública. De acordo com a Organização Mundial da Saúde (OMS), o número de pessoas com idade superior a 60 anos atingirá <strong>2 bilhões até 2050</strong>, representando que uma em cada cinco pessoas no mundo será idosa.
              </p>
              <p className="text-foreground mb-3">
                No Brasil, em 2016, o país já possuía a <strong>quinta maior população idosa do mundo</strong>, segundo o Ministério da Saúde.
              </p>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2">Projeções Importantes</h4>
              <ul className="space-y-2 text-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>2030:</strong> O número de idosos ultrapassará o total de crianças na faixa etária entre 0 e 14 anos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>2025:</strong> O Brasil ocupará o sexto lugar em contingente de idosos, alcançando 32 milhões de pessoas com 60 anos ou mais</span>
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground italic">
              Essa mudança na pirâmide etária exige que o país e os serviços de saúde se preparem para atender essa população crescente, presente na Atenção Primária, Secundária e Terciária.
            </p>
          </CardContent>
        </Card>

        {/* Perfil da População Idosa */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Perfil da População Idosa e Vulnerabilidade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              Segundo dados da Pesquisa Nacional por Amostra de Domicílios (PNAD), o Brasil possui aproximadamente <strong>23 milhões de idosos</strong>, representando cerca de <strong>11,28% da população total</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Idosos Independentes (75%)</h4>
                <p className="text-sm text-foreground">
                  Cerca de 75% dos idosos são independentes para o autocuidado, conseguindo manter uma vida ativa, caracterizando o envelhecimento ativo.
                </p>
              </div>

              <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-2">Idosos Vulneráveis (25%)</h4>
                <p className="text-sm text-foreground mb-2">
                  25% da população possui uma ou mais incapacidades para realizar atividades simples do dia a dia (AVDs), como se vestir ou calçar um sapato.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• 1% reside em ILPIs (Instituição de Longa Permanência)</li>
                  <li>• 4% estão acamados</li>
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground italic text-sm">
              O grupo mais frágil, com síndromes geriátricas ou deficit cognitivo, é priorizado em serviços especializados como geriatria na atenção terciária.
            </p>
          </CardContent>
        </Card>

        {/* Linha do Tempo - Marcos Legais */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Linha do Tempo - Marcos Legais e Políticas Nacionais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              É fundamental conhecer a legislação que garante os direitos da população idosa para assegurar e ampliar o acesso aos serviços.
            </p>
            
            <div className="relative pl-8 space-y-6">
              <div className="relative">
                <div className="absolute left-[-2rem] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="absolute left-[-1.5rem] top-5 h-full w-0.5 bg-border" />
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary">1994</span>
                    <span className="font-semibold text-foreground">Política Nacional do Idoso (PNI)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Criada após debates e conferências, foi fundamental para garantir a pauta do idoso no âmbito das políticas públicas.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[-2rem] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="absolute left-[-1.5rem] top-5 h-full w-0.5 bg-border" />
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary">1999</span>
                    <span className="font-semibold text-foreground">Política Nacional de Saúde do Idoso (PNSI)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Uma política nacional específica que trata da saúde do idoso, contendo diretrizes sobre o atendimento.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[-2rem] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="absolute left-[-1.5rem] top-5 h-full w-0.5 bg-border" />
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary">2002</span>
                    <span className="font-semibold text-foreground">Plano Internacional para o Envelhecimento</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pacto da Organização das Nações Unidas (ONU) junto ao Brasil para pensar políticas públicas em nível globalizado e macro.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[-2rem] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="absolute left-[-1.5rem] top-5 h-full w-0.5 bg-border" />
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary">2003</span>
                    <span className="font-semibold text-foreground">Estatuto do Idoso</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Conquistou muitas garantias e é crucial para que os profissionais se apropriem da legislação em favor dessa população.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[-2rem] top-1 h-4 w-4 rounded-full border-2 border-secondary bg-background" />
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-secondary">2006</span>
                    <span className="font-semibold text-foreground">Portaria 2.528/2006 - PNSPI</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Aprovou a <strong>Política Nacional de Saúde da Pessoa Idosa (PNSPI)</strong>.
                  </p>
                  <div className="bg-secondary/10 p-3 rounded-md border border-secondary/20">
                    <p className="text-sm font-medium text-foreground">
                      Finalidade: Recuperar, manter e promover a autonomia e a independência do idoso, garantindo atenção adequada e digna em consonância com os princípios e diretrizes do SUS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Paradigma Central */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Paradigma Central: Capacidade Funcional
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              A PNSPI possui dois grandes eixos orientadores, ambos trabalhando o paradigma da <strong>capacidade funcional da pessoa idosa</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">1. Idosos Independentes</h4>
                <p className="text-sm text-foreground">
                  Aqueles que ainda possuem autonomia. O foco deve ser a <strong>promoção e manutenção</strong> do envelhecimento ativo e saudável.
                </p>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">2. Idosos em Vulnerabilidade</h4>
                <p className="text-sm text-foreground">
                  Aqueles em situações mais frágeis (saúde ou social). O foco deve ser a <strong>recuperação e o cuidado</strong>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Diretrizes da PNSPI */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Diretrizes da Política Nacional de Saúde da Pessoa Idosa
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">1. Promoção do Envelhecimento Ativo e Saudável</h4>
              <p className="text-sm text-muted-foreground">
                Desmistificar a ideia de que o idoso é "velho" ou não tem mais o que contribuir. Romper com o preconceito e promover um envelhecimento ativo, pois é possível envelhecer com saúde.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">2. Atenção Integral e Integrada</h4>
              <p className="text-sm text-muted-foreground">
                A atenção deve ser integral e integrada, reconhecendo as especificidades e peculiaridades da pessoa idosa.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">3. Intersetorialidade e Integralidade</h4>
              <p className="text-sm text-muted-foreground mb-2">
                O estímulo a ações intersetoriais é crucial. A saúde do idoso abrange desde habitação e assistência social até educação.
              </p>
              <div className="bg-accent/20 p-3 rounded-md border border-accent/30">
                <p className="text-xs text-foreground mb-1"><strong>Intersetorialidade:</strong> Políticas públicas (saúde, assistência, educação, previdência) devem funcionar de forma intersetorial.</p>
                <p className="text-xs text-foreground"><strong>Integralidade:</strong> Só é possível com trabalho em rede, desde Atenção Primária até Terciária, com comunicação adequada e referências/contrarreferências.</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">4. Participação e Controle Social</h4>
              <p className="text-sm text-muted-foreground">
                Estimular a participação e o fortalecimento do controle social. O idoso é o sujeito principal da ação e deve ter voz, vez e ser respeitado em seu desejo.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">5. Qualificação Profissional e Educação Permanente</h4>
              <p className="text-sm text-muted-foreground">
                O idoso demanda atenção cuidadosa e escuta qualificada. A formação e educação permanente dos profissionais de saúde do SUS na área da pessoa idosa são essenciais.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">6. Estímulo à Pesquisa</h4>
              <p className="text-sm text-muted-foreground">
                Há pouca pesquisa na área do envelhecimento. É crucial estimular e fomentar o estudo nessa área, superando o estigma.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Ações Estratégicas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Ações Estratégicas e Ferramentas do Ministério da Saúde
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Linhas de Cuidado e Modelos de Atenção</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Atenção integrada às Redes de Atenção à Saúde (RAS), ordenada pela Atenção Básica</li>
                <li>• Foco no idoso frágil e nas síndromes geriátricas (incapacidade cognitiva, instabilidade postural, imobilidade, incontinência urinária, iatrogenia)</li>
                <li>• Contempla cuidadores de longa duração, centros-dia, Atenção Domiciliar (AD) e Cuidados Continuados do SUAS</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Ferramentas e Recursos Disponíveis</h4>
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded-md">
                  <p className="font-medium text-sm text-foreground">Sisap Idoso</p>
                  <p className="text-xs text-muted-foreground">Sistema de Indicadores de Saúde e Acompanhamento de Políticas do Idoso - consulta online de indicadores nos níveis federal, estadual e municipal.</p>
                </div>

                <div className="p-3 bg-muted/30 rounded-md">
                  <p className="font-medium text-sm text-foreground">ELSI-Brasil</p>
                  <p className="text-xs text-muted-foreground">Estudo de coorte com ~15 mil pessoas com 50+ anos, investigando condições crônicas, capacidade funcional e uso de serviços.</p>
                </div>

                <div className="p-3 bg-muted/30 rounded-md">
                  <p className="font-medium text-sm text-foreground">Caderneta de Saúde da Pessoa Idosa</p>
                  <p className="text-xs text-muted-foreground">Mais de 16 milhões distribuídas (2007-2012) para qualificar a Atenção Primária na identificação do idoso frágil.</p>
                </div>

                <div className="p-3 bg-muted/30 rounded-md">
                  <p className="font-medium text-sm text-foreground">Caderno 19 da Atenção Básica</p>
                  <p className="text-xs text-muted-foreground">"Envelhecimento e Saúde da Pessoa Idosa" - foco na Atenção Primária com protocolos clínicos funcionais.</p>
                </div>

                <div className="p-3 bg-muted/30 rounded-md">
                  <p className="font-medium text-sm text-foreground">Oficinas e Capacitações EAD</p>
                  <p className="text-xs text-muted-foreground">Qualificação profissional em modalidade EAD, oficinas de prevenção de quedas e violência contra o idoso.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Desafios */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Desafios e o Papel do Setor Saúde
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Ações Fundamentais na Atenção Primária</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Vigilância em Saúde:</strong> Qualificar dados, integrar informação e identificar fatores de risco</li>
                <li>• <strong>Prevenção e Promoção:</strong> Campo privilegiado da Atenção Básica</li>
                <li>• <strong>Cuidado Integral:</strong> Atenção interdisciplinar e multiprofissional à vítima de violência ou negligência</li>
              </ul>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Mudança Cultural Necessária</h4>
              <p className="text-sm text-foreground mb-2">
                É necessário mudar o paradigma cultural e rever o conceito de envelhecimento, evitando forma pejorativa de tratar a pessoa idosa.
              </p>
              <p className="text-sm font-medium text-foreground">
                O principal desafio é conseguir <strong>maior expectativa de vida com qualidade</strong>. Viver mais não significa viver melhor.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Responsabilidade Compartilhada</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Para garantir envelhecimento ativo e saudável e manutenção da capacidade funcional, a responsabilidade é de todos:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm">
                <li className="flex items-center gap-2 text-foreground">
                  <span className="text-primary">✓</span> Poder público (Ministério, Secretarias)
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="text-primary">✓</span> Sociedade
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="text-primary">✓</span> Família
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="text-primary">✓</span> Próprio sujeito (o idoso)
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, Network, Target, Scale, Heart, Compass, Lightbulb, Wrench, Share2, Shield } from "lucide-react";

export default function PNPSContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="text-policy-title">
          Política Nacional de Promoção da Saúde (PNPS)
        </h2>
        <p className="text-lg text-muted-foreground" data-testid="text-policy-subtitle">
          Uma das políticas mais complexas e transversais do SUS, focada na geração de qualidade de vida
        </p>
      </div>

      <div className="space-y-8">
        {/* Base Legal e Conceito Ampliado */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Base Legal e Conceito Ampliado de Saúde
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Fundamentação Legal</h3>
              <p className="text-foreground mb-3">
                A Política Nacional de Promoção da Saúde (PNPS) representa uma das políticas mais abrangentes e transversais dentro do Sistema Único de Saúde (SUS). Ela está consolidada na <strong>Portaria de Consolidação nº 2 de 2017</strong> e tem como propósito central a geração de qualidade de vida mediante ações que precedem o processo de adoecimento.
              </p>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-3">Conceito Ampliado de Promoção da Saúde</h4>
              <div className="space-y-2 text-foreground">
                <p className="mb-2">
                  A PNPS fundamenta-se no <strong>Conceito Ampliado de Saúde</strong>, que transcende a simples ausência de enfermidades:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Definição:</strong> Saúde não é meramente a inexistência de doenças, mas um estado de completo bem-estar físico, mental e social</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Produzir Saúde:</strong> Conjunto de estratégias e mecanismos para criar e desenvolver saúde de forma ativa</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Qualidade de Vida:</strong> Gerar saúde significa proporcionar qualidade de vida, oferecendo condições para que as pessoas possam viver de maneira tranquila e saudável</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Determinantes Sociais:</strong> Engloba fatores como moradia, habitação, lazer e todos os elementos presentes no Artigo 3º da Lei 8.080/90</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Nível de Atuação:</strong> Foco em ações de prevenção primária e macuação, isto é, intervenções realizadas antes que o adoecimento se estabeleça</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground italic text-sm">
              A PNPS representa uma mudança paradigmática ao deslocar o foco do modelo biomédico curativista para um modelo que valoriza a criação de condições para uma vida saudável.
            </p>
          </CardContent>
        </Card>

        {/* Intersetorialidade */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5 text-primary" />
              Intersetorialidade, Intrassetorialidade e Transversalidade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-4">
              A PNPS é fundamentalmente uma política intersetorial, exigindo articulação e cooperação em múltiplos níveis. O trabalho efetivo da PNPS demanda integração em duas dimensões essenciais:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-3">Intersetorialidade</h4>
                <p className="text-sm text-foreground mb-2">
                  <strong>Definição:</strong> Articulação e cooperação do setor Saúde com outros setores que não pertencem à área da saúde.
                </p>
                <div className="bg-background/50 p-2 rounded text-xs mt-2">
                  <p className="font-medium mb-1">Exemplos práticos:</p>
                  <ul className="space-y-1">
                    <li>• Saúde trabalhando em conjunto com a Educação</li>
                    <li>• Articulação entre Saúde e Assistência Social</li>
                    <li>• Colaboração com setores de Habitação, Transporte e Meio Ambiente</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-3">Intrassetorialidade</h4>
                <p className="text-sm text-foreground mb-2">
                  <strong>Definição:</strong> Ação conjunta e articulada entre os diferentes níveis e serviços dentro do próprio setor saúde.
                </p>
                <div className="bg-background/50 p-2 rounded text-xs mt-2">
                  <p className="font-medium mb-1">Exemplos práticos:</p>
                  <ul className="space-y-1">
                    <li>• Articulação entre Atenção Básica (AB) e Urgência/Emergência (UE)</li>
                    <li>• Integração entre diferentes níveis de atenção</li>
                    <li>• Coordenação entre programas de saúde diversos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Share2 className="h-4 w-4 text-accent-foreground" />
                Característica Transversal da PNPS
              </h4>
              <p className="text-sm text-foreground">
                A política é intrinsecamente <strong>transversal</strong>, o que significa que ela perpassa toda a Rede de Atenção à Saúde (RAS) e todas as demais políticas públicas, incluindo a Seguridade Social e as instâncias de Controle Social. Esta característica garante que a promoção da saúde seja um eixo orientador em todas as ações do sistema.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Objetivo Geral */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              O Objetivo Geral da PNPS: Foco na Equidade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              O objetivo da PNPS é amplo e abrangente, com um foco permanente e central no princípio da <strong>Equidade</strong>.
            </p>

            <div className="bg-primary/15 p-5 rounded-lg border-l-4 border-primary">
              <h4 className="font-bold text-lg text-primary mb-3">Objetivo Geral</h4>
              <p className="text-foreground text-base">
                <strong>Promover a Equidade e a melhoria das condições e modos de viver da população</strong>
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Para Alcançar Este Objetivo, a PNPS Deve:</h4>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Ampliar a Potencialidade</h5>
                    <p className="text-sm text-muted-foreground">
                      Ampliar a potencialidade da saúde individual e coletiva, fortalecendo capacidades e recursos comunitários
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Reduzir Vulnerabilidades e Riscos</h5>
                    <p className="text-sm text-muted-foreground">
                      Reduzir vulnerabilidades e riscos à saúde decorrentes dos determinantes sociais, econômicos, políticos, culturais e ambientais
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground italic text-sm">
              A PNPS reconhece que a saúde é influenciada por múltiplos fatores e que a promoção efetiva da saúde requer ações coordenadas que abordem esses diversos determinantes.
            </p>
          </CardContent>
        </Card>

        {/* Equidade vs Igualdade */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              Diferenciação Crítica: Equidade vs. Igualdade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              A <strong>Equidade</strong> é um princípio fundamental e está explicitamente colocada no objetivo geral da PNPS. Compreender a distinção entre Equidade e Igualdade é essencial para a implementação adequada da política.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary/10 rounded-md border-l-4 border-primary">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <Scale className="h-4 w-4" />
                  Equidade
                </h4>
                <div className="space-y-2 text-sm text-foreground">
                  <p className="mb-2"><strong>Conceito na PNPS:</strong></p>
                  <p className="mb-3">
                    Envolve a <strong>distribuição igualitária de oportunidades</strong>, considerando sempre as especificidades dos grupos e dos indivíduos.
                  </p>
                  <div className="bg-background/50 p-3 rounded">
                    <p className="font-semibold mb-2">Princípio Fundamental:</p>
                    <p className="italic">
                      "Atendimento desigual para os desiguais"
                    </p>
                  </div>
                  <p className="mt-3">
                    Exige um olhar diferenciado para os diferentes, reconhecendo necessidades específicas e oferecendo suporte proporcional às vulnerabilidades.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border-l-4 border-secondary">
                <h4 className="font-bold text-secondary mb-3">Igualdade</h4>
                <div className="space-y-2 text-sm text-foreground">
                  <p className="mb-2"><strong>Conceito:</strong></p>
                  <p className="mb-3">
                    Tratamento uniforme para todos, sem considerar diferenças e necessidades específicas.
                  </p>
                  <div className="bg-background/50 p-3 rounded">
                    <p className="font-semibold mb-2">Limitação:</p>
                    <p>
                      Em um contexto de desigualdades sociais, a igualdade pode perpetuar injustiças ao não reconhecer diferenças reais de oportunidades e necessidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Equidade Como Caminho Para a Igualdade
              </h4>
              <p className="text-sm text-foreground">
                <strong>Meta:</strong> Somente através da prática da Equidade é possível, em um país com tantas injustiças e desigualdades como o Brasil, alcançar a Igualdade verdadeira. Portanto, a <strong>Equidade é o passo que antecede e viabiliza a Igualdade</strong>. Ao atender desigualmente os desiguais, fornecendo mais recursos e atenção a quem mais precisa, gradualmente se constroem condições para que todos alcancem níveis semelhantes de saúde e qualidade de vida.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Componentes Fundamentais - Valores Fundantes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Componentes Fundamentais da PNPS: Valores Fundantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
              <p className="text-sm font-medium text-foreground mb-2">
                <strong>Importante para Provas:</strong> É essencial distinguir os quatro componentes estruturantes da PNPS: <strong>Valores Fundantes, Princípios, Diretrizes e Eixos Operacionais</strong>.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-foreground mb-3">Valores Fundantes (Componente Mais Subjetivo)</h4>
              <p className="text-foreground mb-4">
                Os valores fundantes são considerados os componentes <strong>mais subjetivos</strong> da política. Eles representam a percepção do ser humano em relação ao outro e ações historicamente consolidadas que buscam a transformação social e cultural.
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-primary/5 rounded-md border border-primary/10">
                  <h5 className="font-semibold text-primary text-sm mb-2">Solidariedade</h5>
                  <p className="text-xs text-muted-foreground">Compromisso coletivo com o bem-estar comum</p>
                </div>

                <div className="p-3 bg-primary/5 rounded-md border border-primary/10">
                  <h5 className="font-semibold text-primary text-sm mb-2">Felicidade</h5>
                  <p className="text-xs text-muted-foreground">Bem-estar subjetivo como meta da promoção</p>
                </div>

                <div className="p-3 bg-primary/5 rounded-md border border-primary/10">
                  <h5 className="font-semibold text-primary text-sm mb-2">Ética</h5>
                  <p className="text-xs text-muted-foreground">Conduta baseada em princípios morais</p>
                </div>

                <div className="p-3 bg-primary/5 rounded-md border border-primary/10">
                  <h5 className="font-semibold text-primary text-sm mb-2">Respeito às Diversidades</h5>
                  <p className="text-xs text-muted-foreground">Valorização das diferenças culturais e individuais</p>
                </div>

                <div className="p-3 bg-primary/5 rounded-md border border-primary/10">
                  <h5 className="font-semibold text-primary text-sm mb-2">Humanização</h5>
                  <p className="text-xs text-muted-foreground">Atendimento centrado no ser humano integral</p>
                </div>

                <div className="p-3 bg-primary/5 rounded-md border border-primary/10">
                  <h5 className="font-semibold text-primary text-sm mb-2">Corresponsabilidade</h5>
                  <p className="text-xs text-muted-foreground">Responsabilidade compartilhada entre atores</p>
                </div>

                <div className="p-3 bg-primary/5 rounded-md border border-primary/10">
                  <h5 className="font-semibold text-primary text-sm mb-2">Justiça Social</h5>
                  <p className="text-xs text-muted-foreground">Distribuição equitativa de recursos e oportunidades</p>
                </div>

                <div className="p-3 bg-primary/5 rounded-md border border-primary/10">
                  <h5 className="font-semibold text-primary text-sm mb-2">Inclusão Social</h5>
                  <p className="text-xs text-muted-foreground">Participação plena de todos na sociedade</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground italic text-sm">
              Estes valores representam aspirações sociais que demandam mudanças culturais profundas e orientam o sentido ético da política.
            </p>
          </CardContent>
        </Card>

        {/* Princípios */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Compass className="h-5 w-5 text-primary" />
              Componentes Fundamentais da PNPS: Princípios
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-4">
              Os princípios também possuem caráter subjetivo, porém em <strong>grau menor que os valores fundantes</strong>. Eles constituem as bases conceituais e operacionais da política.
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-secondary/10 rounded-md border-l-4 border-secondary">
                <h5 className="font-bold text-secondary mb-2">Equidade</h5>
                <p className="text-sm text-foreground">
                  Distribuição justa de oportunidades considerando as especificidades e necessidades diferenciadas de cada grupo populacional.
                </p>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border-l-4 border-secondary">
                <h5 className="font-bold text-secondary mb-2">Participação Social</h5>
                <p className="text-sm text-foreground">
                  Envolvimento ativo da população nas decisões e ações que afetam sua saúde e qualidade de vida.
                </p>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border-l-4 border-secondary">
                <h5 className="font-bold text-secondary mb-2">Autonomia</h5>
                <p className="text-sm text-foreground">
                  Capacidade de indivíduos e coletividades tomarem decisões sobre suas próprias vidas e saúde.
                </p>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border-l-4 border-secondary">
                <h5 className="font-bold text-secondary mb-2">Empoderamento</h5>
                <p className="text-sm text-foreground mb-2">
                  Processo de intervenção que estimula sujeitos e coletivos a adquirirem o controle das decisões e das escolhas referentes aos seus modos de vida.
                </p>
                <div className="bg-background/50 p-2 rounded text-xs">
                  <p className="italic">
                    Permite que as pessoas assumam controle sobre as condições adequadas às suas realidades socioeconômicas e culturais.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border-l-4 border-secondary">
                <h5 className="font-bold text-secondary mb-2">Intersetorialidade e Intrassetorialidade</h5>
                <p className="text-sm text-foreground">
                  Articulação entre diferentes setores (inter) e dentro do próprio setor saúde (intra) para ações coordenadas.
                </p>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border-l-4 border-secondary">
                <h5 className="font-bold text-secondary mb-2">Sustentabilidade</h5>
                <p className="text-sm text-foreground mb-2">
                  Necessidade de permanência e continuidade das ações e intervenções ao longo do tempo.
                </p>
                <div className="bg-background/50 p-2 rounded text-xs">
                  <p>
                    Considera as dimensões: <strong>política, econômica, social, cultural e ambiental</strong>.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border-l-4 border-secondary">
                <h5 className="font-bold text-secondary mb-2">Integralidade</h5>
                <p className="text-sm text-foreground mb-2">
                  Intervenções pautadas no reconhecimento da complexidade, potencialidade e singularidade dos indivíduos, grupos e coletivos.
                </p>
                <div className="bg-background/50 p-2 rounded text-xs">
                  <p>
                    Constrói processos de trabalho articulados e integrados em toda a rede de atenção.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border-l-4 border-secondary">
                <h5 className="font-bold text-secondary mb-2">Territorialidade</h5>
                <p className="text-sm text-foreground">
                  Reconhecimento do território como espaço vivo, dinâmico, onde ocorrem as relações sociais e se manifestam os determinantes de saúde.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Diretrizes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Componentes Fundamentais da PNPS: Diretrizes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-4">
              As diretrizes são ações que fornecem um <strong>norte e uma direção tática</strong> para alcançar os princípios e valores da PNPS. Elas orientam estrategicamente as práticas no campo da promoção da saúde.
            </p>

            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-foreground mb-1">Gestão Democrática, Participativa e Transparente</h5>
                  <p className="text-sm text-muted-foreground">
                    Incentivar a gestão democrática para fortalecer a participação e o controle social, garantindo transparência nas decisões.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-foreground mb-1">Cooperação e Articulação Intra e Intersetorial</h5>
                  <p className="text-sm text-muted-foreground">
                    Estimular a cooperação entre diferentes setores e dentro do próprio setor saúde para ações integradas.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-foreground mb-1">Planejamento de Ações Territorializadas</h5>
                  <p className="text-sm text-muted-foreground">
                    Fomentar o planejamento baseado nas características e necessidades específicas de cada território.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">4</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-foreground mb-1">Formação e Educação Permanente</h5>
                  <p className="text-sm text-muted-foreground">
                    Apoiar a formação e educação permanente em promoção da saúde para ampliar a capacidade crítica e reflexiva dos gestores e trabalhadores.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">5</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-foreground mb-1">Pesquisa e Produção de Conhecimento</h5>
                  <p className="text-sm text-muted-foreground">
                    Estimular a pesquisa, produção e difusão de conhecimentos e evidências científicas na área de promoção da saúde.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eixos Operacionais */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              Componentes Fundamentais da PNPS: Eixos Operacionais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <p className="text-sm font-medium text-foreground">
                Os eixos operacionais representam a <strong>"mão na massa"</strong> ou a estratégia de ação para operacionalizar as intervenções, alcançar as diretrizes e, consequentemente, os objetivos da PNPS.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-accent/10 rounded-md border border-accent/20">
                <h5 className="font-bold text-foreground mb-2">1. Territorialização</h5>
                <p className="text-sm text-muted-foreground">
                  Organização das ações com base no reconhecimento do território como espaço dinâmico de produção de saúde.
                </p>
              </div>

              <div className="p-4 bg-accent/10 rounded-md border border-accent/20">
                <h5 className="font-bold text-foreground mb-2">2. Articulação e Cooperação Intra e Intersetorial</h5>
                <p className="text-sm text-muted-foreground">
                  Implementação prática da cooperação entre setores diversos e entre diferentes pontos da rede de saúde.
                </p>
              </div>

              <div className="p-4 bg-accent/10 rounded-md border border-accent/20">
                <h5 className="font-bold text-foreground mb-2">3. Rede Como Estratégia Operacional</h5>
                <p className="text-sm text-muted-foreground">
                  Utilização da rede como mecanismo de organização e integração dos serviços e ações de promoção.
                </p>
              </div>

              <div className="p-4 bg-accent/10 rounded-md border border-accent/20">
                <h5 className="font-bold text-foreground mb-2">4. Participação e Controle Social</h5>
                <p className="text-sm text-muted-foreground">
                  Efetivação da participação popular nas decisões e no monitoramento das ações de promoção da saúde.
                </p>
              </div>

              <div className="p-4 bg-accent/10 rounded-md border border-accent/20">
                <h5 className="font-bold text-foreground mb-2">5. Gestão</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Priorização de processos democráticos e participativos na condução das políticas.
                </p>
                <div className="bg-destructive/10 p-2 rounded text-xs mt-2">
                  <p className="font-semibold text-destructive mb-1">⚠️ Atenção Importante:</p>
                  <p className="text-foreground">
                    A PNPS não pode ser centralizada. A centralização em um eixo operacional ou de gestão é considerada ofensiva ao espírito da política, que deve ser <strong>descentralizada e participativa</strong>.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-accent/10 rounded-md border border-accent/20">
                <h5 className="font-bold text-foreground mb-2">6. Educação e Formação</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Processos educativos baseados em metodologias específicas e transformadoras.
                </p>
                <div className="bg-background/50 p-2 rounded text-xs mt-2">
                  <p className="font-medium mb-1">Abordagem Pedagógica:</p>
                  <p className="text-foreground">
                    Focada em processos pedagógicos <strong>problematizadores, dialógicos, libertadores, emancipatórios e críticos</strong>, fundamentados na pedagogia de <strong>Paulo Freire</strong>.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-accent/10 rounded-md border border-accent/20">
                <h5 className="font-bold text-foreground mb-2">7. Vigilância, Monitoramento e Avaliação</h5>
                <p className="text-sm text-muted-foreground">
                  Acompanhamento sistemático das ações e seus resultados para ajustes e melhorias contínuas.
                </p>
              </div>

              <div className="p-4 bg-accent/10 rounded-md border border-accent/20">
                <h5 className="font-bold text-foreground mb-2">8. Produção e Disseminação de Conhecimentos e Saberes</h5>
                <p className="text-sm text-muted-foreground">
                  Geração, sistematização e compartilhamento de conhecimentos técnico-científicos e saberes populares.
                </p>
              </div>

              <div className="p-4 bg-accent/10 rounded-md border border-accent/20">
                <h5 className="font-bold text-foreground mb-2">9. Comunicação Social e Mídia</h5>
                <p className="text-sm text-muted-foreground">
                  Utilização estratégica dos meios de comunicação para disseminar informações e promover saúde.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PNPS e RAS */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5 text-primary" />
              PNPS e a Rede de Atenção à Saúde (RAS)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              A PNPS articula-se intimamente com a Rede de Atenção à Saúde (RAS), que deve ser organizada de forma resolutiva, articulada e contínua.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-secondary/10 rounded-md border-l-4 border-secondary">
                <h5 className="font-bold text-secondary mb-2">Densidade Tecnológica</h5>
                <p className="text-sm text-foreground">
                  A RAS é constituída por um conjunto de ações e serviços que se diferenciam apenas pelo <strong>grau de densidade tecnológica</strong> empregado em cada ponto de atenção. Todos os pontos da rede possuem igual importância, não havendo hierarquia de valor, mas sim diferenças tecnológicas.
                </p>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border-l-4 border-primary">
                <h5 className="font-bold text-primary mb-2">Atenção Primária à Saúde (APS) Como Ordenadora</h5>
                <p className="text-sm text-foreground mb-2">
                  A APS é considerada o <strong>centro de comunicação, a coordenadora e ordenadora do cuidado</strong> na rede, conforme estabelecido no Decreto 7.508/11 e na Política Nacional de Atenção Básica.
                </p>
                <div className="bg-background/50 p-2 rounded text-xs mt-2">
                  <p className="text-foreground">
                    A APS atua como porta de entrada preferencial e como articuladora dos fluxos assistenciais na rede.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-accent/10 rounded-md border-l-4 border-accent">
                <h5 className="font-bold text-foreground mb-2">Vínculo e Longitudinalidade</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Para que a rede funcione de forma verdadeiramente resolutiva, é necessário criar <strong>vínculo</strong> entre usuários e profissionais e trabalhar com a <strong>longitudinalidade do cuidado</strong>.
                </p>
                <div className="bg-background/50 p-2 rounded text-xs mt-2">
                  <ul className="space-y-1">
                    <li className="flex gap-2">
                      <span className="text-foreground font-bold">•</span>
                      <span className="text-foreground"><strong>Vínculo:</strong> Relação de confiança e responsabilização entre equipe e usuário</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground font-bold">•</span>
                      <span className="text-foreground"><strong>Longitudinalidade:</strong> Acompanhamento contínuo ao longo do tempo, garantindo continuidade do cuidado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground italic text-sm">
              A integração entre PNPS e RAS garante que as ações de promoção da saúde permeiem todos os níveis de atenção, desde a prevenção até a reabilitação.
            </p>
          </CardContent>
        </Card>

        {/* PNPS e Seguridade Social */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              A PNPS e a Seguridade Social
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              As ações e estratégias de promoção da saúde desenvolvidas pela PNPS articulam-se com as demais redes de proteção social, formando um sistema integrado de seguridade.
            </p>

            <div className="p-4 bg-primary/10 rounded-md border-l-4 border-primary">
              <h5 className="font-bold text-primary mb-3">Seguridade Social</h5>
              <p className="text-sm text-foreground mb-3">
                A <strong>Saúde</strong> está inserida no conjunto maior da <strong>Seguridade Social</strong>, juntamente com a <strong>Assistência Social</strong> e a <strong>Previdência Social</strong>.
              </p>
              <div className="grid md:grid-cols-3 gap-3 mb-3">
                <div className="bg-background/50 p-3 rounded text-center">
                  <p className="font-semibold text-sm text-primary">Saúde</p>
                  <p className="text-xs text-muted-foreground mt-1">Direito universal</p>
                </div>
                <div className="bg-background/50 p-3 rounded text-center">
                  <p className="font-semibold text-sm text-primary">Assistência Social</p>
                  <p className="text-xs text-muted-foreground mt-1">Para quem necessita</p>
                </div>
                <div className="bg-background/50 p-3 rounded text-center">
                  <p className="font-semibold text-sm text-primary">Previdência Social</p>
                  <p className="text-xs text-muted-foreground mt-1">Sistema contributivo</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-secondary/10 rounded-md border-l-4 border-secondary">
              <h5 className="font-bold text-secondary mb-2">Participação e Controle Social</h5>
              <p className="text-sm text-foreground mb-2">
                A Seguridade Social exige <strong>Ampla Participação e Controle Social</strong>. Este é um item transversal e constante em toda e qualquer política do SUS.
              </p>
              <div className="bg-background/50 p-2 rounded text-xs mt-2">
                <p className="text-foreground">
                  A participação popular garante que as políticas respondam às reais necessidades da população e sejam implementadas de forma democrática e transparente.
                </p>
              </div>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h5 className="font-semibold text-foreground mb-2">Articulação Intersetorial na Seguridade</h5>
              <p className="text-sm text-muted-foreground">
                Para a efetividade da PNPS no contexto da Seguridade Social, é fundamental a articulação com outras redes de proteção social, como programas de transferência de renda, habitação, educação e cultura. A promoção da saúde somente se concretiza quando há ação coordenada de múltiplos setores voltados para a melhoria das condições de vida.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Resumo Prático */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Resumo Prático - PNPS em Tabela
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary/10 border-b-2 border-primary">
                    <th className="text-left p-3 font-bold text-foreground">Tópico</th>
                    <th className="text-left p-3 font-bold text-foreground">Conceito Central</th>
                    <th className="text-left p-3 font-bold text-foreground">Termos-Chave</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-accent/5">
                    <td className="p-3 font-semibold text-foreground">Base Legal</td>
                    <td className="p-3 text-muted-foreground">Consolidada pela Portaria de Consolidação nº 2 de 2017</td>
                    <td className="p-3 text-muted-foreground">Ações que antecedem o adoecimento</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/5">
                    <td className="p-3 font-semibold text-foreground">Objetivo Geral</td>
                    <td className="p-3 text-muted-foreground">Promover a Equidade e a melhoria dos modos de viver</td>
                    <td className="p-3 text-muted-foreground">Promover equidade, Reduzir determinantes sociais</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/5">
                    <td className="p-3 font-semibold text-foreground">Equidade</td>
                    <td className="p-3 text-muted-foreground">Atendimento desigual para os desiguais; distribuição igualitária de oportunidades</td>
                    <td className="p-3 text-muted-foreground">Passagem para a Igualdade</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/5">
                    <td className="p-3 font-semibold text-foreground">Inter/Intrassetorialidade</td>
                    <td className="p-3 text-muted-foreground">Articulação entre Saúde e outros setores (Inter) ou dentro do próprio setor Saúde (Intra)</td>
                    <td className="p-3 text-muted-foreground">PNPS é transversal e intersetorial</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/5">
                    <td className="p-3 font-semibold text-foreground">Valores Fundantes</td>
                    <td className="p-3 text-muted-foreground">Componentes mais subjetivos da política</td>
                    <td className="p-3 text-muted-foreground">Felicidade, Solidariedade, Justiça Social, Humanização</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/5">
                    <td className="p-3 font-semibold text-foreground">Princípios Chave</td>
                    <td className="p-3 text-muted-foreground">Bases conceituais menos subjetivas</td>
                    <td className="p-3 text-muted-foreground">Empoderamento, Sustentabilidade, Integralidade, Equidade</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/5">
                    <td className="p-3 font-semibold text-foreground">Diretrizes</td>
                    <td className="p-3 text-muted-foreground">O Norte tático e operacional</td>
                    <td className="p-3 text-muted-foreground">Gestão democrática, Planejamento territorializado</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/5">
                    <td className="p-3 font-semibold text-foreground">Eixos Operacionais</td>
                    <td className="p-3 text-muted-foreground">Ações de execução ("mão na massa")</td>
                    <td className="p-3 text-muted-foreground">Territorialização, Educação (Paulo Freire), Vigilância</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/5">
                    <td className="p-3 font-semibold text-foreground">Modelo de Atenção</td>
                    <td className="p-3 text-muted-foreground">A APS é o centro de comunicação e ordenadora do cuidado na RAS</td>
                    <td className="p-3 text-muted-foreground">Diferença na RAS é a densidade tecnológica</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="p-3 font-semibold text-foreground">Seguridade Social</td>
                    <td className="p-3 text-muted-foreground">Articulação com Assistência e Previdência Social</td>
                    <td className="p-3 text-muted-foreground">Participação e Controle Social amplos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-md border border-primary/20">
              <h4 className="font-bold text-primary mb-2">Pontos-Chave para Fixação</h4>
              <ul className="space-y-1 text-sm text-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>PNPS é transversal e perpassa toda a RAS e políticas do SUS</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Equidade antecede e viabiliza a Igualdade</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Valores Fundantes são mais subjetivos que Princípios</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Educação na PNPS segue Paulo Freire (problematizadora)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>PNPS não pode ser centralizada - deve ser descentralizada</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>APS é ordenadora do cuidado na RAS</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

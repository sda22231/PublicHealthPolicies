import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, Clock, AlertCircle, Users, TrendingUp, Briefcase, Factory, Shield, Network, Settings, Activity, HeartPulse, AlertTriangle } from "lucide-react";

export default function PNSTTContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="text-policy-title">
          Política Nacional de Saúde do Trabalhador e da Trabalhadora (PNSTT)
        </h2>
        <p className="text-lg text-muted-foreground" data-testid="text-policy-subtitle">
          Implementação, princípios orientadores e desafios estruturais no contexto de 2017
        </p>
      </div>

      <div className="space-y-8">
        {/* Contexto Político-Econômico */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Contexto Político-Econômico e Impacto nas Políticas Sociais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              O tema da saúde do trabalhador é considerado de grande importância e riqueza. Em 2017, a discussão estava inserida em um contexto de preparação para a <strong>Conferência Nacional de Vigilância em Saúde</strong>.
            </p>
            
            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2">Cenário Político e Econômico</h4>
              <p className="text-sm text-foreground">
                O cenário geral do país, que afeta diretamente a saúde, é marcado por <strong>mudanças políticas e econômicas</strong> que interferem diretamente nas políticas sociais. Essas transformações impactam diretamente a política de proteção ao trabalhador e à trabalhadora.
              </p>
            </div>

            <p className="text-muted-foreground italic">
              O momento atual (2017) é desafiador devido a uma série de transformações no modo de produção e nas relações de trabalho.
            </p>
          </CardContent>
        </Card>

        {/* Desafios Estruturais - Inovação Tecnológica */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Factory className="h-5 w-5 text-primary" />
              Desafios Estruturais: Inovação Tecnológica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Nanotecnologia e o Princípio da Precaução</h3>
              <p className="text-foreground mb-3">
                A inovação tecnológica constante, exemplificada pela <strong>nanotecnologia</strong>, tem reflexos diretos no trabalhador e no ciclo produtivo.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Impacto Desconhecido</h4>
                <p className="text-sm text-foreground">
                  A nanotecnologia está envolvida em diversos produtos (cosméticos, saneantes, vestuário, produção em geral). Contudo, ainda não há demonstrações totais sobre o impacto que essa tecnologia pode ter sobre o trabalhador que a utiliza e sobre o usuário que a consome.
                </p>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Nanotecnologia como Campo de Estudo</h4>
                <p className="text-sm text-foreground">
                  É necessário focar estudos para entender os impactos da nanotecnologia na sociedade e, especificamente, na saúde do trabalhador.
                </p>
              </div>

              <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-2">Princípio da Precaução</h4>
                <p className="text-sm text-foreground">
                  Devido a estas novas tecnologias, muitas vezes desconhecidas, a PNSTT adota o <strong>Princípio da Precaução</strong>, que exige a adoção das medidas mais restritivas possíveis para evitar danos, mesmo na ausência de certeza científica total.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Precarização das Relações de Trabalho */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Precarização das Relações de Trabalho
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              A precarização das relações de trabalho é um reflexo direto das mudanças políticas e econômicas no Brasil.
            </p>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Legislação Impactante</h4>
                <p className="text-sm text-muted-foreground">
                  As reformas e medidas (como a <strong>reforma da previdência</strong>, a <strong>terceirização</strong> e a contratação) acabam afetando diretamente a ação e o trabalho.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Novos Vínculos e Excedente de Mão de Obra</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Essas mudanças geram novos vínculos de emprego e renda. O <strong>excedente de mão de obra</strong> (maior oferta que demanda) permite novas contratações sob condições que podem ser menos favoráveis ao trabalhador.
                </p>
              </div>

              <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
                <h4 className="font-semibold text-primary mb-2">Alterações no Trabalho e Requalificação</h4>
                <p className="text-sm text-foreground">
                  O excedente e a necessidade de ocupação forçam grandes alterações em áreas de trabalho (e.g., um trabalhador do comércio indo para a área de produção). Isso requer <strong>requalificação e conhecimento do zero</strong>, aumentando a possibilidade de acidentes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Aumento da Informalidade e MEI */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Aumento da Informalidade e o Microempreendedor Individual (MEI)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              Há uma grande migração do setor formal da economia para o setor informal.
            </p>

            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">Crescimento Expressivo do MEI</h4>
              <p className="text-sm text-foreground mb-2">
                O governo incentiva políticas de inclusão produtiva e social, como o <strong>Microempreendedor Individual (MEI)</strong>. O número de MEIs cresceu drasticamente: de <strong>40 mil para 6 milhões em 2016</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Benefícios do MEI</h4>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• Facilita a vida do empreendedor ao permitir o financiamento de seu negócio</li>
                  <li>• Permite o registro formal</li>
                  <li>• Pode ter o dono da empresa mais um trabalhador</li>
                </ul>
              </div>

              <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-2">Desafios do MEI</h4>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• Frequentemente funciona em domicílio</li>
                  <li>• Nem sempre trabalha com atividades de baixo risco</li>
                  <li>• Requer ampliação do olhar do Ministério da Saúde</li>
                  <li>• Não deve focar apenas grandes empresas</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2">Concentração de MEI</h4>
              <p className="text-sm text-foreground">
                A maior parte dos MEIs trabalha nas áreas de <strong>alimentação e produção</strong>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Desigualdade e Ocupação Desordenada */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Desigualdade e Ocupação Desordenada
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Desigualdade Social no Território</h4>
              <p className="text-sm text-muted-foreground">
                Coexiste no mesmo território a <strong>indústria de alta tecnologia</strong> e o <strong>trabalho informal ou artesanato</strong>, o que aumenta a desigualdade social.
              </p>
            </div>

            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-2">Infraestrutura Precária</h4>
              <p className="text-sm text-foreground">
                A ocupação desordenada, desde o início do processo de urbanização do país, resultou em áreas urbanas totalmente desestruturadas em termos de <strong>saneamento básico, esgotamento, água potável e tratamento de resíduos sólidos</strong>. Essa baixa infraestrutura afeta principalmente os locais onde o trabalho informal ocorre.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Impacto Ambiental e Acidentes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Impacto Ambiental e Acidentes de Trabalho
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              O modelo produtivo e ambiental tem um impacto direto no trabalhador e no ambiente.
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-2">Grandes Empreendimentos</h4>
                <p className="text-sm text-foreground">
                  Os eventos ou acidentes em grandes empreendimentos, como as mineradoras (exemplo do <strong>desastre de Mariana</strong>), têm reflexos graves sobre os municípios e trabalhadores de Minas Gerais e Espírito Santo, afetando tanto o ambiente quanto o trabalhador.
                </p>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Acidentes Diversos</h4>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• Aumento da possibilidade de <strong>acidentes radioativos</strong></li>
                  <li>• No meio rural, problemas ligados ao <strong>clima e ao tempo</strong></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Perfil da População Trabalhadora */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Perfil da População Trabalhadora e Cenário Epidemiológico
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Perfil Demográfico (2017)</h3>
              <p className="text-foreground mb-3">
                A população brasileira projetada em 2017 era de <strong>210,6 milhões de habitantes</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20 text-center">
                <div className="text-3xl font-bold text-primary mb-1">128M</div>
                <div className="text-sm text-foreground font-medium">População Economicamente Ativa (PEA)</div>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20 text-center">
                <div className="text-3xl font-bold text-secondary mb-1">90,3M</div>
                <div className="text-sm text-foreground font-medium">População Ocupada (PO)</div>
              </div>

              <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20 text-center">
                <div className="text-3xl font-bold text-destructive mb-1">8%+</div>
                <div className="text-sm text-foreground font-medium">Taxa de Desocupação</div>
              </div>

              <div className="p-4 bg-accent/20 rounded-md border border-accent/30 text-center">
                <div className="text-3xl font-bold text-foreground mb-1">12-32M</div>
                <div className="text-sm text-foreground font-medium">Trabalhadores Informais</div>
              </div>
            </div>

            <p className="text-muted-foreground italic text-sm">
              Oficialmente, havia 12 milhões de trabalhadores informais, mas outras pesquisas apontam para um total de 32 milhões.
            </p>
          </CardContent>
        </Card>

        {/* Setores da Economia e Gênero */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Setores da Economia e Distribuição por Gênero
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              Entre 2009 e 2014, o setor da economia que mais empregava, formalmente, era o <strong>setor de serviços</strong> (incluindo comércio). No entanto, o comércio é o setor que possui mais estabelecimentos ou empresas.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-3">Perfil de Ocupação Feminina (2004-2017)</h4>
                <p className="text-sm text-foreground mb-2">As dez principais atividades para mulheres ocupadas incluem:</p>
                <ol className="text-sm text-foreground space-y-1 list-decimal list-inside">
                  <li>Serviços de forma geral</li>
                  <li>Educação Regular (essencialmente pública)</li>
                  <li>Serviços ligados à alimentação (exceto ambulantes)</li>
                  <li>Comércio de vestuário</li>
                  <li>Saúde particular</li>
                </ol>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-3">Perfil de Ocupação Masculina (2004-2017)</h4>
                <p className="text-sm text-foreground mb-2">Os homens concentram-se principalmente em:</p>
                <ol className="text-sm text-foreground space-y-1 list-decimal list-inside">
                  <li>Construção Civil</li>
                  <li>Comércio alimentício</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transição Epidemiológica */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HeartPulse className="h-5 w-5 text-primary" />
              Transição Epidemiológica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              O Brasil passa por uma mudança na base demográfica e no perfil epidemiológico.
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Doenças Crônico-Degenerativas</h4>
                <p className="text-sm text-foreground">
                  Com o aumento da expectativa de vida, cresce o adoecimento por <strong>doenças crônico-degenerativas</strong>.
                </p>
              </div>

              <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-2">Causas Externas</h4>
                <p className="text-sm text-foreground">
                  Há também um aumento das doenças por <strong>causas externas</strong> (e.g., violência).
                </p>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Doenças Infecciosas e Parasitárias</h4>
                <p className="text-sm text-foreground">
                  No entanto, ainda coexistem <strong>doenças infecciosas e parasitárias</strong>, criando um ambiente de complexa mudança de perfil tecnológico e causas de adoecimento e morte.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* A PNSTT */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              A Política Nacional de Saúde do Trabalhador e da Trabalhadora (PNSTT)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Estratégia Principal</h4>
              <p className="text-sm text-foreground">
                A PNSTT é a principal estratégia para a atuação da <strong>Vigilância em Saúde do Trabalhador</strong>.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Conceito de Vigilância em Saúde do Trabalhador</h4>
              <p className="text-sm text-muted-foreground">
                A Vigilância em Saúde do Trabalhador é uma área que trabalha, estuda e atua nas políticas de saúde, sendo responsável por organizar a <strong>Rede de Atenção à Saúde</strong> em todos os pontos de entrada do trabalhador.
              </p>
            </div>

            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">Finalidade da PNSTT</h4>
              <p className="text-sm text-foreground mb-2">
                A PNSTT (<strong>lançada em 2012</strong>) tem como finalidade estabelecer <strong>princípios, diretrizes e estratégias</strong> que irão orientar a rede integral à saúde do trabalhador.
              </p>
              <p className="text-sm text-foreground">
                O foco principal da rede é a <strong>Vigilância da Saúde</strong>, visando a promoção e a redução da morbidade e mortalidade, além da avaliação dos modelos de desenvolvimento nos processos produtivos.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Abrangência da Política</h4>
              <p className="text-sm text-muted-foreground">
                A PNSTT cobre <strong>todo e qualquer trabalho</strong>, independentemente do setor (urbano, rural, formal, informal, etc.) e do tipo de vínculo empregatício, contemplando a perspectiva de <strong>raça/cor e gênero</strong>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Princípios e Diretrizes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Princípios e Diretrizes Fundamentais da PNSTT
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-4">
              Os princípios da PNSTT são fundamentais para garantir o funcionamento da rede integral.
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">1. Universalidade</h4>
                <p className="text-sm text-foreground">
                  Abranger todo trabalhador, independentemente da sua condição.
                </p>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">2. Integralidade</h4>
                <p className="text-sm text-foreground">
                  O trabalhador deve ser atendido tanto na atenção quanto na vigilância. O atendimento integral envolve <strong>promoção, assistência e vigilância</strong>.
                </p>
              </div>

              <div className="p-4 bg-accent/20 rounded-md border border-accent/30">
                <h4 className="font-semibold text-foreground mb-2">3. Participação da Comunidade e do Controle Social</h4>
                <p className="text-sm text-foreground">
                  Os trabalhadores devem participar no <strong>planejamento, acompanhamento e monitoramento</strong> da política e da rede.
                </p>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">4. Reconhecimento</h4>
                <p className="text-sm text-foreground">
                  Reconhecer e identificar as políticas sociais e estratégias voltadas para grupos específicos, especialmente os mais <strong>vulneráveis</strong>.
                </p>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">5. Transversalidade</h4>
                <p className="text-sm text-foreground">
                  É uma área que perpassa toda a Rede de Atenção à Saúde. É o <strong>trabalho em rede</strong>, conversando com todas as áreas (assistência, vigilância, promoção e prevenção).
                </p>
              </div>

              <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-2">6. Precaução</h4>
                <p className="text-sm text-foreground">
                  Adotar medidas restritivas (o mais possível) diante de novas tecnologias de impacto desconhecido.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ações Estratégicas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Ações Estratégicas e Desafios da Implementação
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              A PNSTT busca alterar modos de atenção e processos de gestão através de objetivos estratégicos bem definidos.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Integração e Foco</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Um objetivo crucial é a <strong>integração com os demais componentes da Vigilância em Saúde</strong> e com toda a rede de atenção.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• <strong>Identificação:</strong> A PNSTT exige a identificação dos locais de trabalho e a diferenciação deste trabalhador na rede de atenção</li>
                  <li>• <strong>Promoção e Ambiente:</strong> O foco deve ser na promoção da saúde e do ambiente saudável, trabalhando na prevenção antes que o agravo se instale</li>
                  <li>• <strong>Trabalho como Determinante:</strong> A política visa incorporar a categoria trabalho como um campo importante e determinante no processo saúde-doença</li>
                </ul>
              </div>

              <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
                <h4 className="font-semibold text-primary mb-2">Planejamento, Qualificação e Informação</h4>
                <ul className="text-sm text-foreground space-y-2">
                  <li><strong>• Planejamento Integrado:</strong> As ações da Vigilância em Saúde do Trabalhador devem ser incorporadas ao Planejamento Integrado de Saúde (incluindo a Programação Anual de Saúde)</li>
                  <li><strong>• Qualificação da Atenção:</strong> Qualificar o atendimento de toda a rede, para que o trabalhador seja atendido com singularidade (cada um em especial), principalmente as populações de trabalhadores vulneráveis</li>
                  <li><strong>• Olhar do ACS:</strong> O Agente Comunitário de Saúde (ACS) tem um papel importante na Atenção Básica ao ter um olhar diferenciado durante o atendimento domiciliar para detectar relações entre a doença e o trabalho</li>
                  <li><strong>• Intersetorialidade:</strong> É imprescindível a ampliação da atuação intersetorial. A Saúde deve trabalhar conjuntamente com outras áreas (ex: agricultura familiar, questão ambiental com o Ministério do Meio Ambiente - MMA)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Desafios de Gestão */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Desafios de Gestão e Envolvimento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              A implementação enfrenta desafios práticos que precisam ser superados:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-2">Baixo Envolvimento dos Gestores</h4>
                <p className="text-sm text-foreground">
                  Um dos pontos críticos é o <strong>baixo envolvimento dos gestores institucionais</strong> em relação à saúde do trabalhador. É preciso pensar em ações que aumentem o envolvimento desses gestores.
                </p>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Apoio Institucional</h4>
                <p className="text-sm text-foreground">
                  O desenvolvimento da PNSTT pode ser apoiado nas <strong>esferas federal e municipal</strong>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* RENAST */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5 text-primary" />
              Rede Nacional de Atenção Integral à Saúde do Trabalhador (RENAST)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Definição da RENAST</h4>
              <p className="text-sm text-foreground">
                A RENAST é a rede que integra as ações de <strong>atenção, vigilância, promoção e prevenção</strong> em saúde do trabalhador, orientada pelos princípios da PNSTT.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">O Papel Estrutural do CEREST</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Os <strong>Centros de Referência em Saúde do Trabalhador (CERESTs)</strong> são essenciais para a implementação da política e funcionam como um apoio matricial na rede.
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                  <h4 className="font-semibold text-secondary mb-2">Função do CEREST</h4>
                  <ul className="text-sm text-foreground space-y-1">
                    <li>• Coordenar as ações de vigilância</li>
                    <li>• Ser um ponto de referência/contrarreferência</li>
                    <li>• Atuar na gestão da saúde, analisando dados</li>
                    <li>• Qualificar a vigilância</li>
                    <li>• Vincular a saúde ao mapa de risco e vulnerabilidade do território</li>
                  </ul>
                </div>

                <div className="p-4 bg-accent/20 rounded-md border border-accent/30">
                  <h4 className="font-semibold text-foreground mb-2">Integração do CEREST</h4>
                  <p className="text-sm text-foreground">
                    O CEREST deve conversar com a <strong>Atenção Primária</strong>, a <strong>Média e Alta Complexidade</strong>, a <strong>Urgência/Emergência</strong>, e a <strong>Assistência Farmacêutica</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Modelo de Atenção</h4>
              <p className="text-sm text-muted-foreground mb-2">
                O modelo de atenção exige uma reorganização:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• A <strong>Atenção Básica</strong> deve ser a porta de entrada e o elemento ordenador da rede</li>
                <li>• A rede não pode ser verticalizada ou rígida</li>
                <li>• Precisa funcionar em um fluxo de <strong>referência e contrarreferência</strong></li>
                <li>• Deve ter protocolos que permitam o movimento (vai e volta) do trabalhador</li>
              </ul>
            </div>

            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-2">Desafios de Cobertura e Financiamento</h4>
              <ul className="text-sm text-foreground space-y-2">
                <li><strong>• Desafio de Abrangência:</strong> Há regiões onde o CEREST cobre mais de uma região, com uma lógica de população (PEA) que nem sempre reflete a cobertura regional total</li>
                <li><strong>• Equipes Multiprofissionais:</strong> As equipes dos CERESTs devem ser multidisciplinares. A exigência de ter um profissional de nível superior como mestre na equipe pode ser um fator limitante</li>
                <li><strong>• Retaguarda Técnica:</strong> É necessário garantir a retaguarda técnica especializada para toda a região, pois a maioria dos especialistas em saúde do trabalhador está em capitais</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Sistemas de Informação */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Sistemas de Informação, Vigilância e Financiamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Notificação e Sub-notificação</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Há um problema grave de <strong>sub-notificação</strong> de agravos relacionados ao trabalho.
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                  <h4 className="font-semibold text-secondary mb-2">Unificação de Instrumentos</h4>
                  <p className="text-sm text-foreground">
                    O Ministério da Saúde trabalha na compatibilização e unificação dos instrumentos de notificação de agravos.
                  </p>
                </div>

                <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Obrigatoriedade</h4>
                  <p className="text-sm text-foreground">
                    A obrigatoriedade da notificação de doenças relacionadas ao trabalho é essencial. O serviço deve registrar a <strong>conexão causal entre o adoecimento e o trabalho</strong>, de forma constante.
                  </p>
                </div>

                <div className="p-4 bg-accent/20 rounded-md border border-accent/30">
                  <h4 className="font-semibold text-foreground mb-2">Identificação Universal</h4>
                  <p className="text-sm text-foreground">
                    A meta é a <strong>identificação universal de agravos e doenças</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Qualificação e Sistemas de Informação</h4>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                <li>• <strong>Indicadores:</strong> Os indicadores de saúde do trabalhador devem ser construídos em conjunto pela vigilância em saúde e pelas áreas de atenção e assistência</li>
                <li>• <strong>Estudo e Pesquisa:</strong> É preciso fomentar o estudo e a pesquisa que produzam resultados práticos e não fiquem apenas na ciência</li>
                <li>• <strong>Interoperabilidade:</strong> Há um desafio na rede de informação devido à falta de interoperabilidade (compartilhamento) entre os sistemas dos estados e municípios</li>
              </ul>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2">Financiamento (Recursos e Utilização)</h4>
              <p className="text-sm text-foreground mb-2">
                As regras de financiamento estão mudando:
              </p>
              <ul className="text-sm text-foreground space-y-1">
                <li>• <strong>Fundo Municipal:</strong> Os recursos (que antes eram por convênio MAC – Média e Alta Complexidade) passam a ir para o Fundo Municipal de Saúde</li>
                <li>• <strong>Planejamento:</strong> É fundamental que os recursos sejam incorporados no Planejamento Integrado de Saúde e aprovados nos conselhos, garantindo que as ações sejam executadas</li>
                <li>• <strong>Monitoramento:</strong> É difícil monitorar a utilização dos recursos. É essencial que o dinheiro seja usado de forma efetiva, investindo na linha de cuidado em saúde e na avaliação de novas tecnologias</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Conflito Capital vs Bem-Estar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              O Conflito: Acumulação de Capital vs. Políticas de Bem-Estar Social
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              O debate final da PNSTT questiona se é possível um equilíbrio entre a acumulação de capital e as políticas públicas sociais.
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Prioridade</h4>
                <p className="text-sm text-foreground">
                  A situação exige equilibrar a balança, priorizando a <strong>população e a população trabalhadora</strong>, em vez do mercado.
                </p>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Políticas de Bem-Estar</h4>
                <p className="text-sm text-foreground">
                  É crucial manter e melhorar as <strong>políticas de bem-estar social</strong> (saúde, assistenciais, redistributivas).
                </p>
              </div>

              <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-2">Fator Chave</h4>
                <p className="text-sm text-foreground">
                  A capacidade de <strong>mobilização dos trabalhadores</strong> é fundamental para influenciar o nível de geração e distribuição de excedentes. Se o excedente de capital não for revertido para as políticas de bem-estar, as desigualdades aumentam.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resumo Prático - Tabela */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Resumo Prático: PNSTT em Síntese
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" data-testid="table-pnstt-summary">
                <thead>
                  <tr className="bg-primary/10 border-b-2 border-primary/20">
                    <th className="text-left p-3 font-semibold text-foreground">Componente</th>
                    <th className="text-left p-3 font-semibold text-foreground">Descrição</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">Ano de Lançamento</td>
                    <td className="p-3 text-muted-foreground">2012</td>
                  </tr>
                  <tr className="border-b border-border bg-accent/5">
                    <td className="p-3 font-medium text-foreground">Finalidade</td>
                    <td className="p-3 text-muted-foreground">Estabelecer princípios, diretrizes e estratégias para orientar a rede integral à saúde do trabalhador, com foco em Vigilância da Saúde</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">Abrangência</td>
                    <td className="p-3 text-muted-foreground">Todo e qualquer trabalho (urbano, rural, formal, informal), independente de vínculo, contemplando raça/cor e gênero</td>
                  </tr>
                  <tr className="border-b border-border bg-accent/5">
                    <td className="p-3 font-medium text-foreground">Princípios</td>
                    <td className="p-3 text-muted-foreground">Universalidade, Integralidade, Participação da Comunidade, Reconhecimento, Transversalidade, Precaução</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">Rede Principal</td>
                    <td className="p-3 text-muted-foreground">RENAST (Rede Nacional de Atenção Integral à Saúde do Trabalhador)</td>
                  </tr>
                  <tr className="border-b border-border bg-accent/5">
                    <td className="p-3 font-medium text-foreground">Centro de Referência</td>
                    <td className="p-3 text-muted-foreground">CEREST - Coordenação de vigilância, apoio matricial, referência/contrarreferência</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">População (2017)</td>
                    <td className="p-3 text-muted-foreground">210,6 milhões | PEA: 128 milhões | PO: 90,3 milhões | Desocupação: 8%+ | Informais: 12-32 milhões</td>
                  </tr>
                  <tr className="border-b border-border bg-accent/5">
                    <td className="p-3 font-medium text-foreground">MEI</td>
                    <td className="p-3 text-muted-foreground">Crescimento de 40 mil para 6 milhões (2016), concentrado em alimentação e produção</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">Desafios Principais</td>
                    <td className="p-3 text-muted-foreground">Precarização do trabalho, informalidade, baixo envolvimento de gestores, sub-notificação, cobertura desigual dos CERESTs</td>
                  </tr>
                  <tr className="border-b border-border bg-accent/5">
                    <td className="p-3 font-medium text-foreground">Transição Epidemiológica</td>
                    <td className="p-3 text-muted-foreground">Aumento de doenças crônico-degenerativas, causas externas (violência), coexistência de doenças infecciosas</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">Tecnologias Emergentes</td>
                    <td className="p-3 text-muted-foreground">Nanotecnologia (impacto desconhecido) - Princípio da Precaução</td>
                  </tr>
                  <tr className="bg-accent/5">
                    <td className="p-3 font-medium text-foreground">Papel do ACS</td>
                    <td className="p-3 text-muted-foreground">Olhar diferenciado na Atenção Básica para detectar relação entre doença e trabalho</td>
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

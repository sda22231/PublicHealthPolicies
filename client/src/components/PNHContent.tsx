import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Heart, Users, Network, MessageCircle, Target, ShieldCheck, Handshake, Sparkles, AlertCircle, FileText } from "lucide-react";

export default function PNHContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="text-policy-title">
          Política Nacional de Humanização (PNH) e Acolhimento
        </h2>
        <p className="text-lg text-muted-foreground" data-testid="text-policy-subtitle">
          Princípios, método e diretrizes da humanização na atenção e gestão do SUS
        </p>
      </div>

      <div className="space-y-8">
        {/* Contextualização e Fundamentos da PNH */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Contextualização e Fundamentos da PNH
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">O Nascimento da Política Nacional de Humanização</h3>
              <p className="text-foreground mb-3">
                A Política Nacional de Humanização (PNH), conhecida popularmente como <strong>"Humaniza SUS"</strong>, alcançou uma década de existência em 2013. Sua concepção partiu de um princípio basilar e essencial: <strong>o SUS que dá certo</strong>.
              </p>
              <p className="text-foreground mb-3">
                Essa filosofia se consolida porque a PNH reconhece e valoriza as experiências extremamente heterogêneas e diversificadas que já vinham sendo desenvolvidas em diferentes regiões do Brasil. Essa riqueza de vivências exige uma abordagem cuidadosa e sensível no desenvolvimento do trabalho de humanização.
              </p>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Princípio Fundamental</h4>
              <p className="text-sm text-foreground">
                A PNH se fundamenta no reconhecimento das experiências positivas que já existiam no SUS, valorizando a diversidade de práticas e a necessidade de trabalhar com delicadeza diante das diferentes realidades locais.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* O Foco Duplo: Atenção e Gestão */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              O Foco Duplo da PNH: Atenção e Gestão
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Dois Temas Historicamente Dissociados</h3>
              <p className="text-foreground mb-3">
                Um aspecto central e de extrema importância para a PNH reside no fato de que ela trabalha com dois temas que, historicamente, eram relegados a segundo plano ou tratados de maneira completamente separada: <strong>a Atenção e a Gestão</strong>.
              </p>
              <p className="text-foreground mb-3">
                Portanto, é mais preciso dizer que a política é a <strong>Política Nacional de Humanização da Atenção e da Gestão do SUS</strong>. Compreender esse foco duplo é fundamental, pois frequentemente a palavra "humanização" é vinculada a noções e conceitos diversos, o que pode gerar estranhamento ou mal-entendidos sobre a função principal desta política.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Atenção</h4>
                <p className="text-sm text-foreground">
                  Refere-se ao cuidado direto prestado aos usuários do sistema de saúde, envolvendo todas as práticas assistenciais e de cuidado.
                </p>
              </div>

              <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Gestão</h4>
                <p className="text-sm text-foreground">
                  Diz respeito aos processos gerenciais, ao modo como os serviços são organizados e como as decisões são tomadas no sistema.
                </p>
              </div>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-foreground mb-2">O Objeto e a Intenção da PNH</h4>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Intenção:</strong> A PNH busca alterar modos de atenção e processos de gestão.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Desafio:</strong> Transformar processos de trabalho e modos de gestão representa um desafio considerável no Brasil, em virtude dos diversos embates, conflitos e lacunas presentes nos serviços e unidades de saúde.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Estrutura da Política</h4>
              <p className="text-sm text-muted-foreground">
                Para alcançar seus objetivos, a PNH se organiza através de:
              </p>
              <ul className="space-y-2 mt-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Princípios:</strong> Fundamentos que orientam a política</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Método Próprio:</strong> Forma específica de implementação</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Diretrizes:</strong> Como o Acolhimento, que orienta as ações</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Dispositivos:</strong> Como o Acolhimento com Classificação de Risco</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Sustentabilidade e Método: Política de Relações */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5 text-primary" />
              Sustentabilidade e Método: Política de Relações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Uma Tentativa de Subverter Lógicas Estagnadas</h3>
              <p className="text-foreground mb-3">
                A PNH representa uma tentativa de subverter lógicas cristalizadas, romper com paradigmas estabelecidos, colocar pessoas em contato com novas ideias e implementar uma verdadeira rede de conversação entre os diversos atores do sistema de saúde.
              </p>
            </div>

            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-2">A PNH Não Possui Decreto</h4>
              <p className="text-sm text-foreground mb-2">
                Diferentemente de muitas outras políticas públicas, a PNH não foi instituída por meio de um decreto ou resolução formal. Essa característica é significativa e intencional.
              </p>
              <p className="text-sm text-foreground">
                <strong>Sustentação:</strong> A política não necessitou e não foi concebida com a ideia de que um decreto lhe conferiria sustentabilidade. Sua força e continuidade se sustentam por meio de diferentes encontros e relações produtivas entre usuários, trabalhadores e gestores em seus territórios.
              </p>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Política de Relações</h4>
              <p className="text-sm text-foreground">
                A PNH é, acima de tudo, uma <strong>política de relações</strong>. Sua efetividade depende da qualidade dos vínculos e das interações estabelecidas entre todos os envolvidos no processo de cuidado e gestão.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Transversalidade como Princípio */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              A Transversalidade como Princípio
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Ampliar a Comunicação</h3>
              <p className="text-foreground mb-3">
                A PNH opera com o princípio da <strong>transversalidade</strong>, que é essencial para seu funcionamento.
              </p>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-foreground mb-2">Definição de Transversalidade</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Na PNH, transversalidade significa <strong>colocar as pessoas em contato e aumentar o grau de comunicação entre elas</strong>. Não se trata de uma comunicação superficial, mas de um diálogo efetivo e transformador.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Conexão dos Três Atores Principais</h4>
              <p className="text-sm text-muted-foreground mb-3">
                A política busca conectar três atores que, muitas vezes, encontram-se distanciados e fechados em seus próprios universos:
              </p>

              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-primary/10 rounded-md border border-primary/20">
                  <h5 className="font-semibold text-primary text-sm mb-1">Trabalhadores</h5>
                  <p className="text-xs text-foreground">
                    Profissionais de saúde em suas diversas áreas de atuação
                  </p>
                </div>

                <div className="p-3 bg-secondary/10 rounded-md border border-secondary/20">
                  <h5 className="font-semibold text-secondary text-sm mb-1">Gestores</h5>
                  <p className="text-xs text-foreground">
                    Responsáveis pela administração e organização dos serviços
                  </p>
                </div>

                <div className="p-3 bg-accent/30 rounded-md border border-accent/50">
                  <h5 className="font-semibold text-foreground text-sm mb-1">Usuários</h5>
                  <p className="text-xs text-foreground">
                    População que utiliza os serviços de saúde
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-3">
                A PNH busca <strong>amplificar ou aumentar o grau de comunicação</strong> entre esses atores, rompendo com a lógica de isolamento e fragmentação.
              </p>
            </div>

            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">Mecanismos de Transversalidade</h4>
              <p className="text-sm text-foreground">
                Um exemplo de dispositivo desenvolvido pela PNH para exercer o papel de escuta e expressar as dificuldades do serviço é a <strong>Ouvidoria</strong>, que funciona como um canal de comunicação e feedback entre usuários, trabalhadores e gestores.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* O Conceito de Humanização: Desmistificação */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              O Conceito de Humanização: Uma Desmistificação
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-2">O que a PNH NÃO é</h4>
              <p className="text-sm text-foreground">
                É crucial compreender que a PNH <strong>não trabalha com a perspectiva de um serviço que "tem ou não tem" humanização</strong>. Esse é um dos principais equívocos a serem desfeitos.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Humanizar as Relações, Não o Homem</h3>
              <p className="text-foreground mb-3">
                A PNH <strong>não veio com o intuito de humanizar o homem</strong>, pois o ser humano já está humanizado por sua própria natureza. O ponto central (o foco) da política é <strong>humanizar as relações de atenção e gestão e os processos de trabalho</strong>, que, evidentemente, envolvem os seres humanos (sujeitos).
              </p>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">O Foco Real da Humanização</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Relação que Afeta:</strong> A PNH parte do princípio de que toda relação que afeta já está sendo humanizada</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Conflitos:</strong> O interesse da política é colocar as pessoas em contato, inclusive com seus conflitos e pontos de endurecimento ou dificuldade de diálogo</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Produção de Novidade:</strong> Na medida em que esses encontros ocorrem, as pessoas tendem a promover algo novo, transformador</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <p className="text-sm text-foreground italic">
                <strong>Importante:</strong> Um serviço que afirma que "não tem humanização" está, de certa forma, se desresponsabilizando do cuidado, e este não é o entendimento proposto pela PNH.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Humanização como Análise e Responsabilidade */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Humanização como Análise e Responsabilidade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Além da Avaliação Tradicional</h3>
              <p className="text-foreground mb-3">
                A PNH não se propõe a ser uma avaliação quantitativa ou mesmo qualitativa nos moldes tradicionais, que atesta se um serviço é ou não humanizado de forma categórica.
              </p>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Quem Atesta a Humanização?</h4>
              <p className="text-sm text-foreground mb-2">
                <strong>Atestado de Humanização:</strong> Quem pode atestar a humanização são os sujeitos que pertencem àquele espaço - trabalhadores, gestores e usuários.
              </p>
              <p className="text-sm text-foreground">
                A humanização não é uma certificação externa, mas uma construção coletiva e contínua dos atores envolvidos.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Responsabilidade da Escuta</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Na medida em que o profissional escuta algo que lhe é comunicado, ele se torna responsável por aquilo que é dito. Isso porque a informação deixa de ser um conhecimento apenas do usuário e passa a ser compartilhada.
              </p>
              <p className="text-sm text-muted-foreground">
                O profissional deve analisar qual é a <strong>dimensão de sua responsabilidade</strong> sobre o que escuta e como pode agir diante dessa informação.
              </p>
            </div>

            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">Repensar e Se Colocar em Análise</h4>
              <p className="text-sm text-foreground mb-2">
                Um serviço humanizado é aquele que busca constantemente se repensar e <strong>se coloca em análise</strong>. O primeiro passo para afirmar que um trabalho é humanizado é ele se colocar em análise para definir o que pretende alcançar.
              </p>
              <p className="text-sm text-foreground italic">
                A análise permanente do próprio fazer é característica essencial da humanização.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">A Humanização é Tangível</h4>
              <p className="text-sm text-muted-foreground mb-3">
                O trabalho de humanização é <strong>palpável, real e tangível</strong>. Algumas vezes, o tema da PNH é visto como uma abstração ou algo filosófico demais, mas a política se esforça para desmistificar essa ideia.
              </p>
              <p className="text-sm text-muted-foreground">
                Os <strong>modos de fazer</strong> da humanização são práticos e podem ser trabalhados concretamente na dimensão de um serviço humanizado.
              </p>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <p className="text-sm text-foreground italic">
                A garantia de que o serviço será eficaz e humanizado <strong>não se dá por um decreto ou resolução</strong>, mas sim pelo trabalho de relação entre os diferentes sujeitos envolvidos no processo de cuidado.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Acolhimento como Diretriz */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Handshake className="h-5 w-5 text-primary" />
              Acolhimento como Diretriz: O Sentido na PNH
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Um Termo Ampliado</h3>
              <p className="text-foreground mb-3">
                O <strong>Acolhimento</strong> é um termo que se amplificou significativamente no campo da saúde nos últimos anos e ganhou diferentes noções e interpretações.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-accent/20 rounded-md border border-accent/30">
                <h4 className="font-semibold text-foreground mb-2">Visão Tradicional</h4>
                <p className="text-sm text-muted-foreground">
                  No senso comum, acolhimento é percebido como uma forma de abraçar, tocar e estar perto das pessoas, envolvendo o corpo e a proximidade física como aspectos centrais.
                </p>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Visão PNH</h4>
                <p className="text-sm text-foreground">
                  A PNH apresenta o acolhimento com o sentido de <strong>"estar com"</strong> - uma presença qualificada, atenta e responsável junto ao outro.
                </p>
              </div>
            </div>

            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-2">Acolhimento NÃO é Dizer Sim para Tudo</h4>
              <p className="text-sm text-foreground mb-2">
                Para a PNH, acolhimento <strong>não é, necessariamente, dizer sim para tudo</strong>. Sentir-se acolhido ou bem não significa apenas receber tudo o que se solicita.
              </p>
              <p className="text-sm text-foreground">
                O acolhimento possui uma dimensão de <strong>contenção e cuidado</strong>, mas também precisa de um delineamento e de um limite para que os fluxos e acessos do serviço possam tomar corpo, evitando que o sistema se torne caótico.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Tensionando Modelos Tradicionais</h4>
              <p className="text-sm text-muted-foreground">
                O acolhimento, como diretriz, tem a intencionalidade de <strong>tensionar as rupturas dos modelos tradicionais</strong>, que se limitam à triagem ou a um fluxo estritamente organizacional, preocupado apenas com sintomas e análises objetivas, sem considerar o sujeito em sua integralidade.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* As Três Dimensões do Acolhimento */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              As Três Dimensões do Acolhimento: Política, Ética e Estética
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-foreground mb-4">
                O acolhimento na PNH possui <strong>três dimensões</strong> que não estão dissociadas e se relacionam intimamente com a gestão e o cuidado:
              </p>
            </div>

            {/* Dimensão Política */}
            <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <Network className="h-4 w-4" />
                1. Dimensão Política
              </h4>
              <p className="text-sm text-foreground mb-3">
                A dimensão política do acolhimento envolve o <strong>compromisso com os coletivos ou indivíduos</strong>. Tudo que envolve, de alguma forma, algo para além da necessidade imediata do usuário naquele território, está na dimensão política.
              </p>
              
              <div className="bg-primary/20 p-3 rounded-md border border-primary/30 mt-2">
                <h5 className="font-semibold text-sm text-foreground mb-1">Trabalho em Rede</h5>
                <p className="text-xs text-foreground">
                  Esta dimensão requer a <strong>articulação interinstitucional</strong> (entre instituições) e <strong>em rede</strong>, reconhecendo que um tipo de acesso a um serviço irá repercutir no outro. O cuidado não se encerra em uma única instituição ou ponto de atenção.
                </p>
              </div>
            </div>

            {/* Dimensão Ética */}
            <div className="p-4 bg-secondary/10 rounded-md border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                <Heart className="h-4 w-4" />
                2. Dimensão Ética
              </h4>
              <p className="text-sm text-foreground mb-3">
                A dimensão ética está pautada no <strong>cuidado</strong> e na relação com o outro.
              </p>
              
              <div className="bg-secondary/20 p-3 rounded-md border border-secondary/30 mt-2">
                <h5 className="font-semibold text-sm text-foreground mb-1">Ética é a Diferença</h5>
                <p className="text-xs text-foreground">
                  <strong>Ética é a diferença; é permitir escutar a diferença.</strong> Trata-se de reconhecer e respeitar a singularidade de cada pessoa, suas necessidades específicas e sua forma única de estar no mundo. A escuta qualificada da diferença é o cerne dessa dimensão.
                </p>
              </div>
            </div>

            {/* Dimensão Estética */}
            <div className="p-4 bg-accent/20 rounded-md border border-accent/30">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                3. Dimensão Estética
              </h4>
              <p className="text-sm text-foreground mb-3">
                A dimensão estética é a <strong>valorização inventiva do cuidado</strong>. Refere-se à capacidade de criar e inovar nas práticas de saúde.
              </p>
              
              <div className="bg-accent/30 p-3 rounded-md border border-accent/50 mt-2">
                <h5 className="font-semibold text-sm text-foreground mb-2">Inovação e Criatividade</h5>
                <p className="text-xs text-foreground mb-2">
                  O acolhimento (assim como outros dispositivos da PNH, como a cogestão e a valorização do trabalhador) permite que o profissional, diante de uma situação, <strong>invente uma forma de fazer que seja inovadora</strong>.
                </p>
                <p className="text-xs text-foreground">
                  <strong>Trabalho Interprofissional:</strong> Essa dimensão estimula o profissional a não se limitar ao seu núcleo de saber, mas sim a olhar para o campo que se relaciona com diferentes profissionais e, a partir disso, fazer um tipo de intervenção pautada no que é possível naquele espaço.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20 mt-4">
              <p className="text-sm text-foreground italic">
                <strong>Importante:</strong> A forma de operar o acolhimento (seja no coletivo ou no individual) dependerá da implicação dos sujeitos envolvidos naquele espaço. Se o planejamento não estiver em sintonia com o que a comunidade deseja ou entende, podem ocorrer ruídos e desentendimentos, fazendo com que a proposta perca a força.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Acolhimento vs. Acesso */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Acolhimento vs. Acesso: Uma Diferenciação Crítica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Conceitos Distintos</h3>
              <p className="text-foreground mb-3">
                A PNH busca estabelecer uma diferenciação clara entre <strong>Acolhimento</strong> e <strong>Acesso</strong>, pois, frequentemente, esses conceitos são colocados juntos e confundidos.
              </p>
            </div>

            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-2">A Lacuna do Acesso</h4>
              <p className="text-sm text-foreground mb-2">
                Existe uma <strong>lacuna muito grande</strong> no Brasil em relação ao tema do acesso. Acesso pode se referir a espaços, oportunidades e situações diversas.
              </p>
              <p className="text-sm text-foreground">
                <strong>Exemplo na Saúde:</strong> Acessar a unidade de saúde (chegar fisicamente ao local) não é o mesmo que ter acesso à assistência e ao cuidado adequado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-accent/20 rounded-md border border-accent/30">
                <h4 className="font-semibold text-foreground mb-2">Acolhimento</h4>
                <p className="text-sm text-muted-foreground">
                  Refere-se à forma como o usuário é recebido, à qualidade da escuta, ao "estar com" o outro. É a dimensão relacional da chegada ao serviço.
                </p>
              </div>

              <div className="p-4 bg-accent/20 rounded-md border border-accent/30">
                <h4 className="font-semibold text-foreground mb-2">Acesso</h4>
                <p className="text-sm text-muted-foreground">
                  Refere-se à possibilidade efetiva de receber assistência qualificada, resolver problemas de saúde e ter continuidade do cuidado.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Acesso Qualificado</h4>
              <p className="text-sm text-muted-foreground mb-3">
                O usuário pode chegar ao serviço e ser acolhido, mas <strong>não necessariamente ter uma escuta qualificada ou um atendimento de qualidade suficiente</strong> para a sua necessidade. Nesses casos, ele não teve acesso à assistência qualificada.
              </p>
              <p className="text-sm text-muted-foreground">
                É possível ser acolhido sem ter acesso efetivo ao cuidado que se necessita.
              </p>
            </div>

            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">O Desafio da Continuidade</h4>
              <p className="text-sm text-foreground mb-3">
                Outro desafio importante do acesso é a <strong>continuidade de cuidados</strong>. O usuário pode receber um atendimento e não conseguir mais retornar ao serviço ou não ter uma referência clara, nem saber como funciona o fluxo do sistema (o que a PNH tenta alterar).
              </p>
              <p className="text-sm text-foreground">
                A falta de continuidade compromete a integralidade do cuidado e a efetividade do sistema de saúde.
              </p>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Cultura de Acesso</h4>
              <p className="text-sm text-foreground">
                Muitas pessoas preferem ir diretamente a pontos de atenção hospitalar em vez de procurar suas unidades de saúde de referência, por acreditarem que terão maior resolutividade. Se essa cultura permanece e o serviço de atenção primária não se mostra capaz de resolver, o distanciamento entre usuário e serviço aumenta, comprometendo a ordenação do cuidado pela atenção básica.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Resumo Prático */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Resumo Prático
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" data-testid="table-summary">
                <thead>
                  <tr className="bg-primary/10 border-b-2 border-primary/20">
                    <th className="p-3 text-left font-semibold text-foreground">Tópico</th>
                    <th className="p-3 text-left font-semibold text-foreground">Conceito Central</th>
                    <th className="p-3 text-left font-semibold text-foreground">Termos-Chave</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">PNH - Fundamento</td>
                    <td className="p-3 text-sm text-muted-foreground">
                      Alterar modos de atenção e processos de gestão
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">
                      Atenção e Gestão, SUS que dá certo
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Sustentabilidade PNH</td>
                    <td className="p-3 text-sm text-muted-foreground">
                      Sustenta-se nas relações entre os atores e não por lei
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">
                      Política de Relações, Sem decreto/resolução, Encontros produtivos (usuários, gestores, trabalhadores)
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Princípio Básico</td>
                    <td className="p-3 text-sm text-muted-foreground">
                      Aumentar o grau de comunicação entre os atores
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">
                      Transversalidade
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Conceito de Humanização</td>
                    <td className="p-3 text-sm text-muted-foreground">
                      O foco é humanizar as relações e os processos de trabalho
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">
                      Humanizar as relações, Não o homem, Serviço se coloca em análise
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Acolhimento (Diretriz)</td>
                    <td className="p-3 text-sm text-muted-foreground">
                      Visão de "estar com" e de contenção/delineamento
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">
                      Estar com, Não é dizer "sim para tudo"
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Dimensões do Acolhimento</td>
                    <td className="p-3 text-sm text-muted-foreground">
                      O acolhimento é um ato complexo com três eixos
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">
                      Política (Compromisso, Rede), Ética (Diferença, Escuta), Estética (Invenção, Inovação)
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Acolhimento vs. Acesso</td>
                    <td className="p-3 text-sm text-muted-foreground">
                      Receber no serviço é diferente de ter assistência qualificada
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">
                      Acesso à assistência qualificada, Continuidade de cuidados
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-accent/20 rounded-md border border-accent/30">
              <h4 className="font-semibold text-foreground mb-2">Mensagem-Chave</h4>
              <p className="text-sm text-muted-foreground">
                A PNH é uma política que se constrói nas relações cotidianas entre trabalhadores, gestores e usuários. 
                Humanizar não é tornar o ser humano mais humano, mas sim <strong>transformar os modos de fazer atenção 
                e gestão</strong>, colocando os diferentes atores em comunicação, respeitando diferenças, promovendo 
                inovação e garantindo tanto o acolhimento quanto o acesso efetivo ao cuidado qualificado e contínuo.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

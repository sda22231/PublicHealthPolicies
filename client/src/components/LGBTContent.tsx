import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Rainbow, Heart, Users, Shield, Scale, AlertCircle, Clock, FileText, BookOpen, Activity, Target, TrendingUp, UserCheck } from "lucide-react";

export default function LGBTContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="text-policy-title">
          Política Nacional de Saúde Integral LGBT
        </h2>
        <p className="text-lg text-muted-foreground" data-testid="text-policy-subtitle">
          Reconhecimento, equidade e direito à saúde para lésbicas, gays, bissexuais, travestis e transexuais
        </p>
      </div>

      <div className="space-y-8">
        {/* Contextualização e História */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Contextualização e História da Luta pelo Direito à Saúde LGBT
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-foreground mb-3">
                O direito à saúde no Brasil, assegurado pela Constituição Federal de 1988, resulta da intensa mobilização do Movimento da Reforma Sanitária. Nessa visão constitucional, a saúde é compreendida de forma ampliada — não se limitando apenas à assistência médico-sanitária (atendimento hospitalar quando doente), mas como resultado do acesso de pessoas e coletividades a bens e serviços públicos proporcionados pelas políticas sociais universais.
              </p>
              <p className="text-foreground">
                A Política Nacional de Saúde Integral de Lésbicas, Gays, Bissexuais, Travestis e Transexuais (LGBT) constitui um <strong>divisor de águas</strong> nas políticas públicas de saúde brasileiras. Ela marca historicamente o reconhecimento das demandas de uma população em situação de vulnerabilidade.
              </p>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                O Movimento Social e a Epidemia de HIV/Aids
              </h4>
              <p className="text-sm text-foreground mb-2">
                No final dos anos 1970, com o avanço da redemocratização brasileira, surgiram diversos movimentos sociais defendendo grupos específicos e liberdades sexuais. O <strong>Grupo Somos</strong> é reconhecido como precursor da luta homossexual.
              </p>
              <p className="text-sm text-foreground mb-2">
                Nos anos 1980, a visibilidade das questões de saúde da população LGBT ganhou força com o surgimento da epidemia de HIV/Aids. À época, o HIV/Aids estava fortemente associado aos gays. O Ministério da Saúde, apoiando as mobilizações da população homossexual masculina na prevenção da doença, utilizou estratégias em parceria com os movimentos sociais.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Com o tempo, o movimento, inicialmente majoritariamente masculino, incorporou lésbicas e travestis, ampliando o conjunto das demandas em saúde e conferindo à política um caráter transversal.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Rainbow className="h-4 w-4 text-primary" />
                Evolução da Representação Política
              </h4>
              <p className="text-sm text-foreground mb-2">
                Em <strong>2008</strong>, na Conferência Nacional de Gays, Lésbicas, Bissexuais, Travestis e Transexuais (GLBT), o movimento deliberou pela adoção da sigla <strong>LGBT</strong> (Lésbicas, Gays, Bissexuais, Travestis e Transexuais). Essa mudança formalizou a visibilidade política e social das mulheres dentro do movimento e reforçou o enfrentamento das desigualdades pautadas pelas questões de gênero.
              </p>
              <p className="text-sm text-foreground mb-2">
                Embora o movimento de travestis tenha se organizado em coletivos nos anos 90 (como a ASTRAL), e a causa transexual tenha sido incluída, as discussões sobre a homossexualidade feminina não tiveram força inicial, mantendo a invisibilidade política de lésbicas e mulheres bissexuais.
              </p>
              <p className="text-sm text-foreground">
                A atuação dos movimentos LGBT expandiu-se, envolvendo reivindicações de direitos civis, políticos, sociais e humanos.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Marcos Legais e Base Constitucional */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              Marcos Legais e Base Constitucional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative pl-8 space-y-6">
              <div className="relative">
                <div className="absolute left-[-2rem] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="absolute left-[-1.5rem] top-5 h-full w-0.5 bg-border" />
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary">2004</span>
                    <span className="font-semibold text-foreground">Brasil sem Homofobia</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Instituição do <strong>"Brasil sem Homofobia – Programa de Combate à Violência e à Discriminação"</strong>. No mesmo ano, o Ministério da Saúde criou o Comitê Técnico de Saúde da População GLTB, visando a construção de uma política específica para o SUS.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[-2rem] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="absolute left-[-1.5rem] top-5 h-full w-0.5 bg-border" />
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary">2006</span>
                    <span className="font-semibold text-foreground">Representação no CNS</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    O segmento LGBT conquistou representação no <strong>Conselho Nacional de Saúde (CNS)</strong>, permitindo um debate estratégico e permanente sobre orientação sexual e identidade de gênero e suas repercussões na saúde.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[-2rem] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="absolute left-[-1.5rem] top-5 h-full w-0.5 bg-border" />
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary">2007</span>
                    <span className="font-semibold text-foreground">13ª Conferência Nacional de Saúde</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A orientação sexual e a identidade de gênero foram formalmente incluídas na análise da <strong>determinação social da saúde</strong>.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-[-2rem] top-1 h-4 w-4 rounded-full border-2 border-secondary bg-background" />
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-secondary">2011</span>
                    <span className="font-semibold text-foreground">Portaria nº 2.836/2011</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Publicação da Portaria que institui oficialmente a <strong>Política Nacional de Saúde Integral LGBT</strong>, aprovada pelo CNS em 2009.
                  </p>
                  <div className="bg-secondary/10 p-3 rounded-md border border-secondary/20">
                    <p className="text-sm font-medium text-foreground">
                      Esta política é um documento norteador e legitimador das necessidades da população LGBT, em conformidade com os postulados de equidade previstos na Constituição Federal. Sua formulação seguiu as diretrizes do Programa Brasil sem Homofobia e do Programa Nacional de Direitos Humanos (PNDH 3).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Equidade no SUS */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              A Importância da Equidade no SUS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">O que é Equidade?</h4>
              <p className="text-sm text-foreground">
                Equidade significa <strong>tratar os desiguais de forma desigual</strong>, investindo mais onde há maior necessidade e vulnerabilidade, com o objetivo de reduzir as iniquidades (desigualdades injustas e evitáveis).
              </p>
            </div>
            <p className="text-foreground">
              A Política LGBT é uma iniciativa clara para a construção de mais equidade no Sistema Único de Saúde (SUS). Busca reorientar as ações de saúde, espelhando o Programa Mais Saúde – Direito de Todos (2008), que visa ampliar o acesso e a qualidade dos serviços, destacando a necessidade de enfrentar desigualdades em saúde para grupos populacionais como negros, quilombolas, LGBT, ciganos, entre outros.
            </p>
          </CardContent>
        </Card>

        {/* Determinação Social da Saúde */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Orientação Sexual e Identidade de Gênero na Determinação Social da Saúde
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Compreendendo a Determinação Social</h4>
              <p className="text-sm text-foreground mb-2">
                A determinação social da saúde é a compreensão de que o processo saúde-doença de pessoas e coletividades é influenciado por <strong>fatores sociais amplos</strong>, não apenas biológicos.
              </p>
              <p className="text-sm text-muted-foreground">
                Fatores como exclusão social, desemprego, falta de acesso à moradia, alimentação, educação, lazer e cultura interferem diretamente na qualidade de vida e de saúde.
              </p>
            </div>

            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Efeitos da Discriminação - As Homofobias
              </h4>
              <p className="text-sm text-foreground mb-3">
                No contexto LGBT, a determinação social exige o reconhecimento de que todas as formas de discriminação devem ser consideradas como causas de sofrimento e doença.
              </p>
              <p className="text-sm text-foreground mb-2">
                A Política usa o termo <strong>"homofobias"</strong> de forma agregada para incluir:
              </p>
              <ul className="space-y-1 text-sm text-foreground ml-4">
                <li>• <strong>Lesbofobia</strong></li>
                <li>• <strong>Gayfobia</strong></li>
                <li>• <strong>Bifobia</strong></li>
                <li>• <strong>Travestifobia</strong></li>
                <li>• <strong>Transfobia</strong></li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3 italic">
                É crucial entender que essas formas de preconceito raramente ocorrem isoladamente. Elas se reforçam por outros preconceitos, como <strong>machismo, racismo e misoginia</strong>.
              </p>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <p className="text-sm font-semibold text-foreground">
                O maior e mais profundo sofrimento da população LGBT é aquele decorrente da discriminação e do preconceito. As repercussões e consequências desses preconceitos compõem o principal objeto desta Política.
              </p>
              <p className="text-xs text-muted-foreground mt-2 italic">
                A superação do preconceito é considerada mais difícil do que a reestruturação de serviços, pois exige uma mudança coletiva e individual de valores.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Desigualdades e Vulnerabilidades Específicas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Desigualdades e Vulnerabilidades Específicas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-foreground">
              O reconhecimento das homofobias na determinação social levou a uma análise das necessidades de cada subgrupo:
            </p>

            <div>
              <h4 className="font-semibold text-secondary mb-3">Lésbicas e Mulheres Bissexuais</h4>
              <div className="space-y-3">
                <div className="bg-secondary/10 p-3 rounded-md border border-secondary/20">
                  <p className="text-sm text-foreground mb-2">
                    Dados evidenciam as desigualdades de acesso:
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Cerca de <strong>40%</strong> das mulheres que procuram atendimento de saúde <strong>não revelam sua orientação sexual</strong></span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Entre lésbicas e mulheres bissexuais, a cobertura na realização do exame preventivo de câncer cérvico uterino (Papanicolau) nos últimos três anos é de <strong>66,7%</strong>, consideravelmente menor que a cobertura de <strong>89,7%</strong> entre mulheres heterossexuais</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Historicamente, lésbicas foram inicialmente excluídas das ações de prevenção da aids, pois eram vistas como um grupo de baixo risco</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-secondary mb-3">Gays e Homens Bissexuais</h4>
              <div className="space-y-3">
                <div className="bg-secondary/10 p-3 rounded-md border border-secondary/20">
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>O Plano Nacional de Enfrentamento de Aids e das DST (2008) aponta <strong>maior vulnerabilidade ao vírus HIV</strong> para gays e bissexuais masculinos</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Essa vulnerabilidade está associada diretamente à <strong>homofobia e à segregação</strong>, especialmente entre os jovens. A impossibilidade de manifestar a orientação sexual em ambientes familiares ou públicos leva, em muitos casos, ao exercício clandestino da sexualidade em situações desprovidas de condições favoráveis à prevenção</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>O Brasil registra alta violência contra essa população. Entre <strong>2003 e 2005</strong>, ocorreram <strong>360 homicídios</strong> de gays, lésbicas e travestis, com a maior incidência de assassinatos acometendo principalmente gays na <strong>Região Nordeste</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-secondary mb-3">Travestis e Transexuais</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Este grupo enfrenta problemas de saúde mais complexos e demandas numerosas:
              </p>
              <div className="space-y-3">
                <div className="bg-secondary/10 p-3 rounded-md border border-secondary/20">
                  <h5 className="font-semibold text-sm text-foreground mb-2">Vulnerabilidade na Rua</h5>
                  <p className="text-xs text-foreground">
                    A <strong>prostituição</strong>, que para muitas travestis representa sobrevivência financeira e possibilidade de pertencimento social, é também um espaço de consumo de drogas, <strong>silicone industrial</strong>, hormônios, e maior risco de DST/Aids e violência.
                  </p>
                </div>

                <div className="bg-secondary/10 p-3 rounded-md border border-secondary/20">
                  <h5 className="font-semibold text-sm text-foreground mb-2">Saúde Mental</h5>
                  <p className="text-xs text-foreground">
                    Há evidências de frequentes casos de <strong>depressão</strong>, crises de ansiedade e sensações de pânico entre travestis.
                  </p>
                </div>

                <div className="bg-secondary/10 p-3 rounded-md border border-secondary/20">
                  <h5 className="font-semibold text-sm text-foreground mb-2">Riscos de Uso Indiscriminado de Substâncias</h5>
                  <p className="text-xs text-foreground mb-2">
                    O uso de <strong>silicone industrial</strong> para feminização corporal é uma causa de morte divulgada pela imprensa, justificando a necessidade de protocolos clínicos do SUS.
                  </p>
                  <p className="text-xs text-foreground">
                    Há uma reconhecida relação entre o uso indiscriminado e sem orientação de hormônios femininos e a ocorrência de <strong>acidentes vasculares cerebrais (AVC), flebites, infarto do miocárdio</strong> e sequelas.
                  </p>
                </div>

                <div className="bg-secondary/10 p-3 rounded-md border border-secondary/20">
                  <h5 className="font-semibold text-sm text-foreground mb-2">Processo Transexualizador</h5>
                  <p className="text-xs text-foreground">
                    O sofrimento intenso ao não se reconhecerem no corpo biológico pode levar a distúrbios psicológicos, automutilação e suicídio. O <strong>Processo Transexualizador no SUS</strong> (readequação cirúrgica genital) insere-se na Política LGBT para garantir esse cuidado.
                  </p>
                </div>

                <div className="bg-secondary/10 p-3 rounded-md border border-secondary/20">
                  <h5 className="font-semibold text-sm text-foreground mb-2">Transexuais Masculinos</h5>
                  <p className="text-xs text-foreground">
                    Demandam acesso a procedimentos de <strong>mastectomia e histerectomia</strong>. A automedicação com doses elevadas de hormônios masculinizantes também é um grave agravante à saúde.
                  </p>
                </div>

                <div className="bg-secondary/10 p-3 rounded-md border border-secondary/20">
                  <h5 className="font-semibold text-sm text-foreground mb-2">Nome Social</h5>
                  <p className="text-xs text-foreground">
                    A falta de respeito ao nome escolhido configura-se como uma <strong>violência diária</strong>. A inclusão da garantia do uso do nome social para travestis e transexuais na Carta dos Direitos dos Usuários da Saúde foi uma consequência direta desta Política.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fundamentação Legal */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Fundamentação Legal da Política
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              A Política está solidamente embasada na legislação brasileira:
            </p>

            <div className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">1. Constituição Federal de 1988 (CF/88)</h4>
                <p className="text-sm text-foreground mb-2">
                  Garante a cidadania e a dignidade da pessoa humana (<strong>art. 1º, inc. II e III</strong>), e estabelece como objetivo fundamental da República Federativa do Brasil a promoção do bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação (<strong>art. 3º, inc. IV</strong>).
                </p>
                <p className="text-sm text-muted-foreground">
                  O direito à saúde integra os direitos sociais.
                </p>
              </div>

              <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">2. Princípios do SUS (Lei nº 8.080/90 e 8.142/90)</h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Universalidade do acesso:</strong> Garantia de acesso aos serviços em todos os níveis de assistência, sem preconceitos ou privilégios de qualquer espécie</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Integralidade da atenção:</strong> Conjunto articulado e contínuo de ações preventivas e curativas, individuais e coletivas, em todos os níveis de complexidade</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Participação da comunidade:</strong> Institucionalizada por meio de conselhos e conferências de saúde</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Marca e Objetivos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Marca e Objetivos da Política Nacional de Saúde Integral LGBT
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">Marca (o que define a política)</h4>
              <p className="text-sm text-foreground">
                O reconhecimento de que a <strong>discriminação por orientação sexual e identidade de gênero incide na determinação social da saúde</strong>, gerando sofrimento e adoecimento decorrente do preconceito e do estigma social.
              </p>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Objetivo Geral</h4>
              <p className="text-sm text-foreground mb-2">
                Promover a saúde integral de lésbicas, gays, bissexuais, travestis e transexuais, visando:
              </p>
              <ul className="space-y-1 text-sm text-foreground">
                <li>• Eliminar a discriminação e o preconceito institucional</li>
                <li>• Contribuir para a redução das desigualdades</li>
                <li>• Consolidar o SUS como sistema universal, integral e equitativo</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Objetivos Específicos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Objetivos Específicos da Política
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-4">
              A Política Nacional de Saúde Integral LGBT define <strong>24 objetivos específicos</strong> (Art. 2º da Portaria nº 2.836/2011), focados na gestão, no acesso, na qualificação de serviços, e no combate à discriminação:
            </p>

            <div className="space-y-3">
              <div className="bg-accent/10 p-3 rounded-md border border-accent/20">
                <h5 className="font-semibold text-sm text-foreground mb-1">Gestão e Equidade</h5>
                <p className="text-xs text-muted-foreground">
                  Instituir mecanismos de gestão para atingir maior equidade no SUS, considerando especificidades de raça, cor, etnia e território. Fortalecer a participação de representações da população LGBT nos Conselhos e Conferências de Saúde.
                </p>
              </div>

              <div className="bg-accent/10 p-3 rounded-md border border-accent/20">
                <h5 className="font-semibold text-sm text-foreground mb-1">Acesso e Qualificação</h5>
                <p className="text-xs text-muted-foreground">
                  Ampliar o acesso da população LGBT aos serviços de saúde. Qualificar a rede de serviços do SUS para o cuidado integral.
                </p>
              </div>

              <div className="bg-accent/10 p-3 rounded-md border border-accent/20">
                <h5 className="font-semibold text-sm text-foreground mb-1">Informação e Pesquisa</h5>
                <p className="text-xs text-muted-foreground">
                  Qualificar a informação em saúde (coleta, processamento, análise) sobre a população LGBT, incluindo recortes étnico-racial e territorial. Realizar estudos e pesquisas relacionados às necessidades de saúde.
                </p>
              </div>

              <div className="bg-accent/10 p-3 rounded-md border border-accent/20">
                <h5 className="font-semibold text-sm text-foreground mb-1">Atenção Específica T/T</h5>
                <p className="text-xs text-muted-foreground">
                  Garantir acesso ao Processo Transexualizador. Promover iniciativas voltadas à redução de riscos e atenção a problemas decorrentes do uso prolongado de hormônios femininos e masculinos. Reduzir danos relacionados ao uso excessivo de medicamentos, drogas e fármacos.
                </p>
              </div>

              <div className="bg-accent/10 p-3 rounded-md border border-accent/20">
                <h5 className="font-semibold text-sm text-foreground mb-1">Saúde Mental e Comportamental</h5>
                <p className="text-xs text-muted-foreground">
                  Reduzir problemas relacionados à saúde mental (drogadição, alcoolismo, depressão e suicídio), atuando na prevenção, promoção e recuperação.
                </p>
              </div>

              <div className="bg-accent/10 p-3 rounded-md border border-accent/20">
                <h5 className="font-semibold text-sm text-foreground mb-1">Prevenção de Doenças</h5>
                <p className="text-xs text-muted-foreground">
                  Oferecer atenção integral para DSTs, HIV, AIDS e hepatites virais. Prevenir novos casos de cânceres ginecológicos (cérvico uterino e de mamas) entre lésbicas e mulheres bissexuais. Prevenir novos casos de câncer de próstata entre gays, homens bissexuais, travestis e transexuais.
                </p>
              </div>

              <div className="bg-accent/10 p-3 rounded-md border border-accent/20">
                <h5 className="font-semibold text-sm text-foreground mb-1">Direitos e Combate à Discriminação</h5>
                <p className="text-xs text-muted-foreground">
                  Garantir os direitos sexuais e reprodutivos. Atuar na eliminação do preconceito e da discriminação nos serviços de saúde. Garantir o uso do nome social de travestis e transexuais. Incluir ações educativas para a promoção da autoestima e eliminação do preconceito.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Diretrizes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Diretrizes da Política
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              As diretrizes orientam os planos, programas e projetos, focando no respeito e na transformação social:
            </p>

            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-foreground mb-1">1. Respeito aos Direitos Humanos</h5>
                <p className="text-sm text-muted-foreground">
                  Contribuir para a eliminação do estigma e da discriminação decorrentes das homofobias (lesbofobia, gayfobia, bifobia, travestifobia e transfobia).
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-foreground mb-1">2. Inclusão e Articulação</h5>
                <p className="text-sm text-muted-foreground">
                  Contribuir para a promoção da cidadania da população LGBT por meio da articulação com diversas políticas sociais (educação, trabalho, segurança).
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-foreground mb-1">3. Implementação de Ações Específicas</h5>
                <p className="text-sm text-muted-foreground">
                  Implementar ações, serviços e procedimentos no SUS com vistas ao alívio do sofrimento relacionado à inadequação de identidade, corporal e psíquica em pessoas transexuais e travestis.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-foreground mb-1">4. Educação Permanente</h5>
                <p className="text-sm text-muted-foreground">
                  Incluir a temática da orientação sexual e identidade de gênero nos processos de educação permanente desenvolvidos pelo SUS para trabalhadores, conselheiros de saúde e lideranças sociais.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-foreground mb-1">5. Fortalecimento da Participação Social</h5>
                <p className="text-sm text-muted-foreground">
                  Fortalecer a representação do movimento social organizado nos Conselhos, Conferências e demais instâncias de participação.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Responsabilidades Institucionais */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-primary" />
              Responsabilidades e Atribuições Institucionais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-foreground">
              A implementação da Política exige uma <strong>gestão solidária e compartilhada</strong> entre as três esferas de governo (União, Estados e Municípios), reforçando a transversalidade da Política.
            </p>

            <div>
              <h4 className="font-semibold text-secondary mb-2">Articulação Intersetorial</h4>
              <p className="text-sm text-muted-foreground">
                O Ministério da Saúde (MS) deve promover articulação com as demais políticas, garantindo a inclusão social e a eliminação da discriminação. A contribuição da Política para a cidadania exige a articulação com áreas como educação, trabalho e segurança.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Competências do Ministério da Saúde (Gestor Federal)</h4>
                <ul className="space-y-1 text-sm text-foreground">
                  <li>• Coordenar a implementação da Política em âmbito nacional</li>
                  <li>• Apoiar Estados e Municípios na implementação</li>
                  <li>• Promover a articulação com outras políticas e programas</li>
                  <li>• Financiar ações voltadas à saúde integral LGBT</li>
                  <li>• Estimular a produção de conhecimento científico</li>
                  <li>• Desenvolver estratégias de comunicação e educação permanente</li>
                  <li>• Monitorar e avaliar a implementação da Política</li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Competências das Secretarias Estaduais de Saúde</h4>
                <ul className="space-y-1 text-sm text-foreground">
                  <li>• Coordenar a implementação da Política no âmbito estadual</li>
                  <li>• Apoiar os municípios na implementação</li>
                  <li>• Promover a articulação intersetorial em nível estadual</li>
                  <li>• Garantir a qualificação dos profissionais de saúde</li>
                  <li>• Monitorar e avaliar as ações no território estadual</li>
                  <li>• Apoiar a realização de estudos e pesquisas</li>
                </ul>
              </div>

              <div className="bg-accent/10 p-4 rounded-md border border-accent/20">
                <h4 className="font-semibold text-foreground mb-2">Competências das Secretarias Municipais de Saúde</h4>
                <ul className="space-y-1 text-sm text-foreground">
                  <li>• Implementar a Política no âmbito municipal</li>
                  <li>• Garantir o acesso da população LGBT aos serviços de saúde</li>
                  <li>• Promover a qualificação dos profissionais da atenção básica</li>
                  <li>• Desenvolver ações de promoção e prevenção em saúde</li>
                  <li>• Garantir o uso do nome social nos serviços de saúde</li>
                  <li>• Fortalecer a participação social LGBT</li>
                  <li>• Monitorar e avaliar as ações implementadas</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plano Operativo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Plano Operativo da Política Nacional de Saúde Integral LGBT (2012-2015)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-foreground mb-4">
              O Plano Operativo estabelece ações concretas organizadas em quatro eixos estratégicos:
            </p>

            <div className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Eixo 1: Acesso da População LGBT à Atenção Integral à Saúde</h4>
                <p className="text-sm text-foreground mb-2">Ações prioritárias:</p>
                <ul className="space-y-1 text-xs text-foreground">
                  <li>• Qualificar o acesso aos serviços de atenção básica</li>
                  <li>• Ampliar o acesso ao Processo Transexualizador</li>
                  <li>• Garantir o acesso a cirurgias de redesignação sexual</li>
                  <li>• Implementar protocolos clínicos para uso seguro de hormônios</li>
                  <li>• Ampliar o acesso a procedimentos de mastectomia e histerectomia para transexuais masculinos</li>
                  <li>• Garantir atendimento humanizado e livre de discriminação</li>
                  <li>• Incluir o quesito orientação sexual e identidade de gênero nos formulários e sistemas de informação</li>
                  <li>• Assegurar o uso do nome social em todas as unidades de saúde</li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Eixo 2: Ações de Promoção e Vigilância em Saúde</h4>
                <p className="text-sm text-foreground mb-2">Ações prioritárias:</p>
                <ul className="space-y-1 text-xs text-foreground">
                  <li>• Desenvolver estratégias de prevenção de DST/AIDS e hepatites virais</li>
                  <li>• Promover ações de prevenção de cânceres ginecológicos entre lésbicas e mulheres bissexuais</li>
                  <li>• Promover ações de prevenção de câncer de próstata entre gays, bissexuais, travestis e transexuais</li>
                  <li>• Desenvolver ações de saúde mental, prevenindo depressão, suicídio e uso abusivo de álcool e drogas</li>
                  <li>• Implementar ações de redução de danos relacionados ao uso de silicone industrial</li>
                  <li>• Monitorar e prevenir violências e agressões contra a população LGBT</li>
                  <li>• Promover o envelhecimento ativo e saudável da população LGBT idosa</li>
                </ul>
              </div>

              <div className="bg-accent/10 p-4 rounded-md border border-accent/20">
                <h4 className="font-semibold text-foreground mb-2">Eixo 3: Educação Permanente e Educação Popular em Saúde</h4>
                <p className="text-sm text-foreground mb-2">Ações prioritárias:</p>
                <ul className="space-y-1 text-xs text-foreground">
                  <li>• Incluir o tema orientação sexual e identidade de gênero nos processos de formação e educação permanente dos trabalhadores de saúde</li>
                  <li>• Sensibilizar gestores e profissionais de saúde para o atendimento humanizado e livre de discriminação</li>
                  <li>• Capacitar profissionais para a implementação do Processo Transexualizador</li>
                  <li>• Produzir e distribuir materiais educativos sobre saúde LGBT</li>
                  <li>• Promover ações de educação popular em saúde junto à população LGBT</li>
                  <li>• Fortalecer a participação de representantes LGBT nos Conselhos de Saúde</li>
                  <li>• Promover espaços de diálogo entre profissionais de saúde e movimento LGBT</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Eixo 4: Monitoramento e Avaliação</h4>
                <p className="text-sm text-foreground mb-2">Ações prioritárias:</p>
                <ul className="space-y-1 text-xs text-foreground">
                  <li>• Incluir os campos orientação sexual e identidade de gênero nos sistemas de informação em saúde</li>
                  <li>• Desenvolver indicadores para monitorar o acesso e a qualidade da atenção à saúde LGBT</li>
                  <li>• Realizar estudos e pesquisas sobre as condições de saúde da população LGBT</li>
                  <li>• Monitorar a implementação da Política nos estados e municípios</li>
                  <li>• Avaliar o impacto das ações desenvolvidas</li>
                  <li>• Produzir e divulgar relatórios periódicos sobre a situação de saúde LGBT</li>
                  <li>• Fortalecer a participação LGBT no monitoramento e avaliação da Política</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resumo Prático */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Resumo Prático da Política Nacional de Saúde Integral LGBT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-border p-3 text-left font-semibold text-sm">Aspecto</th>
                    <th className="border border-border p-3 text-left font-semibold text-sm">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">Ano de Instituição</td>
                    <td className="border border-border p-3 text-sm">2011 (Portaria nº 2.836)</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">População-Alvo</td>
                    <td className="border border-border p-3 text-sm">Lésbicas, Gays, Bissexuais, Travestis e Transexuais</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">Base Legal</td>
                    <td className="border border-border p-3 text-sm">CF/88 (art. 1º inc. II e III, art. 3º inc. IV), Lei 8.080/90, Lei 8.142/90</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">Marca da Política</td>
                    <td className="border border-border p-3 text-sm">Reconhecimento de que discriminação por orientação sexual e identidade de gênero incide na determinação social da saúde</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">Objetivo Geral</td>
                    <td className="border border-border p-3 text-sm">Promover a saúde integral LGBT, eliminar discriminação e consolidar o SUS como sistema universal, integral e equitativo</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">Princípios do SUS</td>
                    <td className="border border-border p-3 text-sm">Universalidade, Integralidade, Equidade, Participação Social</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">Formas de Discriminação</td>
                    <td className="border border-border p-3 text-sm">Lesbofobia, Gayfobia, Bifobia, Travestifobia, Transfobia (reforçadas por machismo, racismo, misoginia)</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">Vulnerabilidades Lésbicas</td>
                    <td className="border border-border p-3 text-sm">40% não revelam orientação sexual; 66,7% vs 89,7% cobertura Papanicolau</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">Vulnerabilidades Gays</td>
                    <td className="border border-border p-3 text-sm">Maior vulnerabilidade HIV; 360 homicídios (2003-2005); maior incidência Nordeste</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">Vulnerabilidades T/T</td>
                    <td className="border border-border p-3 text-sm">Prostituição, silicone industrial, depressão, AVC/infarto, necessidade de Processo Transexualizador, mastectomia, histerectomia, nome social</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">Eixos do Plano Operativo (2012-2015)</td>
                    <td className="border border-border p-3 text-sm">
                      1. Acesso à Atenção Integral<br/>
                      2. Promoção e Vigilância em Saúde<br/>
                      3. Educação Permanente e Popular<br/>
                      4. Monitoramento e Avaliação
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">Diretrizes Principais</td>
                    <td className="border border-border p-3 text-sm">Respeito aos Direitos Humanos, Inclusão, Ações Específicas, Educação Permanente, Participação Social</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">Avanços Importantes</td>
                    <td className="border border-border p-3 text-sm">Processo Transexualizador no SUS, garantia do uso do nome social, inclusão em sistemas de informação</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="border border-border p-3 font-medium text-sm">Gestão Compartilhada</td>
                    <td className="border border-border p-3 text-sm">União (MS), Estados (SES) e Municípios (SMS) com competências específicas e complementares</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-accent/20 p-4 rounded-md border border-accent/30">
              <p className="text-sm text-foreground font-semibold mb-2">
                Mensagem Central da Política:
              </p>
              <p className="text-sm text-muted-foreground">
                A Política Nacional de Saúde Integral LGBT representa o compromisso do Estado brasileiro em reconhecer e enfrentar as iniquidades em saúde decorrentes da discriminação por orientação sexual e identidade de gênero. Seu maior desafio não é apenas a reestruturação de serviços, mas a transformação cultural que elimine preconceitos e promova o respeito à diversidade, garantindo que o SUS seja verdadeiramente universal, integral e equitativo para toda a população.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, Clock, BookOpen, AlertCircle, Users, Target, Heart, Activity, Shield, Stethoscope } from "lucide-react";

export default function PNAISHContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="text-policy-title">
          Política Nacional de Atenção Integral à Saúde do Homem (PNAISH)
        </h2>
        <p className="text-lg text-muted-foreground" data-testid="text-policy-subtitle">
          Tirando o homem da invisibilidade e promovendo o acesso e o cuidado integral
        </p>
      </div>

      <div className="space-y-8">
        {/* Contexto e Origem */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Contexto e Origem da PNAISH
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Lançamento e Processo de Construção</h3>
              <p className="text-foreground mb-3">
                A Política Nacional de Atenção Integral à Saúde do Homem (PNAISH) foi lançada oficialmente em <strong>2009</strong>, estabelecida no âmbito do Sistema Único de Saúde (SUS).
              </p>
              <p className="text-foreground mb-3">
                Sua criação não foi um processo rápido; ela surgiu após quase <strong>dois anos de discussão e debate</strong>. Esse processo de construção envolveu ativamente diversos segmentos do governo e também o controle social.
              </p>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2">Resultado do Debate Coletivo</h4>
              <p className="text-foreground">
                A PNAISH é, portanto, o produto desse amplo debate, pensando em diretrizes e princípios que fossem capazes de atender efetivamente às demandas específicas da população masculina.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Objetivo e Instrumentalização */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Objetivo da PNAISH e Instrumentalização Profissional
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Objetivo Principal</h3>
              <p className="text-foreground mb-3">
                O principal objetivo da PNAISH é garantir que os profissionais de saúde na linha de frente — a chamada <strong>"ponta"</strong> do sistema — estejam instrumentalizados e preparados para lidar com as temáticas pertinentes relacionadas à saúde do homem.
              </p>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Alinhamento das Práticas</h4>
              <p className="text-foreground mb-2">
                Essa instrumentalização visa aprimorar e alinhar as práticas de rotina diária desses profissionais com aquilo que está sendo planejado na política em relação aos seus eixos.
              </p>
              <p className="text-sm text-muted-foreground">
                O curso de Ensino a Distância (EAD) em saúde integral do homem, fruto da parceria entre o Ministério da Saúde e a Universidade Federal de Santa Catarina (UFSC), exemplifica essa estratégia de fortalecimento do conhecimento e instrumentalização da ponta para que os profissionais possam trabalhar com essas informações no território onde atuam.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2 text-secondary">Tirando o Homem da Invisibilidade</h4>
              <p className="text-foreground mb-2">
                A PNAISH exige que o olhar do profissional de saúde seja direcionado para a população masculina, buscando <strong>tirar esse homem da invisibilidade</strong>.
              </p>
              <p className="text-foreground">
                Para isso, é essencial <strong>melhorar a ambiência local</strong> do serviço de saúde, de modo que o homem se reconheça como um <strong>sujeito do cuidado</strong>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Foco da Política */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              O Foco da Política: Acesso, Acolhimento e Descentralização
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-4">
              A PNAISH estabeleceu diretrizes e princípios focados em três pilares principais para garantir o atendimento às demandas do homem:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">1. Acesso e Acolhimento</h4>
                <p className="text-sm text-foreground">
                  Pensando em como o homem pode acessar o serviço de saúde e como ele deve ser recebido.
                </p>
              </div>

              <div className="p-4 bg-primary/10 rounded-md border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">2. Descentralização da Assistência</h4>
                <p className="text-sm text-foreground">
                  A política busca a distribuição das ações de assistência dentro da rede do SUS, garantindo que os serviços estejam disponíveis nos diferentes níveis de atenção.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cinco Eixos - Introdução */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Os Cinco Eixos Estruturantes da PNAISH
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              A política é organizada em <strong>cinco eixos temáticos fundamentais</strong> que orientam as ações e as práticas dos profissionais de saúde. Os profissionais precisam ter referências de como trabalhar em cada um desses eixos.
            </p>
          </CardContent>
        </Card>

        {/* Eixo 1: Acesso e Acolhimento */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-secondary" />
              Eixo 1: Acesso e Acolhimento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              Este eixo é central para superar as barreiras que impedem o homem de buscar o serviço de saúde.
            </p>

            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">Objetivo</h4>
              <p className="text-foreground">
                Quer pensar em como os profissionais de saúde podem acolher esse homem e, inversamente, como o homem pode acessar o serviço de saúde.
              </p>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2">Estratégia Prática: Horário Ampliado</h4>
              <p className="text-foreground">
                Uma das estratégias pensadas é a possibilidade de oferecer um <strong>horário ampliado do serviço</strong>, reconhecendo que a rotina de trabalho masculina pode ser um obstáculo para o acesso em horários comerciais tradicionais.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Eixo 2: Paternidade e Cuidado */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-secondary" />
              Eixo 2: Paternidade e Cuidado
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              Este eixo foca na dimensão social e familiar da saúde do homem.
            </p>

            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">Objetivo</h4>
              <p className="text-foreground">
                Promover a melhoria do vínculo do pai com a esposa e o filho.
              </p>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Estratégia Principal: Pré-Natal do Parceiro</h4>
              <p className="text-foreground mb-2">
                O foco central deste eixo é a estratégia do <strong>pré-natal do parceiro</strong>.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Duplo Cuidado</h4>
              <p className="text-foreground mb-2">
                O pré-natal do parceiro é uma estratégia que visa cuidar da saúde do homem, trabalhando questões como a <strong>sífilis</strong> e fortalecendo o <strong>vínculo que esse homem terá com a família</strong>.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Permite o acesso a exames e orientações</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Trabalha questões como a sífilis (prevenção da transmissão vertical e tratamento)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Promove a saúde do homem enquanto fortalece vínculos familiares</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Eixo 3: Doenças Prevalentes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-secondary" />
              Eixo 3: Doenças Prevalentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              Este eixo aborda o manejo e a prevenção das principais condições de saúde que afetam a população masculina.
            </p>

            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">Foco Principal</h4>
              <p className="text-foreground">
                Trabalhar as <strong>doenças crônicas</strong>.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Articulação e Abrangência</h4>
              <p className="text-foreground mb-2">
                Além das doenças crônicas, o eixo se articula com outras áreas do Ministério da Saúde que já atuam na <strong>redução de danos</strong>.
              </p>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2">Promoção e Prevenção</h4>
              <p className="text-foreground mb-2">
                O objetivo é garantir a qualidade de vida do homem, seja na promoção da saúde ou na prevenção.
              </p>
              <p className="text-sm text-muted-foreground">
                Exemplos: Critérios relacionados à <strong>obesidade</strong> e à <strong>alimentação</strong> são incluídos neste eixo.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Exemplos Práticos de Ações</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Ações preventivas e de manejo de doenças crônicas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Trabalho com temas como obesidade e alimentação</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Ações voltadas para mitigar os riscos associados ao uso de substâncias</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Articulação com a redução de danos em conjunto com o tratamento de doenças crônicas</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Eixo 4: Violência e Acidentes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-destructive" />
              Eixo 4: Violência e Acidentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              Este eixo trata das causas externas e dos fatores sociais que comprometem a saúde e a segurança masculina.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-2">Prevenção de Violências</h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span>Prevenção do <strong>suicídio</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span><strong>Violência doméstica</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span>Violência por parceiros íntimos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span>Prevenção da <strong>violência contra grupos LGBT</strong></span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-destructive/10 rounded-md border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-2">Causas Externas</h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span>Acidentes evitáveis</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span><strong>Acidentes de trânsito</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span>Outras causas externas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Repensar as Masculinidades</h4>
              <p className="text-foreground mb-2">
                O eixo busca <strong>repensar as masculinidades</strong>, visando a construção de uma nova realidade cultural em que esses homens possam se espelhar e modificar comportamentos de risco.
              </p>
              <p className="text-sm text-muted-foreground">
                Tradicionalmente, modelos rígidos de masculinidade podem levar a comportamentos de risco, resistência à busca por cuidado ou atos de violência. Incluir a atenção à violência contra grupos LGBT reconhece que as vulnerabilidades à violência e a necessidade de saúde abrangem todos os homens, e que o serviço deve ser inclusivo e trabalhar contra os padrões culturais (incluindo a homofobia e transfobia) que geram violência, cumprindo o mandato de atendimento integral.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Eixo 5: Saúde Sexual e Reprodutiva */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-secondary" />
              Eixo 5: Saúde Sexual e Saúde Reprodutiva
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground mb-3">
              Este eixo abrange a saúde e os direitos relacionados à sexualidade e à reprodução.
            </p>

            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">Foco Principal</h4>
              <p className="text-foreground">
                Trabalhar a questão dos <strong>direitos sexuais</strong> e <strong>direitos reprodutivos</strong>, considerando a <strong>perspectiva de gênero</strong>.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Condições Específicas</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Disfunções eréteis</strong></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Diversos tipos de cânceres</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/20 p-4 rounded-md border border-accent/30">
              <h4 className="font-semibold text-primary mb-2">Destaque Especial</h4>
              <p className="text-foreground">
                É dado um destaque especial ao <strong>câncer de pênis</strong>, que é notado como algo prevalente na população masculina.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Resumo Prático - Tabela */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Resumo Prático
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10 border-b-2 border-primary/20">
                    <th className="text-left p-3 font-semibold text-foreground">Tópico</th>
                    <th className="text-left p-3 font-semibold text-foreground">Conceito Central</th>
                    <th className="text-left p-3 font-semibold text-foreground">Termos-Chave</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Origem da PNAISH</td>
                    <td className="p-3 text-sm text-foreground">Criada em 2009 após amplo debate com segmentos do governo e controle social.</td>
                    <td className="p-3 text-sm text-muted-foreground">Diretrizes e Princípios, 2009.</td>
                  </tr>
                  <tr className="hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Objetivo Geral</td>
                    <td className="p-3 text-sm text-foreground">Instrumentalizar profissionais da ponta para alinhar a prática à política e tirar o homem da invisibilidade.</td>
                    <td className="p-3 text-sm text-muted-foreground">Instrumentalizar a ponta, Ambiência local, Sujeito do cuidado.</td>
                  </tr>
                  <tr className="hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Pilares da Assistência</td>
                    <td className="p-3 text-sm text-foreground">Foco em garantir o acesso e a distribuição de serviços na rede SUS.</td>
                    <td className="p-3 text-sm text-muted-foreground">Acesso e Acolhimento, Descentralização da assistência.</td>
                  </tr>
                  <tr className="hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Eixo 1</td>
                    <td className="p-3 text-sm text-foreground">Acesso e Acolhimento: Melhorar o recebimento e acesso aos serviços.</td>
                    <td className="p-3 text-sm text-muted-foreground">Horário ampliado do serviço.</td>
                  </tr>
                  <tr className="hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Eixo 2</td>
                    <td className="p-3 text-sm text-foreground">Paternidade e Cuidado: Fortalecer o vínculo familiar.</td>
                    <td className="p-3 text-sm text-muted-foreground">Pré-natal do parceiro (Estratégia principal), Sífilis, Vínculo familiar.</td>
                  </tr>
                  <tr className="hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Eixo 3</td>
                    <td className="p-3 text-sm text-foreground">Doenças Prevalentes: Foco em doenças crônicas e qualidade de vida.</td>
                    <td className="p-3 text-sm text-muted-foreground">Doenças crônicas, Redução de danos, Promoção e prevenção (Obesidade, Alimentação).</td>
                  </tr>
                  <tr className="hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Eixo 4</td>
                    <td className="p-3 text-sm text-foreground">Violência e Acidentes: Prevenção de causas externas e violências.</td>
                    <td className="p-3 text-sm text-muted-foreground">Suicídio, Violência contra grupos LGBT, Repensar as masculinidades, Causas externas, Acidentes de trânsito.</td>
                  </tr>
                  <tr className="hover:bg-accent/10">
                    <td className="p-3 font-medium text-foreground">Eixo 5</td>
                    <td className="p-3 text-sm text-foreground">Saúde Sexual/Reprodutiva: Abordagem de direitos e condições específicas.</td>
                    <td className="p-3 text-sm text-muted-foreground">Direitos sexuais/reprodutivos, Perspectiva de gênero, Disfunções eréteis, Câncer de pênis.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Invisibilidade e Desafios */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Compreendendo a Invisibilidade do Homem na Saúde
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">O que significa "Invisibilidade"?</h4>
              <p className="text-foreground mb-3">
                A invisibilidade no contexto da PNAISH refere-se ao fato de o homem, historicamente, não se reconhecer como um <strong>sujeito do cuidado</strong> ou não buscar ativamente os serviços de saúde.
              </p>
              <p className="text-foreground mb-3">
                Isso torna o homem menos visível nas estatísticas de prevenção e mais nas de morbidade e mortalidade por causas evitáveis.
              </p>
            </div>

            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Estratégia para Combater a Invisibilidade</h4>
              <p className="text-foreground">
                A estratégia estrutural proposta para combater isso é melhorar a <strong>ambiência local</strong> nos serviços de saúde para incentivar o reconhecimento e a busca por assistência.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Barreiras de Acesso</h4>
              <p className="text-foreground mb-2">
                Muitos homens trabalhadores formais não conseguem acessar os serviços de saúde durante o horário de funcionamento habitual (comercial) devido à sua jornada de trabalho.
              </p>
              <p className="text-foreground">
                A oferta de um <strong>horário ampliado do serviço</strong> é uma estratégia direta para remover essa barreira de acesso, possibilitando que o homem acesse o serviço sem comprometer sua rotina profissional, facilitando o acolhimento e a adesão ao cuidado.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

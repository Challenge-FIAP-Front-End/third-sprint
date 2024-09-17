import FaqCard from "../../components/faq_card/faq_card";

const faqPerguntasRespostas = [
  {
    pergunta: "Como ganho pontos usando o app?",
    resposta: "No PortoQuest, nosso sistema de pontos recompensa você por utilizar os serviços das oficinas parceiras da Porto Seguro (CAPS). Funciona da seguinte forma: ao realizar qualquer serviço em uma dessas oficinas, você acumula pontos, chamados de Estrelas. O número de Estrelas que você ganha pode variar dependendo da complexidade e do valor do serviço. Para garantir que as Estrelas sejam atribuídas à sua conta, informe seu CPF no momento do pagamento. Após a conclusão do serviço, as Estrelas serão automaticamente creditadas no seu aplicativo PortoQuest."
  },
  {
    pergunta: "Como faço para usar meus pontos para ganhar prêmios?",
    resposta: "Para utilizar seus pontos ou Estrelas e resgatar prêmios, acesse o aplicativo PortoQuest ou visite nosso site em portoquest.com.br. Faça o login na sua conta usando seu CPF ou e-mail. Na aba 'Meus Pontos', você poderá visualizar a quantidade atual de pontos e todos os prêmios disponíveis para resgate. Selecione o prêmio desejado e clique em 'Resgatar'. Você será redirecionado para uma página com um QR Code. Apresente esse código em uma oficina participante do nosso programa de fidelidade para resgatar seu prêmio e aproveite!"
  },
  {
    pergunta: "Como eu marco uma manutenção no app?",
    resposta: "Atualmente, nosso aplicativo não oferece a opção de agendamento diretamente. No entanto, estamos trabalhando para adicionar essa funcionalidade em breve. Fique atento às nossas redes sociais para atualizações e novidades sobre quando essa funcionalidade estará disponível para você!"
  },
  {
    pergunta: "O que eu ganho sendo um usuário frequente?",
    resposta: "Quanto mais você utilizar os serviços das oficinas parceiras e visitar regularmente, mais pontos você acumula, o que significa que você poderá resgatar mais prêmios. Além disso, nossa IA analisa seu comportamento no aplicativo para enviar notificações personalizadas, ajudando a prever e lembrar sobre manutenções ou trocas necessárias no seu veículo."
  },
  {
    pergunta: "Como funcionam as notificações personalizadas no app?",
    resposta: "As notificações personalizadas são baseadas nos seus agendamentos de serviços, resgates de prêmios e visitas ao aplicativo. Quanto mais você utilizar o app, mais eficazes serão as nossas notificações, ajudando você a lembrar de visitas e manutenções necessárias e personalizando cada vez mais a sua experiência conosco!"
  },
  {
    pergunta: "Como recebo avisos personalizados sobre manutenções?",
    resposta: "As notificações personalizadas são baseadas nos seus agendamentos de serviços, resgates de prêmios e visitas ao aplicativo. Quanto mais você utilizar o app, mais eficazes serão as nossas notificações, ajudando você a lembrar de visitas e manutenções necessárias e personalizando cada vez mais a sua experiência conosco!"
  },
  {
    pergunta: "Quais benefícios eu recebo por usar o app várias vezes?",
    resposta: "Quanto mais você utilizar os serviços das oficinas parceiras e visitar regularmente, mais pontos você acumula, o que significa que você poderá resgatar mais prêmios. Além disso, nossa IA analisa seu comportamento no aplicativo para enviar notificações personalizadas, ajudando a prever e lembrar sobre manutenções ou trocas necessárias no seu veículo."
  },
  {
    pergunta: "Tem como agendar uma manutenção pelo app?",
    resposta: "Atualmente, nosso aplicativo não oferece a opção de agendamento diretamente. No entanto, estamos trabalhando para adicionar essa funcionalidade em breve. Fique atento às nossas redes sociais para atualizações e novidades sobre quando essa funcionalidade estará disponível para você!"
  }
];

function Faq() {
  return (
    <main className="p-12 flex flex-col gap-6">
      {faqPerguntasRespostas.map((faq) => (
        <FaqCard key={faq.pergunta} pergunta={faq.pergunta} resposta={faq.resposta} />
      ))}
    </main>
  )
}

export default Faq
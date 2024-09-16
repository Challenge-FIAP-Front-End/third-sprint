import { ChangeEvent, useState } from 'react';
import ChatMessage from '../../components/chat_message/chatMessage';

function ChatBot() {
  interface ChatMessage {
    mensagem: string;
    destinatario: boolean;
  }

  const [chatMensagem, setChatMensagem] = useState<ChatMessage>({
    mensagem: '',
    destinatario: false,
  });

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setChatMensagem({
      ...chatMensagem,
      [e.target.name]: e.target.value
    });
  }
  const [chatMessages] = useState<Array<ChatMessage>>([]);

  function adicionarMensagem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    chatMessages.push(chatMensagem)
    setChatMensagem({ mensagem: '', destinatario: false } as ChatMessage)
    chatMessages.push({ mensagem: "Não entendi a pergunta, verifique nosso FAQ para mais informações", destinatario: true } as ChatMessage)
  }

  return (
    <main>
      <ul className='w-full h-[calc(100vh-10rem)] bg-[#0046BF] overflow-scroll overflow-x-hidden p-10 flex flex-col gap-10'>
        {chatMessages.map((message) => (
          <ChatMessage key={message.mensagem} message={message.mensagem} destinatario={message.destinatario} />
        ))}
      </ul>

      <form onSubmit={adicionarMensagem} className='w-full'>
        <fieldset className='w-full flex'>
          <input className="w-full p-6 text-xl" type="text" placeholder='Envie uma mensagem'
            id="mensagem"
            name="mensagem"
            value={chatMensagem.mensagem}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </fieldset>
      </form>
    </main>
  )
}

export default ChatBot
import { IoIosStar } from 'react-icons/io';

interface CirculoResgateProps {
  text: string;
  foiResgatado: boolean;
  posicaoTexto: string;
  qtdEstrelas: number;
}

function CirculoResgate({ text, foiResgatado, posicaoTexto, qtdEstrelas }: CirculoResgateProps) {
  return (
    <div className="relative w-40 flex flex-col items-center text-center">
      <div className={`flex items-center justify-center w-[9rem] h-[9rem] rounded-full ${foiResgatado ? 'bg-[#00FF66]' : 'bg-[#2662C8]'}`}>
        {Array.from({ length: qtdEstrelas }, (_, index) => (
          <IoIosStar key={index} color='yellow' />
        ))}
      </div>
      <p className={`mt-2 ${posicaoTexto === 'Top' ? 'relative lg:absolute xl:absolute 2xl:absolute lg:top-[-4rem] xl:top-[-4rem] 2xl:top-[-4rem]' : 'relative lg:absolute xl:absolute 2xl:absolute lg:bottom-[-4rem] xl:bottom--[-4rem] 2xl:bottom-[-4rem]'}`}>
        {text}
      </p>
    </div>
  )
}

export default CirculoResgate
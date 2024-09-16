import { IoIosStar } from 'react-icons/io'
import { Link } from 'react-router-dom'
import CirculoResgate from '../../components/circulo_resgate/CirculoResgate'


function Pontos() {
  return (
    <main className="p-4 flex flex-col items-center mm">
      <div className="mb-6 w-full flex justify-around mt-4">
        <h1 className="text-xl font-bold flex items-center gap-2">Meus Pontos: 2 <IoIosStar color="blue" /></h1>
        <h2 className="text-lg">Data de vigencia: 01/01/2024 a 01/01/2025</h2>
      </div>
      <section className="relative flex items-center">
        <div className="absolute inset-0 flex items-center px-[8vw]">
          <div className="w-full h-1 bg-black"></div>
        </div>

        <div className="flex flex-col items-center gap-12 justify-evenly w-full my-20 lg:flex-row xl:flex-row">
          <CirculoResgate text={'Revisão Gratuita'} foiResgatado={true} posicaoTexto={'Top'} qtdEstrelas={1} />
          <CirculoResgate text={'Troca das Pastilhas de Freio'} foiResgatado={false} posicaoTexto={''} qtdEstrelas={2} />
          <CirculoResgate text={'Limpeza Completa do Carro'} foiResgatado={false} posicaoTexto={'Top'} qtdEstrelas={3} />
          <CirculoResgate text={'Troca dos 4 Pneus'} foiResgatado={false} posicaoTexto={''} qtdEstrelas={4} />
          <CirculoResgate text={'Troca de Óleo'} foiResgatado={false} posicaoTexto={'Top'} qtdEstrelas={5} />
        </div>
      </section>

      <Link to={'/Resgates'} className='mt-12 bg-[#0046BF] text-white p-4 px-32 rounded-full text-lg'>Resgatar</Link>
    </main>
  )
}

export default Pontos
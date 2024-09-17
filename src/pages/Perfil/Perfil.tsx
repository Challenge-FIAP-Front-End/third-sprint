import { IoArrowForwardCircleOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

function Perfil() {
  return (
    <>
      <aside className='w-full flex justify-end h-16 items-center gap-4 px-4'>
        <h1 className='text-xl'>Sair</h1>
        <Link to ="/Login">
        <figure>
          <IoArrowForwardCircleOutline color="red" size={'2rem'} />
        </figure>
        </Link>
      </aside>
      <main className='bg-[#00A0FB] w-[500px] text-white mx-auto rounded-3xl py-11 px-11 flex flex-col items-center gap-6'>
        <figure>
          <img className='w-28 h-auto rounded-full' src="https://avatars.githubusercontent.com/u/65926010?s=96&v=4" alt="Profile Picture" />
        </figure>
        <h1 className='text-2xl font-bold'>Leonardo Salazar</h1>
        <h2 className='text-xl'>Total de pontos: 1</h2>
        <div className='mt-4 w-full bg-white text-black p-4 rounded-full'>
          123.456.789-10
        </div>
        <div className='w-full bg-white text-black p-4 rounded-full'>
          fiap@gmail.com
        </div>
        <button className='mt-4 w-full rounded-full bg-[#0046BF] text-lg p-2'>
          Trocar Senha
        </button>
        <Link to="/Historico" className='w-full rounded-full bg-[#0046BF] text-lg p-2 text-center'>
          Histórico de Recompensas
        </Link>
      </main>
    </>
  )
}

export default Perfil
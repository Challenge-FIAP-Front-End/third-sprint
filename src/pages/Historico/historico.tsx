import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Resgate from "../../components/resgate/Resgate";


function Historico() {

  const resgatesEstaticos = [
    {
      resgate: "Revisão de Carro gratuita", 
      data: "2024-09-01",
      estrelas: 1
    },
    {
      resgate: "Troca dos 4 pneus",
      data: "2023-09-05",
      estrelas: 3
    },
    {
      resgate: "Troca de Óleo",
      data: "2022-09-10",
      estrelas: 7
    },
    {
      resgate: "Revisão de Carro gratuita",
      data: "2021-09-15",
      estrelas: 1
    }
  ];

  return (
    <>
      <aside className='w-full flex justify-end h-16 items-center gap-4 px-4'>
        <h1 className='text-xl'>Sair</h1>
        <figure>
          <IoArrowForwardCircleOutline color="red" size={'2rem'} />
        </figure>
      </aside>
      <main className="mx-auto w-3/4 bg-[#00A0FB] text-white flex flex-col items-center p-8 rounded-2xl">
        <h1 className="text-2xl font-bold">Meus Resgates</h1>

        <ul className="flex flex-col divide-y-2 divide-white w-full">
          {resgatesEstaticos.map((resgate) => (
            <Resgate key={resgate.resgate} resgate={resgate.resgate} data={resgate.data} estrelas={resgate.estrelas} />
          ))}
        </ul>
      </main>
    </>
  )
}

export default Historico
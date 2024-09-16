import { IoIosStar } from "react-icons/io"

interface ResgateProps {
  resgate: string,
  data: string,
  estrelas: number
}

function Resgate({ resgate, data, estrelas }: ResgateProps) {
  return (
    <li className="flex justify-between py-4 text-xl">
      <div>
        <p>Resgate: {resgate}</p>
        <p>Data: {data}</p>
      </div>
      <div className="flex items-center gap-4">
        <h1>{estrelas}</h1>
        <IoIosStar size={'2rem'} color={'yellow'} />
      </div>
    </li>
  )
}

export default Resgate
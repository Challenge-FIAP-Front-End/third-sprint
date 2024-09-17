const Integrantes = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-8">
      <h1 className="text-5xl font-bold text-[#0046BF] mb-12">Integrantes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="bg-[#0046BF] text-white rounded-lg shadow-lg p-12 w-full h-full flex flex-col items-center justify-center min-h-[300px]">
        <p className="text-xl mt-4 font-bold">Nome: Alexsandro de Macedo de Jesus </p>
          <h2 className="text-3xl font-bold">RM: 557068 </h2>
        </div>
        {/* Card 2 */}
        <div className="bg-[#0046BF] text-white rounded-lg shadow-lg p-12 w-full h-full flex flex-col items-center justify-center min-h-[300px]">
          <p className="text-xl mt-4 font-bold">Nome:Leonardo Faria Salazar </p>
          <h2 className="text-3xl font-bold">RM: 557484 </h2>
        </div>
        {/* Card 3 */}
        <div className="bg-[#0046BF] text-white rounded-lg shadow-lg p-12 w-full h-full flex flex-col items-center justify-center min-h-[300px]">
          <p className="text-xl mt-4 font-bold">Nome: Jonathan Matheus Rasne Pereira Fonseca </p>
          <h2 className="text-3xl font-bold">RM: 558437 </h2>
        </div>
      </div>
    </div>
  );
};

export default Integrantes;

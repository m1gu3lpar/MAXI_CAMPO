export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">📌 Diagramas UML y Scrum</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Sección de Diagramas UML */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">📊 Diagramas UML</h2>
          <p className="mb-2 text-gray-700">Aquí podrás visualizar y comentar sobre los diagramas UML.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ver Diagramas
          </button>
        </div>

        {/* Sección de Cronograma Scrum */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">📝 Cronograma Scrum</h2>
          <p className="mb-2 text-gray-700">Consulta y edita el cronograma de actividades basado en Scrum.</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Ver Cronograma
          </button>
        </div>
      </div>
    </div>
  );
}

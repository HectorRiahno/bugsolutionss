
export default function Page() {
    const noticias = [
        {
          title: "Título 1",
          info: "Información relacionada con el título 1.",
        },
        {
          title: "Título 2",
          info: "Información relacionada con el título 2.",
        },
        {
          title: "Título 3",
          info: "Información relacionada con el título 3.",
        },
        {
          title: "Título 4",
          info: "Información relacionada con el título 4.",
        },
      ];
    
      return (
        <div className="bg-gray-100 py-10 px-4 flex items-center">
          {/* Encabezado */}
          <div className="mb-8 text-start  bg-red-200 flex-1">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to Bug Solutions</h1>
            <p className="text-lg text-gray-600 mt-2">We solve your bugs, so you don't have to.</p>
          </div>
    
          {/* Tarjetas de información */}
          <div className="bg-red-100 flex-1">
            {noticias.map((noticia, i) => (
              <div
                key={i}
                className={`flex  ${i % 2 === 0 ? "justify-end" : "justify-start"}`}
              >
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                  <h2 className="text-xl font-semibold text-gray-800">{noticia.title}</h2>
                  <p className="text-gray-600 mt-2">{noticia.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
  }
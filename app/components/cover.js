// import videocover from ''

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
    <div className="min-h-screen px-4 flex items-center px-14">
      {/* Encabezado */}
      <div className="mb-8 text-start flex-1">
        <h1 className="text-4xl font-bold text-gray-800  mb-2">
          Welcome to Bug Solutions
        </h1>
        <div className=" text-start flex-1 bg-black w-40 h-1 mb-8"></div>
        <p className="text-lg text-gray-700 mt-2">
          We solve your bugs, so you don't ha
        </p>
      </div>

      {/* Tarjetas de información */}
      <div className="grid grid-cols-2 gap-8 mt-12">
        {noticias.map((noticia, i) => (
          <div
            key={i}
            className="bg-white shadow-lg h-52 rounded-xl p-6 transform hover:-translate-y-2 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              {noticia.title}
            </h3>
            <p className="mt-2 text-gray-600">{noticia.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

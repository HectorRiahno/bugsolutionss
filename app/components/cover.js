// import videocover from ''

export default function Page() {
  const noticias = [
    {
      title: "Google",
      info: "Google adelanta por la derecha a OpenAI y lanza su nuevo generador de vídeo: Sora sigue sin aparecer en escena",
    },
    {
      title: "iPhone",
      info: "El veto al iPhone 16 en Indonesia tiene una costosa solución: Apple deberá invertir 1.000 millones de dólares en el país.",
    },
    {
      title: "Play Store",
      info: "El malware continúa colándose en Play Store: estas apps fueron descargadas millones de veces antes de ser eliminadas",
    },
    {
      title: "Nova",
      info: "La gran apuesta de Amazon por la IA generativa ya tiene nombre: se llama Nova y llega para rivalizar con OpenAI.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center px-36 ">
      <div className="mb-8 text-start w-2/4 ">
        <h1 className="text-4xl font-bold text-gray-800  mb-2">
          Welcome to Bug Solutions
        </h1>
        <div className=" text-start flex-1 bg-black w-40 h-1 mb-8"></div>
        <p className="text-lg text-gray-700 mt-2">
          We solve your bugs, so you don't ha
        </p>
      </div>

      {/* Tarjetas de información */}
      <div className="grid grid-cols-2 gap-8  w-2/4">
        {noticias.map((noticia, i) => (
          <div
            key={i}
            className="bg-white shadow-lg h-60 rounded-xl p-6 transform hover:-translate-y-2 hover:shadow-xl transition"
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

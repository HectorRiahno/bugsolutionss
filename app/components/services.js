import Image from "next/image";
import desarrolloweb from "./img/desarrolloweb.jpg";
 import soporte from "./img/soporte.jpg";
import consultoria from "./img/consultoria.jpg";

export default function Servvices() {
  const services = [
    {
      title: "Desarrollo Web",
      description:
        "Creamos sitios web personalizados, modernos y optimizados para cualquier dispositivo.",
      image: desarrolloweb,
    },
    {
      title: "Consultoría Tecnológica",
      description:
        "Te ayudamos a tomar las mejores decisiones tecnológicas para tu negocio.",
      image: consultoria,
    },
    {
      title: "Soporte Técnico",
      description:
        "Ofrecemos soporte técnico especializado para garantizar el funcionamiento de tus sistemas.",
      image: soporte,
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Nuestros Servicios
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Ofrecemos soluciones tecnológicas personalizadas para que tu negocio
        alcance su máximo potencial.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Imagen */}
            <div className="relative w-full h-48">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* Contenido */}
            <div className="p-6">
           
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
    
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

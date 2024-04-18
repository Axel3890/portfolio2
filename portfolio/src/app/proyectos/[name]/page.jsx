import React from "react";

const Proyectos = [
  { nombre: "desarrollolaboral", imagen:"/images/desarrollo.png", titulo: "Desarrollo laboral", descripcion: "Pagina diseñada para poner en practica lo aprendido de Next.js", detalles: "Desarrollada con Next.js y React, dando estilos con Tailwind, Desarrollo laboral es una pagina en la cual se encuentran distintas secciones entre ellas están: CV: seccion donde se muestran plantillas de CV aptas para filtros ATS, y consejos para terner un buen curriculum, Entrevistas, donde se encuentran consejos para entrevistas desde preguntas tipicas, plataformas de practica, y permite buscar tus tecnologias para saber preguntas tecnicas tipicas, tambien muestra distintas plataformas para la busqueda laboral" },
  { nombre: "nutrilife", titulo: "Nutri Life", descripcion: "Proyecto personal para para poner en practica desarrollo Full Stack", detalles: "Desarrollada con React, JavaScript, CSS, Express, Node.js, PostgreSQL y Sequelize, Nutri Life es una pagina que permite a un usuario que se registra por firebase, calcular sus calorias diarias y en base a eso poder buscar disintas recetas que ofrece la API de Edamam, mostrando informacion nutricional y el paso a paso, permitiendo guardar tus recetas favoritas" },
  { nombre: "foodexpres", titulo: "Food Express", descripcion: "Proyecto Final de Henry. me desempeñé como backend con un equipo de 7 personas", detalles: "Desarrollamos una página web utilizando tecnologías como React, Redux, JavaScript, Bootstrap y gestionamos la base de datos con PostgreSQL y Sequelize. Creamos una experiencia de compra online desde cero por parte del usuario, permitiendo ver los distintos platos y agregarlos a un carrito de compra, para luego utilizar mercado pago para finalizar la compra, tambien cuenta con un dashboard para un administrador donde puede gestionar desde platos, pedidos y hasta comentarios." },
  { nombre: "spadogs", titulo: "SPA Dogs", descripcion: "Proytecto individual de Henry donde me desempeñé como desarrollador Full Stack", detalles: "Desarrollada con React, JavaScript, CSS, Express, Node.js, PostgreSQL y Sequelize, este proyecto fue para poner a prueba los conocimientos adquiridos, utilizando la API de theDogApi para obtener y mostrar distintas razas de perros, permitiendo al usuario filtrar por distintas categorias y utilizar un buscador, tambien tiene la posibilidad de crear tu propio perro a traves de un formulario controlado" },
];

const Page = ({ params }) => {
  const proyecto = Proyectos.find((proyecto) => proyecto.nombre === params.name);


  if (!proyecto) {
    return <div>Proyecto no encontrado</div>;
  }


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={proyecto.imagen}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  {proyecto.titulo}
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  {proyecto.descripcion}
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                {proyecto.detalles}
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

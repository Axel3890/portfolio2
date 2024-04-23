import React from "react";

const Proyectos = [
  { nombre: "desarrollolaboral", imagen:"/images/desarrollo.png", titulo: "Desarrollo laboral", descripcion: "Esta página fue diseñada como un proyecto de práctica para aplicar los conocimientos adquiridos en Next.js", detalles: "Desarrollada utilizando Next.js y React, con estilos implementados mediante Tailwind CSS, Desarrollo Laboral es una plataforma web que ofrece diversas secciones especializadas. Entre ellas se encuentra la sección de CV, donde los usuarios pueden acceder a plantillas de CV adecuadas para filtros ATS, sistemas de seguimiento de candidatos), así como recibir consejos para mejorar su currículum. La sección de Entrevistas proporciona a los usuarios consejos útiles para enfrentar entrevistas laborales, incluyendo preguntas típicas, recomendaciones de plataformas para práctica y la posibilidad de buscar preguntas técnicas relacionadas con sus tecnologías específicas. Además, se ofrece una lista de diversas plataformas para la búsqueda de empleo, brindando a los usuarios múltiples opciones para iniciar o avanzar en su carrera profesional." },
  { nombre: "nutrilife", imagen:"/images/nutrilife.png", titulo: "Nutri Life", descripcion: "Un proyecto personal diseñado para aplicar habilidades de desarrollo Full Stack en la práctica.", detalles: "Nutri Life es una página desarrollada con React, JavaScript, CSS, Express, Node.js, PostgreSQL y Sequelize. Diseñada para usuarios registrados a través de Firebase, esta plataforma permite calcular las calorías diarias de los usuarios y, en función de ello, buscar diversas recetas ofrecidas por la API de Edamam. Además de proporcionar información nutricional detallada, Nutri Life ofrece instrucciones paso a paso para cada receta y la posibilidad de guardar las recetas favoritas de los usuarios." },
  { nombre: "foodexpres", imagen:"/images/FoodExpress.jpg", titulo: "Food Express", descripcion: "Proyecto Final de Henry en el que trabajé como desarrollador Backend en un equipo de 7 personas.", detalles: "Diseñamos y desarrollamos una página web utilizando tecnologías como React, Redux, JavaScript y Bootstrap, con gestión de base de datos a través de PostgreSQL y Sequelize. Creamos una experiencia de compra online integral para los usuarios, que les permite explorar una variedad de platos y agregarlos a un carrito de compra. Utilizamos Mercado Pago para facilitar el proceso de pago. Además, implementamos un panel de control para administradores que les permite gestionar platos, pedidos y comentarios de manera eficiente." },
  { nombre: "spadogs", imagen:"/images/PiDogs.png", titulo: "SPA Dogs", descripcion: "Proytecto individual de Henry donde me desempeñé como desarrollador Full Stack", detalles: "Este proyecto, desarrollado con React, JavaScript, CSS, Express, Node.js, PostgreSQL y Sequelize, fue creado con el propósito de poner a prueba los conocimientos adquiridos. Utilizamos la API de theDogApi para obtener y mostrar diversas razas de perros, permitiendo a los usuarios filtrar por categorías y utilizar un buscador. Además, implementamos la funcionalidad de crear un perro personalizado a través de un formulario controlado, brindando una experiencia interactiva y educativa." },
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
              alt="imagen del proyecto"
              className="object-contain object-center h-full w-full"
              src={proyecto.imagen}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-custom-green text-lg">
                  {proyecto.titulo}
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base text-custom-white">
                  {proyecto.descripcion}
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-custom-ligthblue sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4 text-custom-white">
                {proyecto.detalles}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

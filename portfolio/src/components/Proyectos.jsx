import Link from "next/link";
const Proyectos = () => {
    return (
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Proyectos</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <Link href={`/proyectos/${'desarrollolaboral'}`}>
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="/images/desarrollo.png" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Frontend Developer</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Desarrollo laboral</h2>
          <p class="leading-relaxed text-base">Pagina web diseñada para tener un guia de trabajo para el mundo IT, Desarollada para poner en practicas mis conocimientos en Next y brindar apoyo a la nueva gente que ingresa a este mundo.</p>
        </div>
        </Link>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
      <Link href={`/proyectos/${'nutrilife'}`}>
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="/images/nutrilife.png" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Full Stack Developer</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Nutri Life</h2>
          <p class="leading-relaxed text-base">Página web de recetas. Es una herramienta completa diseñada para simplificar tu vida. descubre platos deliciosos que se ajusten perfectamente a tus necesidades calóricas diarias.</p>
        </div>
        </Link>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
      <Link href={`/proyectos/${'foodexpres'}`}>
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="/images/FoodExpres.jpg" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Backend Deveoper</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Food Express</h2>
          <p class="leading-relaxed text-base">Creamos una experiencia de compra online. Desarrollamos una página web utilizando tecnologías como React, Redux, JavaScript, Bootstrap y gestionamos la base de datos con PostgreSQL y Sequelize. 🌐.</p>
        </div>
        </Link>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
      <Link href={`/proyectos/${'spadogs'}`}>
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="/images/PiDogs.png" alt="content"></img>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Full Stack Developer</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">SPA Dogs</h2>
          <p class="leading-relaxed text-base">Proyecto individual de Henry: una Single Page Aplication, en la cual se utiliza la api de theDogApi. Trabajé tanto en el diseño de frontend como en el sistema CRUD del backend. Trabajado con React y Node.js</p>
        </div>
        </Link>
      </div>
    </div>
  </div>
</section>
    )
  }
  
  
  export default Proyectos;
  
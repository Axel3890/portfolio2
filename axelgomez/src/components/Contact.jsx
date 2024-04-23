"use client"
import React from 'react'
import { useState } from "react";
import Swal from "sweetalert2";
const endPoint = "https://portfolioapi-ttr39mir5-axel-gomezs-projects.vercel.app"

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "Mensaje del Portfolio",
    comment: "",
})

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setIsLoading(true);
      const response = await fetch(endPoint + "/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Error al enviar el email");
      }
  
      setIsLoading(false);
      Swal.fire({
        icon: "success",
        title: "Gracias por contactarte!",
        text: "Email enviado correctamente!.",
      });
  
      setFormData({
        name: "",
        email: "",
        comment: "",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error... Intenta de nuevo más tarde",
      });
      setIsLoading(false);
    }
  };
  


  return (
<section class="text-gray-600 body-font relative" id="contacto">
  <form onSubmit={handleSubmit}>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-custom-green">Contactame!</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-custom-white">Enviame un correo para que podamos hablar.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-custom-white">Nombre</label>
            <input type="text" id="name" name="nombre" required value={formData.nombre} onChange={handleInputChange} class="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-custom-white">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required class="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-custom-white">Mensaje</label>
            <textarea id="message" name="comment" value={formData.comment} onChange={handleInputChange} required class="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button type="sumbit" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar'}</button>
        </div>
      </div>
    </div>
    
  </div>
  </form>
</section>

  )
}

export default Contact
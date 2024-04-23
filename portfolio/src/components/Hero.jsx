import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section class="m-auto flex w-full max-w-screen-2xl grow flex-col-reverse items-center justify-start gap-12 lg:flex-row lg:gap-24">
          <div class="flex flex-1 flex-col items-start gap-12 px-3 pb-6 md:pb-12 lg:px-24 lg:pb-0">
              <div class="flex max-w-lg flex-col gap-6">
                  <h3 class="text-4xl font-semibold text-custom-white md:text-6xl">Full Stack Developer</h3>
                  <h4 class="text-lg font-normal leading-7 text-custom-ligthblue">¡Hola! Soy Axel, un apasionado desarrollador Full-Stack gradudado del bootcamp soyHenry con experiencia en la creación de aplicaciones web robustas e innovadoras.</h4>
              </div>
              <div class="flex gap-4">
                  <button type="button"
                      class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-custom-white stroke-white px-6 text-white hover:bg-blue-950 h-[42px] min-w-[42px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100">
                      <span className='text-custom-ligthblue'>Descargar CV</span>
                  </button>
                  <button type="button"
                      class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 px-2 text-blue-700 h-[42px] min-w-[42px] gap-2 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950">
                      <span className='text-custom-green'>Ver experiencia</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="size-6 stroke-inherit">
                          <path d="M11 16L15 12L11 8" stroke-linecap="round" stroke-linejoin="round"></path>
                          <circle cx="12" cy="12" r="9"></circle>
                      </svg>
                  </button>
              </div>
          </div>
          <div class="mb-5 flex w-full items-center justify-center lg:mb-0  2xl:flex-1">
              <img src="/images/axel.png"  height="300px" width="300px"alt=""/>
          </div>
      </section>
  )
}

export default Hero
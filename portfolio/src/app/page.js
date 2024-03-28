import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section class="m-auto flex w-full max-w-screen-2xl grow flex-col-reverse items-center justify-start gap-12 lg:flex-row lg:gap-24">
  <div class="flex flex-1 flex-col items-start gap-12 px-3 pb-6 md:pb-12 lg:px-24 lg:pb-0">
    <span class="inline-flex rounded-[64px] border text-center font-semibold transition-all duration-300 ease-in-out h-7 px-3 py-1 text-sm leading-tight border-blue-300 bg-blue-50 text-blue-600">Tailframes v1.0</span>
    <div class="flex max-w-lg flex-col gap-6">
      <h3 class="text-4xl font-semibold text-slate-950 md:text-6xl">Here is your new Tailwind UI kit, welcome!</h3>
      <h4 class="text-lg font-normal leading-7 text-slate-500">We've done it carefully and simply. The elements work well together to create stunning landings.</h4>
    </div>
    <div class="flex gap-4">
      <button type="button"
        class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-blue-700 stroke-white px-6 text-white hover:bg-blue-950 h-[42px] min-w-[42px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100">
        <span>Get a Template</span>
      </button>
      <button type="button"
        class="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 px-2 text-blue-700 h-[42px] min-w-[42px] gap-2 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950">
        <span>See More</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="size-6 stroke-inherit">
          <path d="M11 16L15 12L11 8" stroke-linecap="round" stroke-linejoin="round"></path>
          <circle cx="12" cy="12" r="9"></circle>
        </svg>
      </button>
    </div>
  </div>
  <div class="mb-5 flex w-full items-center justify-center bg-slate-50 py-28 lg:mb-0 lg:py-52 2xl:flex-1">
    <Image src="" alt="" width="183" height="345" class="h-[172px] w-[91px] md:h-[345px] md:w-[183px]" />
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The 400 Blows</h2>
        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <button class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>
    </main>
  );
}

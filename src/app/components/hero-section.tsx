import React from "react";
import Image from "next/image";
import { software } from "../assets/images";



export const HeroSection = () => {
    return (
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded">
    <Image
      src={software}
      width={500}
      alt="Logo da Fluxo"
    />
    </div>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-bold" >Sua empresa está pronta para alcançar o próximo nível?</h1>
      <p className="mb-8 leading-relaxed">Com a Fluxo, você terá acesso a soluções de software personalizadas que otimizam processos, garantem segurança e impulsionam a eficiência do seu negócio.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Contate-nos</button>
      </div>
    </div>
  </div>
</section>
    );
}
import React from "react";
import Image from "next/image";

import { matheus, giovanni, isabella, davi } from "../assets/images";


export const Team = () => {
    return (
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">Conheça a equipe que está construindo o futuro da tecnologia! </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">A equipe Fluxo é composta por profissionais apaixonados por tecnologia e dedicados a impulsionar o sucesso dos seus negócios. Com uma combinação de experiência, talento e criatividade, nossa equipe está pronta para desenvolver soluções inovadoras e personalizadas que atendem às suas necessidades específicas.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
        <div className="flex-shrink-0 rounded-lg w-56 h-56 object-cover object-center ">
        <Image
        src={davi}
        alt="Foto Giovanni"
        />
        </div>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Davi Fontanini</h2>
            <h3 className="text-gray-500 mb-3">Desenvolvedor Backend</h3>
            <p className="mb-4">Desenvolvedor backend com uma sólida compreensão das tecnologias e práticas essenciais para a construção de sistemas.</p>
            <span className="inline-flex">
              <a href="https://www.instagram.com/fontanini_019/" className="text-gray-500" rel="noopener noreferrer" target="_blank">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
             </svg>
              </a>
              <a href="" className="ml-3 text-gray-500" rel="noopener noreferrer" target="_blank">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
        </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
        <div className="flex-shrink-0 rounded-lg w-56 h-56 object-cover object-center">
            <Image
        src={giovanni}
        alt="Foto Giovanni"
        /></div>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Giovanni Albino</h2>
            <h3 className="text-gray-500 mb-3">Desenvolvedor Frontend</h3>
            <p className="mb-4">Desenvolvedor experiente e com paixão pela criação de experiências digitais envolventes e intuitivas.</p>
            <span className="inline-flex">
              <a href="https://www.instagram.com/gio_sxis/" className="text-gray-500" rel="noopener noreferrer" target="_blank">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
             </svg>
              </a>
              <a href="https://www.linkedin.com/in/giovanni-albino-4515a2288/" className="ml-3 text-gray-500" rel="noopener noreferrer" target="_blank">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
        </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
        <div className="flex-shrink-0 rounded-lg w-56 h-56 object-cover object-center"><Image
        src={isabella}
        alt="Foto Isabella"
        /></div>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Isabella Caramigo</h2>
            <h3 className="text-gray-500 mb-3">Desenvolvedora Frontend</h3>
            <p className="mb-4">Desenvolvedora front-end mobile e web, experiente e apaixonada por criar interfaces intuitivas e atraentes para aplicativos móveis.</p>
            <span className="inline-flex">
              <a href="https://www.instagram.com/isabellacaramigo/" className="text-gray-500" rel="noopener noreferrer" target="_blank">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
             </svg>
              </a>
              <a href="https://www.linkedin.com/in/isascaramigo/" className="ml-3 text-gray-500" rel="noopener noreferrer" target="_blank">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
        </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
            <div className="flex-shrink-0 rounded-lg w-56 h-56 object-cover object-center">
            <Image
        src={matheus}
        alt="Foto Matheus"
        />
            </div>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Matheus Silva</h2>
            <h3 className="text-gray-500 mb-3">Desenvolvedor Backend</h3>
            <p className="mb-4">Desenvolvedor back-end experiente, Sua paixão é construir sistemas back-end robustos, escaláveis e seguros.</p>
            <span className="inline-flex">
              <a href="https://www.instagram.com/oma_theuss/" className="text-gray-500" rel="noopener noreferrer" target="_blank">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
             </svg>
              </a>
              <a href="https://www.linkedin.com/in/matheusspsilva/" className="ml-3 text-gray-500" rel="noopener noreferrer" target="_blank">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
        </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}
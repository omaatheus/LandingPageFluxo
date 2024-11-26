import React from "react";
import Image from "next/image";

import { matheus } from "../assets/images";

export const Team = () => {
    return (
        <section id="team" className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Conheça a equipe que está construindo o futuro da tecnologia!
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        A equipe Fluxo é composta por profissionais apaixonados por tecnologia e dedicados a impulsionar o sucesso dos seus negócios. Com uma combinação de experiência, talento e criatividade, nossa equipe está pronta para desenvolver soluções inovadoras e personalizadas que atendem às suas necessidades específicas.
                    </p>
                </div>
                <div className="flex justify-center">
    <div className="p-2 w-full lg:w-1/3 md:w-1/2">
        <div className="h-full flex flex-col items-center border-gray-200 border p-4 rounded-lg">
            <div className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mb-4">
                <Image alt="team" src={matheus} />
            </div>
            <div className="flex-grow text-center">
                <h2 className="text-gray-900 title-font font-medium">Matheus Silva</h2>
                <p className="text-gray-500">Desenvolvedor Fullstack</p>
            </div>
            {/* Redes sociais */}
            <span className="inline-flex mt-4">
                <a
                    href="https://www.instagram.com/oma_theuss/"
                    className="text-gray-500 hover:text-gray-700"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/matheusspsilva/"
                    className="ml-3 text-gray-500 hover:text-gray-700"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>
            </span>
        </div>
    </div>
</div>

            </div>
        </section>
    );
};

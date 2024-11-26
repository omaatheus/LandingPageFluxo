import React from "react";
import Image from "next/image";
import { letreiro } from "../assets/images";

export const Header = () => {
    return (

      <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={letreiro} width={200} alt="Logo da Fluxo" />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <a href="#content" className="mr-5 hover:text-gray-900">
            Sobre Nós
          </a>
          <a href="#team" className="mr-5 hover:text-gray-900">
            Equipe
          </a>
          <a href="#footer" className="mr-5 hover:text-gray-900">
            Contato
          </a>
          <a href="https://docs.google.com/document/d/1_yOSteQiFGHbDobpsdq6mPX7-f5ZZa7T1Sd6sOhPzSE/edit?usp=sharing" target="_blank" className="mr-5 hover:text-gray-900">
            Documentação
          </a>
        </nav>
      </div>
    </header>
    );
}
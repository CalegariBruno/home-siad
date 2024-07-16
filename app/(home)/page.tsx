'use client'

import Image from "next/image";
import { Formulario } from "./components/formulario";

export default function Home() {
  return (
    <div className="flex">
      <div className="imagem">
        <Image
          src="/imagens/img-siad.jpg"
          width={799}
          height={1024}
          alt="img-grupo"
        />
      </div>
      <Formulario />
    </div>
  );
}

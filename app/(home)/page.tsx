import Image from "next/image";
import Form from "./components/form-home";

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
      <Form />
    </div>
  );
}

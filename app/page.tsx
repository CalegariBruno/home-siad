import { Input } from "@/components/ui/input"
import { ComboboxDemo } from "./combobox"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return <div className="flex">
    <div className="imagem">
      <Image    
        src="/imagens/img-siad.jpg"
        width={799}
        height={1024}
        alt="Picture of the author"
      />
    </div>

    <div className="flex items-center justify-center w-[799px] ">

      <div className="w-[609px] h-[904px] border shadow-lg">
        <div className="flex justify-center py-10">
              <Image
                src="/imagens/img-logosiad.jpg"
                width={236}
                height={81}
                alt="Logo SIAD"
              />
         </div>
         
        <div className="m-auto w-[541px] gap-">
          <div className="mb-2">
            <label htmlFor="nome">Nome completo:</label>
            <Input type="text" placeholder="Maria da Silva" />
          </div>
          <div className="mb-2">
            <label htmlFor="telefone">Telefone:</label>
            <Input type="tel" placeholder="(27)3700-0000" />
          </div>
          <div className="mb-2">
            <label htmlFor="email">E-mail:</label>
            <Input type="email" placeholder="maria@gmail.com" />
          </div>
          <div className="mb-2">
            <label htmlFor="segmento">Segmento:</label>
            <div>
              <ComboboxDemo />
            </div>
          </div>  
          <div className="flex flex-col mb-8">       
            <label htmlFor="ajuda">Como posso ajudar?</label>
            <textarea name="" id="" className="border"></textarea>
          </div>
          

          <div className="mb-2">
            <Button className="bg-blue-400 text-white w-[541px]" variant="outline">Receber Dados</Button>
          </div>
          
          <div>
            <Button className="bg-gray-400 text-white w-[541px]" variant="outline">Enviar</Button>
          </div>

        </div>
        
      </div>   

    </div>
  </div>
  
}

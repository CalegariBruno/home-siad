'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FormInput } from "./form-input";
import {FormSelect} from "./form-select";
import {FormTextarea} from "./form-mensagem";
import {DialogComponent} from "./component-dialog";

export function Form() {
  return (
    <div className="flex items-center justify-center w-[799px]">
      <div id="formulario" className="w-[609px] h-[904px] border rounded-[12px] shadow-lg">
        <div className="h-[300px] flex justify-center items-center">
          <Image
            src="/imagens/img-logosiad.jpg"
            width={236}
            height={81}
            alt="Logo SIAD"
          />
        </div>

        <div className=" flex flex-col gap-2 my-0 mx-auto w-[541px]">
          <FormInput label="Nome completo:" type="text" placeholder="Maria da Silva" />
          <FormInput label="Telefone:" type="tel" placeholder="(27)3700-0000" />
          <FormInput label="E-mail:" type="email" placeholder="maria@gmail.com" />
          <FormSelect />
          <FormTextarea />
          <DialogComponent />
          <div>
            <Button className="bg-primary text-white w-[541px]" variant="outline">Enviar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

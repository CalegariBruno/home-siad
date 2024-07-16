'use client'

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string; 
}

const formInputSchema = z.object({
  nome: z.string().min(3),
  telefone: z.coerce.number(),
  email: z.string().email()
})

type FormInputSchema = z.infer<typeof formInputSchema>

export function FormInput({ label, type, placeholder }: FormInputProps) {

  const { register, handleSubmit } = useForm<FormInputSchema>({
    resolver: zodResolver(formInputSchema),
  })

  function handleFormInput(data: FormInputSchema){
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleFormInput)}>
      <label>{label}</label>
      <Input type={type} placeholder={placeholder} {...register} />
    </form>
  );
}

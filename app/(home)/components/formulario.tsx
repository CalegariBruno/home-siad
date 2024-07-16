'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DialogComponent } from "./component-dialog";
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useController } from "react-hook-form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from 'axios';
import { toast } from 'react-toastify';

const formSchema = z.object({
    nome: z.string().min(3),
    telefone: z.string(),
    email: z.string().email(),
    segmento: z.string(),
    mensagem: z.string(),
})

export function Formulario() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            telefone: "",
            email: "",
            segmento: "",
            mensagem: "",
        },
    })



    function onSubmit(values: z.infer<typeof formSchema>) {
        const jsonData = 
            {
                id_campanha: 1,
                nome: values.nome,
                telefone: values.telefone,
                email: values.email,
                segmento: values.segmento,
                informacao: values.mensagem,
                assumir: 1, 
                datahora: new Date().toISOString() 
            };

        console.log(jsonData);

        axios.post('https://fjinfor.ddns.net/fvendas/api/api_addcontato.php?funcao=post_contato', jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer',
            },
        })
        .then(response => {
            form.reset();
            if (response.data.status === "success") {
                toast.success("Dados enviados com sucesso!");
            } else {
                toast.error("Erro ao inserir registros: " + response.data.message);
            }
        })
        .catch(error => {
            form.reset();
            toast.error("Erro inesperado!");
            console.error('Erro ao enviar dados:', error);
        });
    }


    return (
        <div className="flex items-center justify-center w-[799px]">

            <div id="formulario" className=" w-[609px] h-[904px] border rounded-[12px] shadow-lg">

                <div className="h-[300px] flex justify-center items-center">
                    <Image
                        src="/imagens/img-logosiad.jpg"
                        width={236}
                        height={81}
                        alt="Logo SIAD"
                    />
                </div>

                <div className="flex flex-col gap-2 my-0 mx-auto w-[541px]">

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

                            <FormField
                                control={form.control}
                                name="nome"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome Completo:</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Maria da Silva" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="telefone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Telefone:</FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder="(27)3700-0000" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>E-mail:</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="maria@gmail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="segmento"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Segmento:</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className="w-[541px]">
                                                    <SelectValue placeholder="Selecione um segmento" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Segmentos</SelectLabel>
                                                        <SelectItem value="ti">TI</SelectItem>
                                                        <SelectItem value="saude">Saúde</SelectItem>
                                                        <SelectItem value="educacao">Educação</SelectItem>
                                                        <SelectItem value="financeiro">Financeiro</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="mensagem"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Como posso ajudar?</FormLabel>
                                        <FormControl>
                                            <textarea className="border rounded-[12px]" {...field}></textarea>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className="bg-primary text-white w-[541px]" variant="default" type="submit">Enviar</Button>

                        </form>
                    </Form>

                    <DialogComponent />

                </div>
            </div>
        </div>
    );
}

import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  return <div className="flex">
    <div className="imagem">
      <Image
        src="/imagens/img-siad.jpg"
        width={799}
        height={1024}
        alt="img-grupo"
      />
    </div>

    <div className="flex items-center justify-center w-[799px] ">

      <div className="w-[609px] h-[904px] border rounded-[12px] shadow-lg">
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
            <div >
            <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="ajuda">Como posso ajudar?</label>
            <textarea name="" id="" className="border rounded-[12px]"></textarea>
          </div>


          <div className="mb-2">

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-secondary text-white w-[541px]" variant="outline">Receber Dados</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div>
            <Button className="bg-primary text-white w-[541px]" variant="outline">Enviar</Button>
          </div>

        </div>

      </div>

    </div>
  </div>

}

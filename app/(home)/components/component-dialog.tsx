import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function DialogComponent() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-secondary text-white w-[541px]" variant="outline">Receber Dados</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[727px]">
          <DialogHeader>
            <DialogTitle>Dados</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Informe o e-mail:
              </Label>
              <div className="flex">
                <Input id="name" className="col-span-3 mr-2" />
                <Button className="bg-white">
                  <Search className="text-black" />
                </Button>
              </div>
              <div className="border my-5"></div>
              <div id="dados" className="flex flex-col gap-4">
                <div id="nome">Fulano de tal</div>
                <div id="segmento">Segmento: tal tal</div>
                <div id="msg" className="flex flex-col gap-2">
                  Mensagem:
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe laboriosam rerum 
                     praesentium accusamus in delectus velit magnam, perspiciatis molestias quod ipsam nemo doloribus!
                     Consequatur dignissimos id, qui molestias, sequi nulla, dolorem autem alias labore quod officia 
                     sed eveniet. Doloremque, inventore temporibus nisi nostrum architecto atque repellendus harum 
                     perferendis illo!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

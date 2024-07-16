import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export function FormSelect() {
  return (
    <div>
      <label>Segmento:</label>
      <Select>
        <SelectTrigger className="w-[541px]">
          <SelectValue placeholder="Selecione um segmento" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="ti">TI</SelectItem>
            <SelectItem value="saude">Saúde</SelectItem>
            <SelectItem value="educacao">Educação</SelectItem>
            <SelectItem value="financeiro">Financeiro</SelectItem>            
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

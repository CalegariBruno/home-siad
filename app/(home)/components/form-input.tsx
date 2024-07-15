import { Input } from "@/components/ui/input";

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
}

// Definindo o componente funcional FormInput. Ele recebe props do tipo FormInputProps e as desestrutura
export default function FormInput({ label, type, placeholder }: FormInputProps) {
  return (
    <div>
      <label>{label}</label>
      <Input type={type} placeholder={placeholder} />
    </div>
  );
}

import { Container } from "../../../components/container"
import { DashboardHeader } from "../../../components/panelHeader"
import { FiUpload } from "react-icons/fi"
import { useForm } from "react-hook-form"
import { Input } from "../../../components/input" 
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"


const schema = z.object({
  name: z.string().nonempty('* O nome do carro é obrigatório').max(70, {message: 'Máximo de 70 caracteres'}),
  model: z.string().nonempty('* O modelo do carro é obrigatório').max(60, {message: 'Máximo de 60 caracteres'}),
  year: z.number({
    required_error: 'O ano é obrigatório',
    invalid_type_error: 'O ano deve ser um número válido'
  }).int('O ano deve ser um número inteiro'),

  km:  z.string()
  .nonempty("Quilometragem é obrigatória")
  .transform((val) => {
   
    const cleaned = 
    val.replace(/\s/gi, '')
    .replace(/,/gi, '')
    .replace(/\./gi, '');

    return Number(cleaned);
  })
  .refine((num) => !isNaN(num), { message: "Deve ser um número válido" })
  .refine((num) => num >= 0, { message: "Deve ser maior ou igual a zero" })
  .refine((num) => num <= 1000000, { message: "Valor máximo permitido é 1.000.000" }), 

  value: z.string().nonempty('Valor é obrigatório').transform((val) => {
    const cleaned = 
    val.replace(/\s/gi, '')
    .replace(/\./gi, '')
    .replace(',', '.');
    return Number(cleaned);
  })
  .refine((num) => !isNaN(num), {message: 'Digite um valor válido'})
  .refine((num) => num <= 10000000, {message: 'Valor máximo é R$ 10.000.000'}),

  city: z.string().nonempty('A cidade é obrigatória').max(70, {message: 'O nome da cidade é obrigatório'}),
  telephone: z.string().max(10, {message: 'Digite um telefone válido'}).optional(),
  whatsapp: z.string().nonempty('O whatsapp é obrigatório').length(11, {message: 'Digite um número válido'}),
  description: z.string().max(600, {message: 'Digite até 600 caracteres'}).optional(),
  image_url: z.string().nonempty('Porfavor, insira a imagem do carro')

})



export function New() {

  return (
    <Container>
      <DashboardHeader/>
      <div className="w-full flex flex-col gap-6 bg-white my-6 py-10 shadow shadow-gray-300 rounded px-2">
        <button className="w-46 h-46 bg-gray-50 flex m-auto items-center justify-center border border-violet-400 rounded-2xl">
          <FiUpload className="absolute text-violet-400" size={28}/>
          <input className="opacity-0 cursor-pointer" type="file" accept="image/"/>

        </button>
        <form className="flex flex-col text-gray-600 gap-2" action="">
          <input className="w-full h-14 bg-gray-100 px-3 text-lg border-none rounded outline-none placeholder:text-gray-400" type="text" placeholder="Nome do carro" />
          <input className="w-full h-14 bg-gray-100 px-3 text-lg border-none rounded outline-none placeholder:text-gray-400" type="text" placeholder="Modelo" />
          <div className="flex flex-col gap-2 md:flex-row md:my-2">
            <input className="w-full h-14 bg-gray-100 px-3 text-lg border-none rounded outline-none placeholder:text-gray-400" type="text" placeholder="Ano" />

            <input className="w-full h-14 bg-gray-100 px-3 text-lg border-none rounded outline-none placeholder:text-gray-400" type="text" placeholder="Km rodados" />
          </div>
          <input className="w-full h-14 bg-gray-100 px-3 text-lg border-none rounded outline-none placeholder:text-gray-400" type="text" placeholder="Valor em R$" />
          <input className="w-full h-14 bg-gray-100 px-3 text-lg border-none rounded outline-none placeholder:text-gray-400" type="text" placeholder="Cidade" />     
          <div className="flex flex-col gap-2 md:flex-row md:my-2">
            <input className="w-full h-14 bg-gray-100 px-3 text-lg border-none rounded outline-none placeholder:text-gray-400" type="text" placeholder="Telefone" />
            <input className="w-full h-14 bg-gray-100 px-3 text-lg border-none rounded outline-none placeholder:text-gray-400" type="text" placeholder="Whatsapp" />
          </div>
          <textarea maxLength={500} rows={4} className="w-full bg-gray-100 px-3 py-3 text-lg border-none rounded outline-none placeholder:text-gray-400" placeholder="Descrição" />
          <button className="w-full h-14 bg-violet-900 rounded mt-4 text-lg text-amber-50 cursor-pointer font-medium">
            Cadastrar
          </button>
        </form>
      
      </div>
    </Container>
  )
}

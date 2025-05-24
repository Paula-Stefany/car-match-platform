import { Container } from "../../../components/container"
import { DashboardHeader } from "../../../components/panelHeader"
import { FiUpload } from "react-icons/fi"
import { useForm } from "react-hook-form"
import { InputDashboard } from "../../../components/inputDashboard" 
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"


const schema = z.object({
  name: z.string()
  .nonempty('* O nome do carro é obrigatório')
  .max(70, {message: 'Máximo de 70 caracteres'}),

  model: z.string()
  .nonempty('* O modelo do carro é obrigatório')
  .max(60, {message: 'Máximo de 60 caracteres'}),
  
  year: z.number({
    required_error: 'O ano é obrigatório',
    invalid_type_error: 'O ano deve ser um número válido'
  })
  .int('O ano deve ser um número inteiro')
  .min(1900, {message: 'O ano do carro precisa ser no mínimo 1900'})
  .max(2025, {message: 'O ano do carro não pode ultrapassar 2025'}),

  km: z.number()
  .nonnegative()
  .max(1000000, {message: 'O valor em km não pode ultrapassar 1.000.000'}),

  value: z.number()
  .nonnegative()
  .max(10000000, {message: 'O valor não pode ser maior que R$ 10.000.000'}),

  city: z.string().nonempty('A cidade é obrigatória').max(70, {message: 'O nome da cidade é obrigatório'}),

  telephone: z.string()
  .max(10, {message: 'Digite um telefone válido'})
  .optional(),

  whatsapp: z.string()
  .nonempty('O whatsapp é obrigatório')
  .transform((val) => {
    
    val = val.replace(/\s/gi, '')
    val = val.replace(/\(/gi, '')
    val = val.replace(/\)/gi, '')
    val = val.replace(/-/gi, '');

    return val;
  })
  .refine((val) => val.length === 11, {
    message: 'Digite um número de whatsapp válido'
  }),

  description: z.string().max(600, {message: 'Digite até 600 caracteres'}).optional(),
  image_url: z.string().nonempty('Porfavor, insira a imagem do carro')

})

type CarFormData = z.input<typeof schema>;


export function New() {


  const { register, handleSubmit, formState: { errors }  } = useForm<CarFormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'

  })

  function onSubmit(data: CarFormData){
    console.log(data);
  }

  return (
    <Container>
      <DashboardHeader/>
      <div className="w-full flex flex-col gap-6 bg-white my-6 py-10 shadow shadow-gray-300 rounded px-2 md:px-8">
        <button className="w-46 h-46 bg-gray-50 flex m-auto items-center justify-center border-2 border-violet-400 rounded-2xl">
          <FiUpload className="absolute text-violet-400" size={28}/>
          <input className="opacity-0 cursor-pointer" type="file" accept="image/"/>

        </button>
        <form className="flex flex-col text-gray-600 gap-2" onSubmit={handleSubmit(onSubmit)}>

          <InputDashboard id="name" type='text' name="name" label="Marca do carro" placeholder="Ex: Chrevrolet" register={register} error={errors.name?.message}/>
          
          <InputDashboard id="model" type='text' name="model" label="Modelo" placeholder="Ex: Onix" register={register} error={errors.model?.message}/>
          
          <div className="flex flex-col gap-2 md:flex-row md:my-2">

            <InputDashboard id="year" type='number' name="year" label="Ano" placeholder="Ex: 2010" register={register} error={errors.year?.message}/>
          
            <InputDashboard id="km" type='number' name="km" label="Km rodados" placeholder="Ex: 44.000" register={register} error={errors.km?.message}/>

          </div>

          <InputDashboard id="value" type='number' name="value" label="Valor em R$" placeholder="Ex: R$ 77.000" register={register} error={errors.value?.message}/>

          <InputDashboard id="city" type='text' name="city" label="Cidade" placeholder="Ex: Caruaru" register={register} error={errors.city?.message}/>
           
          <div className="flex flex-col gap-2 md:flex-row md:my-2">

            <InputDashboard id="telephone" type='text' name="telephone" label="Telefone" placeholder="(xx) xxxx-xxxx" register={register} error={errors.telephone?.message}/>

            <InputDashboard id="whatsapp" type='text' name="whatsapp" label="Whatsapp" placeholder="(xx) xxxxx-xxxx" register={register} error={errors.whatsapp?.message}/>
            
          </div>
          <label className="text-gray-500 font-medium text-lg flex mb-2 cursor-pointer w-fit" htmlFor="description">Descrição</label>
          <textarea id='description' maxLength={500} rows={4} className="w-full bg-violet-50 px-3 py-3 text-[16px] border-none rounded outline-none placeholder:text-gray-400" placeholder="Carro revisado com IPVA pago, pneus novos." />
          <button className="w-full h-13 bg-violet-900 rounded mt-4 text-[17px] text-amber-50 cursor-pointer font-medium">
            Cadastrar
          </button>
        </form>
      
      </div>
    </Container>
  )
}

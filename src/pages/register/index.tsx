import { AiFillCar } from 'react-icons/ai';
import { Input } from "../../components/input";
import { Link } from "react-router";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
    name: z.string().nonempty({message: "Você precisa inserir um nome"}),
    email: z.string().email({message: 'Email inválido'})
    .nonempty({message: 'O Email é obrigatório'}),
    password: z.string()
    .min(8, {message: 'A senha precisa ter no mínimo 8 caracteres'})
    .regex(/[A-Z]/, 'A senha precisa conter ao menos uma letra maiúscula')
    .regex(/[a-z]/, 'A senha precisa conter ao menos uma letra minúscula')
    .nonempty({message: 'Senha é obrigatória'})
})

// Tipagem dos campos do form
type FormData = z.infer<typeof schema>;


export function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  function onSubmit(data: FormData){
    console.log(data);
  }

  return (
    
      <div className="flex w-full h-lvh px-5 justify-center items-center text-gray-800 md:max-w-7xl md:mx-auto md:px-0">
        <aside className="hidden md:flex md:w-[50%] md:justify-center md:bg-violet-700 md:max-h-[900px] md:h-full md:items-center">
          <AiFillCar className="text-amber-50" size={90}/>
        </aside>
        <article className="min-h-[400px] flex flex-col py-8 px-3 justify-center w-full shadow-2xl items-center rounded-2xl  md:w-[50%] gap-8 sm:w-[480px] md:max-h-[900px] md:h-full md:shadow-none md:bg-white md:px-8 md:rounded-none">
          <h1 className="text-3xl font-medium md:text-4xl select-none">Cadastro</h1>
          <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit(onSubmit)}>

            <Input type='text' placeholder='Digite seu nome' name='name' error={errors.name?.message} register={register}/>

            <Input type='email' placeholder='Digite seu E-mail' name='email' error={errors.email?.message} register={register}/>

            <Input type='password' placeholder='Digite sua senha' name='password' error={errors.password?.message} register={register}/>

            <button className="w-full h-12 bg-violet-950 mt-4 rounded text-amber-50 text-lg font-medium cursor-pointer">Salvar</button>
          </form>
          <Link to='/login' className="text-gray-900 font-medium hover:text-gray-800">Já possui conta? Faça o login</Link>
        </article>
      </div>
  )
}

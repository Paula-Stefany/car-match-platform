import { AiFillCar } from 'react-icons/ai';
import { Input } from "../../components/input";
import { Link } from "react-router";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { supabase } from '../../services/supabaseConection';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const schema = z.object({
    email: z.string().email({message: 'Email inválido'})
    .nonempty({message: 'O Email é obrigatório'}),
    password: z.string().nonempty({message: 'Senha é obrigatória'})
})

// Tipagem dos campos do form
type FormData = z.infer<typeof schema>;


export function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })
  const [loginError, setLoginError] = useState<string>('');
  const navigate = useNavigate();

  
  async function onSubmit(userData: FormData){

    setLoginError('');
    try{
      const { error } = await supabase.auth.signInWithPassword({
         email: userData.email,
         password: userData.password
      });

      if (error){
        if (error.message == 'Invalid login credentials'){
          setLoginError('Email ou senha incorretos');

        } else {
          setLoginError('Erro ao fazer login');
        }
        
        return;
      }

      navigate('/dashboard');

    } catch(err){
      console.error('Erro: ', err);
    }
   
  }

  return (
    
      <div className="flex w-full h-lvh px-5 justify-center items-center text-gray-800 md:max-w-7xl md:mx-auto md:px-0">
        <aside className="hidden md:flex md:w-[50%] md:justify-center md:bg-violet-700 md:max-h-[900px] md:h-full md:items-center">
          <AiFillCar className="text-amber-50" size={90}/>
        </aside>
        <article className="min-h-[400px] flex flex-col py-8 px-3 justify-center w-full shadow-2xl items-center rounded-2xl  md:w-[50%] gap-8 sm:w-[480px] md:max-h-[900px] md:h-full md:shadow-none md:bg-white md:px-8 md:rounded-none">
          <h1 className="text-3xl font-medium md:text-4xl select-none">Login</h1>
          <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit(onSubmit)}>
            <Input type='email' placeholder='Digite seu E-mail' name='email' error={errors.email?.message} register={register}/>

            <Input type='password' placeholder='Digite sua senha' name='password' error={errors.password?.message} register={register}/>

            { loginError && (
              <span className='text-red-700'>*  {loginError}</span>
            ) }

            <button className="w-full h-12 bg-violet-950 mt-4 rounded text-amber-50 text-lg font-medium cursor-pointer">Salvar</button>
          </form>
          <Link to='/register' className="text-gray-900 font-medium hover:text-gray-800">Não possui conta? Cadastre-se</Link>
        </article>
      </div>
  )
}

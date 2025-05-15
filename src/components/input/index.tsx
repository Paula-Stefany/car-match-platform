import type { RegisterOptions ,UseFormRegister } from "react-hook-form";

interface InputProps{
    type: string;
    placeholder: string;
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
}


export function Input({name, placeholder, type, register, error, rules}: InputProps){
    return(
        <div>
            <input className="h-[50px] w-full px-2 outline-none border-b-2 border-gray-400 text-lg placeholder:text-gray-700 text-gray-700 focus:border-b-violet-600 mb-1" type={type} placeholder={placeholder} {...register(name, rules)} id={name}/>
            {error && <span className="text-red-700 ">* {error}</span>}
        </div>
    )
}
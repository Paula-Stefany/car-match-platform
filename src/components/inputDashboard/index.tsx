import type { UseFormRegister } from "react-hook-form";


interface InputDashboardProps{
    type: string;
    name: string;
    placeholder: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>;
    error?: string; 
    id: string;
    label: string
}


export function InputDashboard({type, name, placeholder, register, error, id, label}: InputDashboardProps){

    const registerOptions = type === 'number' ? { valueAsNumber: true } : undefined;

    return (

        <div className="w-full">
            <label className="text-gray-500 font-medium text-[17px] flex mb-2 cursor-pointer w-fit" htmlFor={id}>{label}</label>
            <input className="w-full h-13 bg-violet-50 px-3 text-[16px] border-none rounded outline-none placeholder:text-gray-400" type={type} id={id} placeholder={placeholder} {...register(name, registerOptions)}/>
            {error && <span className="text-red-700 ">{error}</span>}
        </div>
    )
}
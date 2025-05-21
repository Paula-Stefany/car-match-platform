import { Link } from "react-router";
import { FiLogOut } from 'react-icons/fi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiGrid } from 'react-icons/fi';
import { supabase } from "../../services/supabaseConection";
import { useNavigate } from "react-router";


export function DashboardHeader(){

    const navigate = useNavigate();

    async function handleLogout() {

        try{
            const { error } = await supabase.auth.signOut();
            if (error){
                console.error('Erro ao fazer logout: ', error.message);
                return;
            }

            navigate('/login');

        } catch( err ) {
            console.error('Erro: ', err)
        }   

    }

    return(
        <div className="flex justify-between py-3 bg-violet-400 px-2 mt-3 text-amber-50 font-medium rounded ">
            <div className="flex gap-4 items-center">
                <Link className="flex items-center gap-1" to='/dashboard'>
                <FiGrid size={20}/>
                Dashboard</Link>
                <Link className="flex items-center gap-1" to='/dashboard/new'>
                    <AiOutlinePlusCircle size={20} />
                    Novo Carro
                </Link>
            </div>
            <button className="cursor-pointer" onClick={handleLogout}>
                <FiLogOut size={20}/>
            </button>
        </div>
    )

}

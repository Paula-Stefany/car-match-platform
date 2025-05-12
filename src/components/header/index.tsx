import { AiFillCar } from 'react-icons/ai';
import { Link } from 'react-router'
import { FiUser, FiLogIn } from 'react-icons/fi'


export function Header() {
    const signed: boolean = false;
    const loadingAuth: boolean = false;

  return (
    <header className='w-full bg-violet-900 py-6'>
        <div className='flex gap-2 text-amber-50 w-full max-w-7xl m-auto px-5 justify-between items-center'>
            <Link to='/' className='flex gap-2 items-center'>
                <AiFillCar size={26}/>
                <h1 className='flex gap-1 font-medium text-2xl'>Car<span className='font-normal text-violet-500'>Match</span></h1>
            </Link>

            { !loadingAuth && signed && (
            <Link to='/dashboard'>
                <FiUser size={26}/>
            </Link>
            )}

            { !loadingAuth && !signed && (
                <Link to='/login'>
                    <FiLogIn size={26}/>
                </Link>
            )}
        </div>
        
    </header>
  )
}

import { createBrowserRouter } from 'react-router'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { CarDetails } from './pages/carDetails'
import { DashBoard } from './pages/dashboard'
import { New } from './pages/dashboard/new'
import { Layout } from './components/layout'


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/cardetails/:id',
        element: <CarDetails/>
      },
      {
        path: '/dashboard',
        element: <DashBoard/>
      },
      {
        path: 'dashboard/new',
        element: <New/>
      }
    ]
  }, 
  
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  
])


export {router};
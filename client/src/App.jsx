import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Connect from './pages/connect/connect'
import NgoRegister from './pages/NgoAuth/ngoRegister'

export default function App()
{
    const router=createBrowserRouter([
      {
        path:'/',
        element:<Layout/>,
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'/connect',
            element:<Connect/>
          },
          {
            path:'/ngoRegister',
            element:<NgoRegister/>
          }
        ]
      }
    ])
    return(
      <RouterProvider router={router}/>
    )
}
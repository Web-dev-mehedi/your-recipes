import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import User from './components/user/User';
import Home1 from './components/home1/Home1';
import Cate from './components/cate/Cate';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
       path:"/",
       loader:()=> fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
       element:<Home1></Home1>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/user",
        element:<User></User>
      }, 
      {
        path:"/category/",
        loader:()=> fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list"),
        element:<Cate></Cate>
      },
    ]

  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)

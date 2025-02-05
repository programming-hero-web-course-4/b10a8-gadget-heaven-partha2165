import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: '/',
            element: <Products />,
            loader: () => fetch('/products.json')
          },
          {
            path: 'products/:category',
            element: <Products />,
            loader: () => fetch('/products.json')
          }
        ]
      },
  
    ]
    
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);

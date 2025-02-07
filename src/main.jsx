import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Dashboard from './Components/Dashboard/Dashboard ';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist.jsx';
import DetailsPage from './Components/DetailsPage/DetailsPage.jsx';
import NewsPage from './Components/NewsPage/NewsPage.jsx';



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
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <Navigate to="cart" replace />
          },
          {
            path: "cart",
            element: <Cart /> 
          },
          {
            path: "wishlist",
            element: <Wishlist /> 
          }
        ]
      },
      {
        path: 'product/:id',
        element: <DetailsPage />,
        loader: () => fetch('/products.json')
      },
      {
        path: "gadgetnews",
        element: <NewsPage />,
        loader: () => fetch('/news.json')
        
      },  
    ]
    
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);

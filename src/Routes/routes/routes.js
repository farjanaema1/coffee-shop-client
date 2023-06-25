import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/home/home";
import Main from "../../layout/main";
import Orders from "../../pages/home/orders/orders";
import { productsAndCartLoader } from "../../pages/loaders/productAndCartLoader";
import BookTable from "../../pages/bookTable/BookTable";
import ManageTables from "../../pages/bookTable/manageTable";

import Signup from "../../signup/signup";
import LogIn from "../../login/login";
import About from "../../about/about";
import Gallery from "../../gallery/gallery";
import PrivateRoute from "../privateRoute/privateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/orders',
                loader: productsAndCartLoader,
                element:<PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path:'/booktable',
                element:<BookTable></BookTable>
            },
            {
                path:'/managetable',
                element:<PrivateRoute><ManageTables></ManageTables></PrivateRoute>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            
            {
                path:'/signup',
                element:<Signup></Signup>
             },
            {
                path:'/about',
                element:<About></About>
             },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
             },
          
        ]
    },
])
export default router;
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Dashboard from "../components/dashboard/Dashboard";
import { Home } from "../components/home/home";



export const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {path:'users',element:<Dashboard/>}
        ]
    }
]);


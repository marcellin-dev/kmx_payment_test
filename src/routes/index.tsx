
import { RouteProps } from 'react-router-dom';
import Login from "../views/auth/Login";
import Dashboard from "../views/Dashboard";


export const routes: RouteProps[] = [
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/home',
        element: <Dashboard/>,

    },

];
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Error from "../pages/Error/Error.jsx";
import Root from "../Layout/Root.jsx";
import Phone from "../pages/Phone/Phone.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('http://localhost:5000/phones')
            },
            {
                path: '/phone/:id',
                element: <Phone/>,
                loader: ({params}) => fetch(`http://localhost:5000/phone/${params.id}`)
            }
        ]
    }
])

export default router;

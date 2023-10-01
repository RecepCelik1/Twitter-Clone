import { createBrowserRouter } from "react-router-dom";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/explore',
        element: <Explore />
    },
    {
        path: '/notifications',
        element: <Notification />  
    }
])

export default routes
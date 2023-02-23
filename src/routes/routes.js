import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/main/main";
import About from "../pages/Home/About";
import Home from "../pages/Home/Home";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
])

export default routes;
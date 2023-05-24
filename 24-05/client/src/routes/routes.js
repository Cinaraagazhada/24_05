import Home from "../Pages/Home/Home"
import About from "../Pages/About/Abut"
import Blog from "../Pages/Blog/Blog"
import Contact from "../Pages/Contact/Contact"
import Country from "../Pages/Country/Country"
import Elements from "../Pages/Elements/Elements"
import Immigration from "../Pages/Immigration/Immigration"
import Course from "../Pages/Course/Course"
import MainRoot from "../Pages/MainRoot"

export const ROUTES = [
    {
        path:'/',
        element: <MainRoot/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/blog',
                element: <Blog/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/country',
                element: <Country/>
            },
            {
                path:'/course',
                element: <Course/>
            },
            {
                path:'/elements',
                element: <Elements/>
            },
            {
                path:'/immigration',
                element: <Immigration/>
            }
        ]
    }
]
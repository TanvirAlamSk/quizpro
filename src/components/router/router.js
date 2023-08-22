import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home";
import QuizTest from "../QuizTest/QuizTest";
import Statistic from "../Statistic/Statistic";
import Blog from "../Blog/Blog";
import Topic from "../Topic/Topic";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/",
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path: "/statistic",
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <PrivateRoute><Statistic></Statistic></PrivateRoute>
            },
            {
                path: "/blog",
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: "/topic",
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Topic></Topic>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/quiz/:id",
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <PrivateRoute> <QuizTest></QuizTest></PrivateRoute>
            }
        ]
    }
])
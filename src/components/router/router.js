import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home";
import QuizTest from "../QuizTest/QuizTest";
import Statistic from "../Statistic/Statistic";
import Blog from "../Blog/Blog";
import Topic from "../Topic/Topic";

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
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Statistic></Statistic>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/topic",
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Topic></Topic>
            },
            {
                path: "/quiz/:id",
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <QuizTest></QuizTest>
            }
        ]
    }
])
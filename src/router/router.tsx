import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/Error-pages.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {MainPage} from "../pages/MainPage.tsx";

export const router = createBrowserRouter(
    [
        {
            path: "/login",
            element: <LoginPage/>,
            errorElement: <ErrorPage/>,

        },
        {
            path: "/main",
            element: <MainPage/>,
            errorElement: <ErrorPage/>,
        },
    ]
)

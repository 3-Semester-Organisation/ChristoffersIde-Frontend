import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFoundPage from "./components/NotFoundPage.jsx";
import RecipeByIngredientAndDietaryLimitations from "./components/RecipeByIngredientAndDietaryLimitations.jsx";
import HomePage from "./components/HomePage.jsx";
import Header from "./components/Header.jsx";
import Dialog from "./components/Dialog.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/recipe-person-name',
        element: <Dialog/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: '/recipe',
        element: <RecipeByIngredientAndDietaryLimitations />,
        errorElement: <NotFoundPage/>
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header/>
        <RouterProvider router={router}/>
    </StrictMode>,
)

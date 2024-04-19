import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Test from './Test.tsx'
import Test2 from './Test2.tsx'
import './index.css'
import {
    createHashRouter,
    RouterProvider
} from 'react-router-dom';
const router = createHashRouter([
    {
        path: "/",
        element: <Test />,
    },
    {
        path: "/test",
        element: <Test2 />,
    }
]);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
// )

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
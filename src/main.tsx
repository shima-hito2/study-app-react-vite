import React from 'react'
import ReactDOM from 'react-dom/client'
import Top from './pages/Top.tsx'
import Tasks from './pages/Tasks.tsx'
import Lesson from './pages/Lesson.tsx'
import Admin from './pages/admin/Admin.tsx'
import SubjectMaster from './pages/admin/master/SubjectMaster.tsx'
import RegistTask from './pages/admin/master/RegistTask.tsx'
import './index.css'
import {
    createHashRouter,
    RouterProvider
} from 'react-router-dom';
const router = createHashRouter([
    {
        path: "/",
        element: <Top />,
        children: [
            {
                path: "/task/:subjectId",
                element: <Tasks />,
            },
            {
                path: "/task/:subjectId/detail/:taskId",
                element: <Lesson />,
            }
        ]
    },
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                path: "/admin/subject",
                element: <SubjectMaster />,
            },
            {
                path: "/admin/task",
                element: <RegistTask />,
            }
        ]
    },
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
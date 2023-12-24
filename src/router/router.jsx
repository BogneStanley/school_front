import { createBrowserRouter } from "react-router-dom";
import { Layout } from '../features/layouts/Layout';
import { DashboardView } from "../features/dashboard/DashboardView";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'dashboard',
                element: <DashboardView />
            },
            {
                path: 'attributs',
                element: <div>Attributs</div>
            },
            {
                path: 'epreuves',
                element: <div>Epreuves</div>
            },
            {
                path: 'services',
                element: <div>Services</div>
            },
            {
                path: 'assistances',
                element: <div>Assistances</div>
            },
            {
                path: 'medias',
                element: <div>Medias</div>
            },
            {
                path: 'live',
                element: <div>Live</div>
            },
            {
                path: 'administrateur',
                element: <div>Administrateur</div>
            },
            {
                path: 'superviseur',
                element: <div>Superviseur</div>
            },
            {
                path: 'faq',
                element: <div>FAQ</div>
            },
        ]
    }
])

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './features/layouts/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <div>Dashboard</div>
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

function App() {
  return RouterProvider({ router })
}

export default App

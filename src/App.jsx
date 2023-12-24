
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Test</div>
  }
])

function App() {
  return RouterProvider({ router })
}

export default App

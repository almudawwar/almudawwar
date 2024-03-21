import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Root from './components/Root'
import HomePage from './pages/HomePage'
import MusicPage from './pages/MusicPage'
import CvPage from './pages/CvPage'
import AboutPage from './pages/AboutPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/music',
          element: <MusicPage />
        },
        {
          path: '/work',
          element: <CvPage />
        },
        {
          path: '/about',
          element: <AboutPage />
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App

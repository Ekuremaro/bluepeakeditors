import './App.css';
import Index from './pages/Index';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Error from './pages/Error';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <Error />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

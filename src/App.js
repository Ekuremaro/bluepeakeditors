import './App.css';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import Tabs from './pages/Tabs';
import Index from './pages/Index';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

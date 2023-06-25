import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import NoPage from './components/NoPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="menu" element={<Menu />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  )
)
const App = ({ routes }) => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

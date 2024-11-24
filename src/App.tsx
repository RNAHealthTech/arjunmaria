import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProcedureTemplatePage from './pages/ProcedureTemplatePage';
import ServiceTemplatePage from './pages/ServiceTemplatePage';




const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services/:slug' element={<ServiceTemplatePage />} />
        <Route path='/procedures/:slug' element={<ProcedureTemplatePage />} />
      </Routes>
    </Layout>

  )
}

export default App;

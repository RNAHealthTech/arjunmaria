import React from 'react';
import './index.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProcedureTemplatePage from './pages/ProcedureTemplatePage';
import ServiceTemplatePage from './pages/ServiceTemplatePage';
import ProceduresPage from './pages/Procedures';
import ServicesPage from './pages/Services';


const useScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};



const App: React.FC = () => {

  useScrollToTop();

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services/:slug' element={<ServiceTemplatePage />} />
        <Route path='/procedures/:slug' element={<ProcedureTemplatePage />} />
        <Route path='/procedures' element={<ProceduresPage />} />
        <Route path='/services' element={<ServicesPage />} />
      </Routes>
    </Layout>

  )
}

export default App;

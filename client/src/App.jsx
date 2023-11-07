import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SiteNavBar from './components/SiteNavBar'
import SiteNavMenu from './components/SiteNavMenu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Button from 'react-bootstrap/Button'
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import PageNotFoundPage from './pages/PageNotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleNavMenuClose = () => setShowNavMenu(false);
  const handleNavMenuShow = () => setShowNavMenu(true);

  return (
    <>
      <BrowserRouter>
        <SiteNavMenu show={showNavMenu} onHide={handleNavMenuClose} onShow={handleNavMenuShow}/>
        
        <Container className="vh-100 webpage-container">
          <Row>
            <Col sm={12}>
              <SiteNavBar showNavMenu={showNavMenu} handleNavMenuShow={handleNavMenuShow}/>
            </Col>
          </Row>
          <Row className="h-100">
            <Col sm={12}>
              
                <Routes>
                  <Route index element={<AboutMePage />} />
                  <Route path="portfolio" element={<PortfolioPage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="*" element={<PageNotFoundPage />} />
                </Routes>
              
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
      
      { /*
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */ }
    </>
  )
}

export default App
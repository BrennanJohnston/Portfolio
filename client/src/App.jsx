import { useState, useEffect, useRef } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteNavBar from './components/SiteNavBar'
import SiteNavMenu from './components/SiteNavMenu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Button from 'react-bootstrap/Button'
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ChiPage from './pages/ChiPage';
import PageNotFoundPage from './pages/PageNotFoundPage';
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import background1Image from './images/background9.jpg';
import background2Image from './images/background2.jpg';
import background3Image from './images/background3.jpg';
import './App.css'
import './ColorTheme.css';

function App() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [currentPageY, setCurrentPageY] = useState(0);

  const handleNavMenuClose = () => setShowNavMenu(false);
  const handleNavMenuShow = () => setShowNavMenu(true);

  const ref = useRef();

  const handleScroll = () => {
    
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div ref={ref} className="full-page">
      <BrowserRouter>
        <SiteNavMenu show={showNavMenu} onHide={handleNavMenuClose} onShow={handleNavMenuShow}/>

        <SiteNavBar showNavMenu={showNavMenu} handleNavMenuShow={handleNavMenuShow}/>

        <Parallax blur={8} bgImage={background1Image} strength={1000} bgImageStyle={{}}>
          <Container className="webpage-container">
            <Row>
              <Col sm={12}>
                <Routes>
                  <Route index element={<AboutMePage />} />
                  <Route path="portfolio" element={<PortfolioPage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="chi" element={<ChiPage />} />
                  <Route path="*" element={<PageNotFoundPage />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </Parallax>

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
    </div>
  )
}

export default App
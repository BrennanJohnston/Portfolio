import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SiteNavBar from './components/SiteNavBar'
import SiteNavMenu from './components/SiteNavMenu'
import Button from 'react-bootstrap/Button'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleNavMenuClose = () => setShowNavMenu(false);
  const handleNavMenuShow = () => setShowNavMenu(true);

  return (
    <>
      <SiteNavBar />
      <SiteNavMenu show={showNavMenu} onHide={handleNavMenuClose} onShow={handleNavMenuShow}/>
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
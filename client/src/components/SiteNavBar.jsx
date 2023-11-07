import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BsList } from 'react-icons/bs';
import NavDropdown from 'react-bootstrap/NavDropdown';

function SiteNavBar(props) {
  const SiteNavMenuOpenClicked = () => {
      if(!props.showNavMenu) {
        props.handleNavMenuShow();
      }
  }

  return (
      <Navbar expand="lg" className="nav-bar-custom" data-bs-theme="dark">
          <Navbar.Brand>
            <Button className="nav-bar-menu-button" onClick={SiteNavMenuOpenClicked}>
              <BsList className="nav-bar-menu-button-icon"/>
            </Button>
            {' '}Brennan Johnston
          </Navbar.Brand>
          
      </Navbar>
  );
}

export default SiteNavBar;
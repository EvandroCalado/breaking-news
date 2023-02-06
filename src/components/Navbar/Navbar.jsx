import logo from '../images/logoBN.png';
import { Button, Nav, ImageLogo, InputSpace } from './NavbarStyled';

const Navbar = () => {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Pesquise por título" />
        </InputSpace>
        <ImageLogo src={logo} alt="Logo Breaking News" />
        <Button>Entrar</Button>
      </Nav>
    </>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper } from './style';
import  Button from '../Button';

import './Menu.css';

// import { Container } from './styles';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/" >
        <LogoImage className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>
      <Button as={Link} className="ButtoLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  )
}

export default Menu;
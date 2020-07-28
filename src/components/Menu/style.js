import styled from 'styled-components';
import Button from '../Button';

export const LogoImage = styled.img`
  max-width: 168px;

  /* estilos em determinada resulução -> mediaquery*/
  @media(max-width: 800px) {
    max-width: 105px;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;
  
  position: fixed;
  top: 0;
  left: 0;

  padding-left: 5%;
  padding-right: 5%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
  background-color: var(--black);
  border-bottom: 2px solid var(--primary);

   /* estilos em determinada resulução -> mediaquery*/
   @media(max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

export const ButtonLink = styled(Button)`
  color: var(--white);
  border: 1px solid var(--white);
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

   /* estilos em determinada resulução -> mediaquery*/
   @media(max-width: 800px) {
     border-radius: 0;
     border: 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary);
    color: var(--white);
    outline: 0;
    text-align: center;
  }
`;
import React  from 'react'
import Logo from '../../images/scamper-logo.png';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItems, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavLogoImg
} from './NavbarElements';


const Navbar = ({toggle}) => {

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}/>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavLogoImg to src={Logo} />    
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItems>
                        <NavLinks to="/">Home</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="about">About Us</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="stack">Stack</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItems>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="contact">Contact Us</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar
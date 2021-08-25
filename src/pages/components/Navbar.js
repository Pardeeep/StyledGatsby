import React,{ useState } from "react"
import styled from "styled-components"


const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  font-family: "Roboto";
  position: relative;
`

const Logo = styled.h3`
  width: 35%;
`

const Links = styled.ul`
  width: 65%;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease-in;
  @media (max-width: 768px) {
    display: ${props => props.open? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    inset: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    justify-content: center;
    overflow: hidden;
    background-color:orange;
    transition: all 0.3s ease-in;
    overflow-y: hidden;

  }
`

const Active = styled.li`
  color: #fd8803;
  cursor: pointer;
`

const Li = styled.li`
@media (max-width: 768px) {
  margin-bottom: 30px;
}
`

const Anchor = styled.a`
  text-decoration: none;
  color: #000;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`

const Button = styled.button`
  padding: 10px;
  background-color: #43b97f;
  color: white;
  border: none;
  border-radius: 3px;
`

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 35px;
  right: 40px;
  z-index: 20;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open ? '#000' : '#000'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavBar>
      <Logo>MRstudio</Logo>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Links open={open}>
        <Li>
          <Active>Catalogue</Active>
        </Li>
        <Li>
          <Anchor href="#">Your Cart</Anchor>
        </Li>
        <Li>
          <Anchor href="#">Favorites</Anchor>
        </Li>
        <Li>
          <Anchor href="#">Your Orders</Anchor>
        </Li>
        <Li>
          <Button>Get Started</Button>
        </Li>
      </Links>
    </NavBar>
  )
}

export default Navbar

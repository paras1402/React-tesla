import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const sideBarToggleHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Container>
        <a href="#">
          <img src="/tesla-clone-images/images/logo.svg" alt=""></img>
        </a>
        <MenuGroup>
          <div>Model S </div>
          <div>Model 3 </div>
          <div>Model X </div>
          <div>Model Y </div>
        </MenuGroup>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>

          <MenuIconContainer onClick={sideBarToggleHandler}>
            <MenuIcon></MenuIcon>
          </MenuIconContainer>
        </RightMenu>

        <BurgerNav status={isOpen}>
          <CloseContainer onClick={sideBarToggleHandler}>
            <Close />
          </CloseContainer>
          <li>
            <a href="#"> Model S</a>
          </li>
          <li>
            <a href="#"> Model Y</a>
          </li>
          <li>
            <a href="#"> Model X</a>
          </li>
          <li>
            <a href="#"> Model 3</a>
          </li>
          <li>
            <a href="#"> Existing Inventory</a>
          </li>
          <li>
            <a href="#"> Existing Inventory</a>
          </li>
          <li>
            <a href="#"> Trade-in</a>
          </li>
          <li>
            <a href="#"> CyberTruck</a>
          </li>

          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>

          <li>
            <a href="#"> Charging</a>
          </li>
        </BurgerNav>
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const MenuGroup = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  div {
    font-weight: 600;
    padding: 0 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;

  a {
    font-weight: 600;
    padding: 0 5px;
    cursor: pointer;
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  width: 300px;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  padding: 20px;
  list-style: none;
  transform: ${(props) => (props.status ? "translateX(100%)" : "")};
  transition: all 0.1s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Close = styled(CloseIcon)`
  cursor: pointer;
`;

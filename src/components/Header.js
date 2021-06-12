import React from "react";
import styled from "styled-components";

import MenuIcon from "@material-ui/icons/Menu";
function Header() {
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
          <a href="#">Tesla Account</a>
          <MenuIconContainer>
            <MenuIcon></MenuIcon>
          </MenuIconContainer>
        </RightMenu>
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

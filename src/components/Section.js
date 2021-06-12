import React from "react";
import styled from "styled-components";

function Section(props) {
  return (
    <Container bgImage={props.backgroundImg}>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>

      <ButtonGroup>
        <LeftButton>{props.leftBtnText}</LeftButton>
        <RightButton>{props.rightBtnText}</RightButton>
      </ButtonGroup>
      <DownArrow src="/tesla-clone-images/images/down-arrow.svg"></DownArrow>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  background-color: blue;
  width: 100%;
  height: 100vh;
  background-image: ${(props) =>
    `url('tesla-clone-images/images/${props.bgImage}')`};

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  flex-grow: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const LeftButton = styled.div`
  height: 40px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
  border-radius: 100px;
  background-color: rgba(23, 36, 32, 0.8);
  font-size: 12px;
  opacity: 0.85;
  margin: 8px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  margin-bottom: 50px;
`;

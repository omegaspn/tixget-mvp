import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
	100% {
		transform: rotate(360deg);
	}
`;

const Circle = styled.div`
  position: relative;
  width: 54px;
  height: 54px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: orange;
  border-radius: 100%;
  animation: ${rotate} 1.4s infinite linear;
`;

const sharedStyles = `
  position: absolute;
  width: 44px;
  height: 44px;
  transform: translate(-50%, -50%);
`;

const CircleGradient = styled.div`
  ${sharedStyles}
  top: -24px;
  left: 6px;
  background-color: white;
  background-image: linear-gradient(0deg, orange 0%, white 50%);
  transform: rotate(-45deg);
`;

const CircleInner = styled.div`
  ${sharedStyles}
  top: 50%;
  left: 50%;
  background-color: white;
  border-radius: 100%;
`;

const Spinner = () => (
  <Circle>
    <CircleGradient />
    <CircleInner />
  </Circle>
);

export default Spinner;

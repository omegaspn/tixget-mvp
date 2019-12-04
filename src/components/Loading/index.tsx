import React, { FunctionComponent } from "react";
import Overlay from "../Overlay";
import Spinner from "../Spinner";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loading: FunctionComponent = () => {
  return (
    <Overlay>
      <Wrapper id="loading">
        <Spinner />
      </Wrapper>
    </Overlay>
  );
};

export default Loading;

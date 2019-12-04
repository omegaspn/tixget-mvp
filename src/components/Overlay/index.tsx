import styled from "styled-components";
import { Flex } from "rebass";

export const BaseOverlay = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

const Overlay = styled(BaseOverlay)`
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.67);
`;

export default Overlay;

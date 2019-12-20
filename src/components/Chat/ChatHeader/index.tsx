import React, { FunctionComponent } from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
const ChatHeader: FunctionComponent = () => {
  const NavbarWrapper = styled(Box)`
    left: 0;
    right: 0;
    padding: 10px;
    background-color: #ffeee6;
  `;

  const LogoWrapper = styled.img`
    width: 40px;
  `;

  return (
    <NavbarWrapper>
      <Flex justifyContent="space-between">
        <LogoWrapper src="https://image.flaticon.com/icons/png/512/271/271220.png"></LogoWrapper>
        <Flex flexDirection="column" justifyContent="center">
          <Text fontWeight="bold" fontSize={[4, 5, 6]}>
            Somchai
          </Text>
        </Flex>
        <LogoWrapper src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"></LogoWrapper>
      </Flex>
    </NavbarWrapper>
  );
};

export default ChatHeader;

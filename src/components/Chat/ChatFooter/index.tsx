import React, { FunctionComponent } from "react";
import { Box, Flex, Text, Button } from "rebass";
import styled from "styled-components";

interface ChatFooterProps {
  onClickOpenMenu: () => void;
}

const ChatFooter: FunctionComponent<ChatFooterProps> = props => {
  const NavbarWrapper = styled(Box)`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px;
    background-color: #ffeee6;
  `;

  const LogoWrapper = styled.img`
    width: 40px;
  `;

  const TextInput = styled.input`
    width: 220px;
  `;

  return (
    <NavbarWrapper>
      <Flex justifyContent="space-between">
        <LogoWrapper
          src="https://image.flaticon.com/icons/png/512/151/151917.png"
          onClick={props.onClickOpenMenu}
        ></LogoWrapper>
        <TextInput></TextInput>
        <Button>
          <Text>Send</Text>
        </Button>
      </Flex>
    </NavbarWrapper>
  );
};

export default ChatFooter;

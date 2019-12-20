import React, { FunctionComponent } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
const Navbar: FunctionComponent = () => {
  const NavbarWrapper = styled(Box)`
    left: 0;
    right: 0;
    padding: 10px;
  `;

  const LogoWrapper = styled.img`
    width: 70px;
  `;

  const CustomInput = styled.input`
    font-size: 16px;
    left: 0;
    right: 0;
  `;

  return (
    <NavbarWrapper>
      <Box>
        <Flex justifyContent="space-between">
          <LogoWrapper src="https://i.ya-webdesign.com/images/ticket-logo-png-2.png"></LogoWrapper>
          <LogoWrapper src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"></LogoWrapper>
        </Flex>
      </Box>
      <Box>
        <Flex justifyContent="center">
          <Box>
            <CustomInput type="text" placeholder="Search event.."></CustomInput>
          </Box>
        </Flex>
      </Box>
    </NavbarWrapper>
  );
};

export default Navbar;
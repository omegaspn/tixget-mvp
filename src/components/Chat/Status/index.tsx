import React, { FunctionComponent } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
const Status: FunctionComponent = () => {
  const StatusWrapper = styled(Box)`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 60px;
    padding: 10px;
    background-color: #ffeee6;
  `;

  return (
    <StatusWrapper>
      <Flex justifyContent="space-between">
        <Box>PAY</Box>
        <Box>PAID</Box>
        <Box>WAIT</Box>
      </Flex>
    </StatusWrapper>
  );
};

export default Status;

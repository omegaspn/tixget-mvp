import React, { FunctionComponent, useState } from "react";
import { Box, Flex, Text } from "rebass";
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

  const MockProgress = ["PAY", "PAID", "WAIT"];
  const [currentProgress, setCurrentProgress] = useState("PAID");

  return (
    <StatusWrapper>
      <Flex justifyContent="space-between">
        {MockProgress.map(progress => {
          if (progress === currentProgress) {
            return (
              <Box key={progress}>
                <Text color="red">{progress}</Text>
              </Box>
            );
          } else {
            return (
              <Box key={progress}>
                <Text color="primary">{progress}</Text>
              </Box>
            );
          }
        })}
      </Flex>
    </StatusWrapper>
  );
};

export default Status;

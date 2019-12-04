import React, { FunctionComponent } from "react";
import { Box, Flex } from "rebass";
import { t } from "../../i18n";
const Intro: FunctionComponent = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Box>{t.searchbar}</Box>
      </Flex>
      <Flex justifyContent="flex-start">
        <Box>{t.reccommend.title}</Box>
      </Flex>
      <Flex justifyContent="center">
        <Box width={1 / 2}>{t.reccommend.subtitle}</Box>
        <Box width={1 / 2}>{t.reccommend.subtitle2}</Box>
      </Flex>
    </>
  );
};

export default Intro;

import React, { FunctionComponent } from "react";
import { EventCard } from "../../components";
import { Box, Flex } from "rebass";
import { t } from "../../i18n";
const Intro: FunctionComponent = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Box>{t.searchBar}</Box>
      </Flex>
      <Flex justifyContent="flex-start">
        <Box>{t.reccommend.title}</Box>
      </Flex>
      <Flex justifyContent="center">
        <EventCard></EventCard>
      </Flex>
    </>
  );
};

export default Intro;

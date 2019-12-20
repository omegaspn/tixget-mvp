import React, { FunctionComponent } from "react";
import { EventCard, Navbar } from "../../components";
import { Flex, Text } from "rebass";
import { t } from "../../i18n";

const Intro: FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Flex justifyContent="flex-start">
        <Text fontSize={[3, 4, 5]} fontWeight="bold">
          {t.reccommend.title}
        </Text>
      </Flex>
      <Flex justifyContent="center">
        <EventCard></EventCard>
      </Flex>
    </>
  );
};

export default Intro;

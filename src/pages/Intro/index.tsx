import React, { FunctionComponent } from "react";
import { EventCard, Navbar } from "../../components";
import { Flex, Text } from "rebass";
import { t } from "../../i18n";
import { PropsWithHistory } from "../../model";

const Intro: FunctionComponent<PropsWithHistory> = ({ history }) => {
  return (
    <>
      <Navbar />
      <Flex justifyContent="flex-start">
        <Text fontSize={[3, 4, 5]} fontWeight="bold">
          {t.reccommend.title}
        </Text>
      </Flex>

      <EventCard history={history}></EventCard>
    </>
  );
};

export default Intro;

import React, { FunctionComponent } from "react";
import { Box, Flex } from "rebass";
import { t } from "../../i18n";
const EventCard: FunctionComponent = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Box>{t.eventCard.buttonText}</Box>
      </Flex>
    </>
  );
};

export default EventCard;

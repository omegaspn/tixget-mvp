import React, { FunctionComponent } from "react";
import { Box, Text } from "rebass";
import { t } from "../../i18n";
import styled from "styled-components";
const EventCard: FunctionComponent = () => {
  const eventMock = [
    {
      name: "Circoloco",
      src:
        "https://p-u.popcdn.net/events/poster_a4s/000/007/213/medium/NEW_POSTER.jpg?1575342226",
      location: "Bangkok"
    },
    {
      name: "ChiangYai Fest",
      src:
        "https://www.greedgigs.com/wp-content/uploads/2019/06/chiang-yai-.jpg",
      location: "Chiang Mai"
    }
  ];

  const CardWrapper = styled(Box)`
    padding: 15px;
  `;

  const CardImage = styled.img`
    height: 300px;
  `;

  return (
    <>
      {eventMock.map(event => (
        <CardWrapper key={event.name + "wrapper"} width={[1]}>
          <Text fontSize={[3, 4, 5]} key={event.name + "text"}>
            {event.name}
          </Text>
          <CardImage src={event.src}></CardImage>
          <Box key={event.name}>{t.eventCard.buttonText}</Box>
        </CardWrapper>
      ))}
    </>
  );
};

export default EventCard;

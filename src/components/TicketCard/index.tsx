import React, { FunctionComponent } from "react";
import { Box, Text } from "rebass";
import { t } from "../../i18n";
import styled from "styled-components";

const TicketCard: FunctionComponent = () => {
  const eventMock = [
    {
      merchant: "A",
      src:
        "https://image.freepik.com/free-photo/yellow-ticket-top-view_1101-121.jpg?1",
      price: "1,500 THB"
    },
    {
      merchant: "B",
      src:
        "https://image.freepik.com/free-photo/yellow-ticket-top-view_1101-121.jpg?1",
      price: "2,300 THB"
    },
    {
      merchant: "C",
      src:
        "https://image.freepik.com/free-photo/yellow-ticket-top-view_1101-121.jpg?1",
      price: "2,300 THB"
    },
    {
      merchant: "D",
      src:
        "https://image.freepik.com/free-photo/yellow-ticket-top-view_1101-121.jpg?1",
      price: "2,700 THB"
    }
  ];

  const CardWrapper = styled(Box)`
    padding: 15px;
  `;

  const CardImage = styled.img`
    height: 200px;
  `;

  return (
    <>
      {eventMock.map(event => (
        <CardWrapper key={event.merchant + "wrapper"} width={[1]}>
          <Text fontSize={[3, 4, 5]} key={event.merchant + "text"}>
            {event.merchant}
          </Text>
          <CardImage src={event.src}></CardImage>
          <Box key={event.price}>{event.price}</Box>
        </CardWrapper>
      ))}
    </>
  );
};

export default TicketCard;

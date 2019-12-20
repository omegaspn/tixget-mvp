import React, { FunctionComponent } from "react";
import { Box, Text, Flex } from "rebass";
// import { t } from "../../i18n";
import styled from "styled-components";

const TicketCard: FunctionComponent = () => {
  const eventMock = [
    {
      merchant: "ขายด่วน ไม่ได้ไปแล้ว",
      src:
        "https://image.freepik.com/free-photo/yellow-ticket-top-view_1101-121.jpg?1",
      price: "1,500 THB"
    },
    {
      merchant: "ปล่อยๆๆ",
      src:
        "https://image.freepik.com/free-photo/yellow-ticket-top-view_1101-121.jpg?1",
      price: "2,300 THB"
    },
    {
      merchant: "เพิ่งเลิกกับแฟน ขก ไป ขายต่อ",
      src:
        "https://image.freepik.com/free-photo/yellow-ticket-top-view_1101-121.jpg?1",
      price: "2,300 THB"
    },
    {
      merchant: "Test",
      src:
        "https://image.freepik.com/free-photo/yellow-ticket-top-view_1101-121.jpg?1",
      price: "2,700 THB"
    }
  ];

  const CardWrapper = styled(Box)`
    padding: 15px;
    border: groove;
  `;

  const CardImage = styled.img`
    height: 200px;
  `;

  return (
    <>
      {eventMock.map(event => (
        <CardWrapper key={event.merchant + "wrapper"} width={[1]}>
          <Flex justifyContent="space-around">
            <CardImage src={event.src}></CardImage>

            <Flex flexDirection="column" justifyContent="space-around">
              <Box>
                <Text fontSize={[3, 4, 5]} key={event.merchant + "text"}>
                  {event.merchant}
                </Text>
              </Box>
              <Box key={event.price}>{event.price}</Box>
            </Flex>

            <Flex flexDirection="column" justifyContent="space-around">
              <img
                src="https://image.flaticon.com/icons/png/512/1380/1380338.png"
                style={{ height: "32px" }}
                alt="chat-icon"
              ></img>
              <img
                src="https://image.flaticon.com/icons/png/512/17/17216.png"
                style={{ height: "32px" }}
                alt="phone-icon"
              ></img>
            </Flex>
          </Flex>
        </CardWrapper>
      ))}
    </>
  );
};

export default TicketCard;

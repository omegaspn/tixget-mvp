import React, { FunctionComponent } from "react";
import { Navbar } from "../../components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { Flex, Button, Text } from "rebass";

const TicketContent: FunctionComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Picture = styled.img`
    height: 160px;
  `;

  const FooterWrapper = styled(Flex)`
    padding: 10px;
  `;

  return (
    <>
      <Navbar></Navbar>
      <Carousel responsive={responsive}>
        <Picture
          src="https://image.freepik.com/free-photo/yellow-ticket-top-view_1101-121.jpg?1"
          alt="ticketcontent-pic"
        ></Picture>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
      <Flex justifyContent="space-around">
        <div>aafafafafaf</div>
        <div>1,500</div>
      </Flex>
      <FooterWrapper justifyContent="space-around">
        <Button>
          <Text>CALL</Text>
        </Button>
        <Button>
          <Text>CHAT</Text>
        </Button>
      </FooterWrapper>
    </>
  );
};

export default TicketContent;

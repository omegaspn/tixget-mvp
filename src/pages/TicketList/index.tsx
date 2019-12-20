import React, { FunctionComponent } from "react";
import { Navbar } from "../../components";
import TicketCard from "../../components/TicketCard";
import { Box } from "rebass";

const TicketList: FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Box style={{ padding: "10px" }}>
        <TicketCard></TicketCard>
      </Box>
    </>
  );
};

export default TicketList;

import React, { FunctionComponent } from "react";
import { Navbar } from "../../components";
import TicketCard from "../../components/TicketCard";

const TicketList: FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <TicketCard></TicketCard>
    </>
  );
};

export default TicketList;

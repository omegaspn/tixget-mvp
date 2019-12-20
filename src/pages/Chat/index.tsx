import React, { FunctionComponent } from "react";
import { ChatHeader, ChatFooter, Status } from "../../components";

const Chat: FunctionComponent = () => {
  return (
    <>
      <ChatHeader></ChatHeader>
      <Status></Status>
      <ChatFooter></ChatFooter>
    </>
  );
};

export default Chat;

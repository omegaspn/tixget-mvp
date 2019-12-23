import React, { FunctionComponent, useState } from "react";
import { ChatHeader, ChatFooter, Status } from "../../components";

const Chat: FunctionComponent = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <ChatHeader />
      {openMenu && <Status />}
      <ChatFooter onClickOpenMenu={handleOpenMenu} />
    </>
  );
};

export default Chat;

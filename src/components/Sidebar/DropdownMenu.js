import React /*, { useState } */ from "react";
import { animated } from "react-spring";
import { Spring } from "react-spring";

function DropdownMenu(props) {
  let closedStyle = {
    height: 0,
  };

  let openStyle = {
    height: "auto",
  };

  // state used when trying to let all menu open
  //let [open, setOpen] =useState(props.active);

  const handleMenuDropDownClick = (e) => {
    props.handleClick();
    //setOpen(!open);
  };

  let menu = props.menu;
  let menuContent;

  const linkMenu = (
    <a
      href="#s"
      onClick={(e) => {
        handleMenuDropDownClick(e);
      }}
    >
      <i className={menu.icon}></i>
      <span className="menu-text">{menu.title}</span>
    </a>
  );
  menuContent = <> {linkMenu} </>;

  return (
    <li
      className={props.active ? "sidebar-dropdown active" : "sidebar-dropdown"}
    >
      {menuContent}
    </li>
  );
}

export default DropdownMenu;

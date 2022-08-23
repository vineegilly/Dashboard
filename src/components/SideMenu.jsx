import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { menu } from "./Menu";

const SideMenu = () => {
  return menu.map((item, key) => <MenuItem key={key} item={item} />);
}

const MenuItem = ({ item }) => {
  const Component =  SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  return (
    <ListItem button>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

export default SideMenu

import React from "react";
import { withStyles } from "@material-ui/core/styles";
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

const StyledListItem = withStyles({
  root: {
    borderRadius: "10px",
    "&$selected": {
      backgroundColor: "white",
      color: "#524e4a",
      "& .MuiListItemIcon-root": {
        color: "#524e4a"
      }
    },
    "&$selected:hover": {
      backgroundColor: "white",
      color: "#524e4a",
      "& .MuiListItemIcon-root": {
        color: "#524e4a"
      }
    },
    "&:hover": {
      backgroundColor: "white",
      color: "#524e4a",
      "& .MuiListItemIcon-root": {
        color: "#524e4a"
      }
    }
  },
  selected: {}
})(ListItem);

const SingleLevel = ({ item }) => {
  return (
    <StyledListItem button style={{marginBottom: '20px'}}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </StyledListItem>
  );
};

export default SideMenu

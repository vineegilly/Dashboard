import * as React from 'react';
import { styled, useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Drawer, CssBaseline, AppBar, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, IconButton, Avatar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import MuiTable from './Table';
import SideMenu from './SideMenu';
import Card from './Card';
import SearchCard from './SearchCard'

const drawerWidth = 240;

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
    },
  },
});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function TableNav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton style={{ marginLeft: 'auto' }}>
              <SettingsOutlinedIcon />
            </IconButton>
            <Avatar>
              V
            </Avatar>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
      <Grid container spacing={3}>
          {/* <Grid item xs={6}>
            <Paper style={{ background: '#e1dbff' }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <SearchOutlinedIcon />
                </Grid>
              </Grid>
            </Paper>
          </Grid> */}
          <Grid container spacing={3}>
          <Grid item xs={6} spacing={3}>
            <SearchCard />
          </Grid>
          <Grid item xs={6} spacing={3}>
            <Card />
          </Grid>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper style={{ background: '#e1dbff' }}>
              <SideMenu />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <MuiTable />
          </Grid>
        </Grid>


      </Main>
    </Box>
  );
}

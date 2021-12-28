import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
} from '@material-ui/core';
import CoronaLogo from '../assets/logos/logo.png';

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
          >
            <Box
              component="img"
              sx={{height: 65}}
              alt="logo."
              src={CoronaLogo}
            />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
          >
                        CORONAVIRUS STATS
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

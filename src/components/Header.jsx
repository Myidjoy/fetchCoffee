import React from 'react';
import {AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
        Наш суперкофе
        </Typography>
      </Toolbar>
    </AppBar>   
  );
};

export default Header;
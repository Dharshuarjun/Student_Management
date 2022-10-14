import React from 'react'
import { AppBar, Toolbar, TextField } from "@mui/material";

function Navbar() {
  return (
    <div>
    <AppBar>
      <Toolbar>
        <TextField className="main"></TextField>
      </Toolbar>
    </AppBar>
  </div>
  )
}

export default Navbar
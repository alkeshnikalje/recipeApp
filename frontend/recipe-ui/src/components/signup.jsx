import React from "react";
import { Card, Button, TextField } from "@mui/material";

function Signup() {
  return (
    <Card variant = "outlined" style={{ width: "250px",paddingTop: "20px",paddingBottom: "10px",paddingLeft: "20px" }}>
      <TextField type="email" label = "email" size="small" required />
      <br />
      <br />
      <TextField type="password" label = "password" size="small" required />
      <br />
      <br />
      <Button variant="contained" size="small">Sign Up</Button>
    </Card>
  );
}

export default Signup;
import React from "react";
import { Card, Button, TextField } from "@mui/material";

function Signup() {
  return (
    <Card style={{ width: "250px",paddingTop: "10px",paddingBottom: "10px",paddingLeft: "20px" }}>
      <label>Email</label>
      <br />
      <TextField type="text" size="small" required />
      <br />
      <label>Password</label>
      <br />
      <TextField type="password" size="small" required />
      <br />
      <br />
      <Button variant="contained" size="small">Sign Up</Button>
    </Card>
  );
}

export default Signup;
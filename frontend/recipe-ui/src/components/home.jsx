import { Typography } from "@mui/material";
import Signup from "./signup";
import Login from "./login";

function Home(){
    return (
        <>
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "50px" }}>
            <Typography variant="h7" align="center">
              Welcome to the Recipe App!, don't have an account? create one by signing up. Else, just login.
            </Typography>
          </div>
          <div style={{ display: "flex", paddingTop: "100px", justifyContent: "space-evenly" }}>
            <Signup />
            <Login />
          </div>
        </>
      )
}

export default Home;
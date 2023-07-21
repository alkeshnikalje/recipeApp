
import Signup from './components/signup';
import Login from './components/login';
import { Typography } from '@mui/material';

function App() {
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

export default App;

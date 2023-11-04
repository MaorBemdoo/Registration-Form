import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import OutlinedInput from "@mui/material/OutlinedInput"
import FormHelperText from "@mui/material/FormHelperText"
import {GlobalStyles} from "./GlobalStyles"

function App() {

  const CardStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1em",
    width: "400px",
    height: "400px"
  }

  return (
    <Card component="form" elevation={3} variant="outlined" sx={CardStyle}>
      <GlobalStyles/>
      <FormControl variant="outlined" color="success" fullWidth>
        <InputLabel htmlFor="firstname">First Name</InputLabel>
        <OutlinedInput id="firstname" label="First Name" aria-describedby="firstname-text"/>
        <FormHelperText id="firstname-text" hidden>First name is required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" fullWidth>
        <InputLabel htmlFor="lastname">Last Name</InputLabel>
        <OutlinedInput id="lastname" label="Last Name" aria-describedby="lastname-text"/>
        <FormHelperText id="lastname-text" hidden>Last name is required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" fullWidth>
        <InputLabel htmlFor="othername">Other Names</InputLabel>
        <OutlinedInput id="othername" label="Other Names" aria-describedby="othername-text"/>
      </FormControl>
      <FormControl variant="outlined"color="success" fullWidth>
        <InputLabel htmlFor="phonenum">Phone Number</InputLabel>
        <OutlinedInput id="phonenum" label="Phone Number" aria-describedby="phonenum-text"/>
        <FormHelperText id="phonenum-text" hidden>Phone number is invalid</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" fullWidth>
        <InputLabel htmlFor="regnum">Registration Number</InputLabel>
        <OutlinedInput id="regnum" label="Registration Number" aria-aria-describedby="regnum-text"/>
        <FormHelperText id="regnum-text" hidden>Registration number is required</FormHelperText>
      </FormControl>
      <Button variant="contained" color="success">Submit</Button>
    </Card>
  )
}

export default App

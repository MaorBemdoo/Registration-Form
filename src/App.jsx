import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import OutlinedInput from "@mui/material/OutlinedInput"
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
    padding: "2em",
    width: "500px",
    height: "400px"
  }

  return (
    <Card component="form" elevation={3} variant="outlined" sx={CardStyle}>
      <GlobalStyles/>
      <FormControl variant="outlined">
        <InputLabel htmlFor="firstname">First Name</InputLabel>
        <OutlinedInput id="firstname" label="First Name" color="success"/>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="lastname">Last Name</InputLabel>
        <OutlinedInput id="lastname" label="Last Name" color="success"/>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="othername">Other Names</InputLabel>
        <OutlinedInput id="othername" label="Other Names" color="success"/>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="phonenum">Phone Number</InputLabel>
        <OutlinedInput id="phonenum" label="Phone Number" color="success"/>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="regnum">Registration Number</InputLabel>
        <OutlinedInput id="regnum" label="Registration Number" color="success"/>
      </FormControl>
      <Button variant="contained" color="success">Submit</Button>
    </Card>
  )
}

export default App

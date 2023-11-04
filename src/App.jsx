import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import OutlinedInput from "@mui/material/OutlinedInput"

function App() {

  return (
    <Card component="form" elevation={3} variant="outlined">
      <FormControl variant="outlined">
        <InputLabel htmlFor="firstname">First Name</InputLabel>
        <OutlinedInput id="firstname" label="First Name"/>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="lastname">Last Name</InputLabel>
        <OutlinedInput id="lastname" label="Last Name"/>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="othername">Other Names</InputLabel>
        <OutlinedInput id="othername" label="Other Names"/>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="phonenum">Phone Number</InputLabel>
        <OutlinedInput id="phonenum" label="Phone Number"/>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="regnum">Registration Number</InputLabel>
        <OutlinedInput id="regnum" label="Registration Number"/>
      </FormControl>
      <Button variant="contained" color="success">Submit</Button>
    </Card>
  )
}

export default App

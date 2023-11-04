import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import OutlinedInput from "@mui/material/OutlinedInput"
import FormHelperText from "@mui/material/FormHelperText"
import {GlobalStyles} from "./GlobalStyles"
import { useState } from "react"

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

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    othername: "",
    phonenum: "",
    regnum: ""
  })
  const [error, setError] = useState(false)

  const submitHandler = () => {
    if(user.firstname.trim() == 0 || user.lastname.trim() == 0 || user.othername.trim() == 0){
      setError({...error, firstname: true})
    }
  }

  return (
    <Card component="form" variant="outlined" sx={CardStyle}>
      <GlobalStyles/>
      <Card variant="outlined" sx={{backgroundColor: "#d41d1d", padding: "1em", width: "calc(400px - 2em)"}} hidden={!(error?.universal)} error={error?.universal}>All fields are required</Card>
      <FormControl variant="outlined" color="success" error={error?.firstname} fullWidth>
        <InputLabel htmlFor="firstname">First Name</InputLabel>
        <OutlinedInput id="firstname" label="First Name" value={user.firstname} onChange={(e) => setUser({...user,firstname: e.target.value})} aria-describedby="firstname-text"/>
        <FormHelperText id="firstname-text" hidden={!(error?.firstname)}>First name is required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" error={error?.lastname} fullWidth>
        <InputLabel htmlFor="lastname">Last Name</InputLabel>
        <OutlinedInput id="lastname" label="Last Name" value={user.lastname} onChange={(e) => setUser({...user,lastname: e.target.value})} aria-describedby="lastname-text"/>
        <FormHelperText id="lastname-text" hidden={!(error?.lastname)}>Last name is required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" fullWidth>
        <InputLabel htmlFor="othername">Other Names</InputLabel>
        <OutlinedInput id="othername" label="Other Names" value={user.othername} onChange={(e) => setUser({...user,othername: e.target.value})} aria-describedby="othername-text"/>
      </FormControl>
      <FormControl variant="outlined"color="success" error={error?.phonenum} fullWidth>
        <InputLabel htmlFor="phonenum">Phone Number</InputLabel>
        <OutlinedInput id="phonenum" label="Phone Number" value={user.phonenum} onChange={(e) => setUser({...user,phonenum: e.target.value})} aria-describedby="phonenum-text"/>
        <FormHelperText id="phonenum-text" hidden={!(error?.phonenum)}>Phone number is invalid</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" error={error?.regnum} fullWidth>
        <InputLabel htmlFor="regnum">Registration Number</InputLabel>
        <OutlinedInput id="regnum" label="Registration Number" value={user.regnum} onChange={(e) => setUser({...user,regnum: e.target.value})} aria-describedby="regnum-text"/>
        <FormHelperText id="regnum-text" hidden={!(error?.regnum)}>Registration number is required</FormHelperText>
      </FormControl>
      <Button variant="contained" color="success" onClick={submitHandler}>Submit</Button>
    </Card>
  )
}

export default App

import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import OutlinedInput from "@mui/material/OutlinedInput"
import FormHelperText from "@mui/material/FormHelperText"
import {GlobalStyles} from "./GlobalStyles"
import { useState, useRef, useEffect } from "react"

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
    height: "450px"
  }

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    othername: "",
    phonenum: "",
    regnum: ""
  })
  const [error, setError] = useState(false)
  const inputRefContainer = useRef()

  const phoneNumRegex = /^(0|\+\d{1,4})\d{10}$/g
  const regNumRegex = /^[A-Z]{3}\/\d{2}\/\d{2}\/\d{2}\/\d{4}$/g

  const submitHandler = () => {
    if(user.firstname.trim() == "" && user.lastname.trim() == "" && user.phonenum.trim() == "" && user.regnum.trim() == ""){
      setError({...error, universal: true})
    } else if(user.firstname.trim() == ""){
      setError({...error, firstname: true})
    } else if(user.lastname.trim() == ""){
      setError({...error, lastname: true})
    } else if(user.phonenum.trim() == "" || !(phoneNumRegex.test(user.phonenum))){
      setError({...error, phonenum: true})
    } else if(user.regnum.trim() == "" || !(regNumRegex.test(user.regnum))){
      setError({...error, regnum: true})
    }
  }

  const phoneNumErrHandler = (phonenum) => {
    if(phonenum.trim() == ""){
      return "Phone number is required"
    } else if(!phoneNumRegex.test(phonenum)){
      return "Phone number is invalid"
    }
  }

  const regNumErrHandler = (regnum) => {

    if(regnum.trim() == ""){
      return "Registration number is required"
    } else if(!phoneNumRegex.test(regnum)){
      return "Registration number is invalid"
    }
  }

  // useEffect(() => {
  //   inputRefContainer.current.onchange = () => {
  //     setError(false)
  //   }
  // })

  return (
    <Card component="form" variant="outlined" sx={CardStyle}>
      <GlobalStyles/>
      <Card variant="outlined" sx={{backgroundColor: "#d41d1d", padding: "1em", width: "calc(400px - 2em)"}} hidden={!(error?.universal)} error={error?.universal}>All fields are required</Card>
      <FormControl variant="outlined" color="success" error={error?.firstname} fullWidth>
        <InputLabel htmlFor="firstname">First Name</InputLabel>
        <OutlinedInput id="firstname" label="First Name" ref={inputRefContainer} value={user.firstname} onChange={(e) => setUser({...user,firstname: e.target.value})} aria-describedby="firstname-text"/>
        <FormHelperText id="firstname-text" hidden={!(error?.firstname)}>First name is required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" error={error?.lastname} fullWidth>
        <InputLabel htmlFor="lastname">Last Name</InputLabel>
        <OutlinedInput id="lastname" label="Last Name" ref={inputRefContainer} value={user.lastname} onChange={(e) => setUser({...user,lastname: e.target.value})} aria-describedby="lastname-text"/>
        <FormHelperText id="lastname-text" hidden={!(error?.lastname)}>Last name is required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" fullWidth>
        <InputLabel htmlFor="othername">Other Names</InputLabel>
        <OutlinedInput id="othername" label="Other Names" ref={inputRefContainer} value={user.othername} onChange={(e) => setUser({...user,othername: e.target.value})} aria-describedby="othername-text"/>
      </FormControl>
      <FormControl variant="outlined"color="success" error={error?.phonenum} fullWidth>
        <InputLabel htmlFor="phonenum">Phone Number</InputLabel>
        <OutlinedInput id="phonenum" label="Phone Number" ref={inputRefContainer} value={user.phonenum} onChange={(e) => setUser({...user,phonenum: e.target.value})} aria-describedby="phonenum-text"/>
        <FormHelperText id="phonenum-text" hidden={!(error?.phonenum)}>{phoneNumErrHandler(user.phonenum)}</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" error={error?.regnum} fullWidth>
        <InputLabel htmlFor="regnum">Registration Number</InputLabel>
        <OutlinedInput id="regnum" label="Registration Number" ref={inputRefContainer} value={user.regnum} onChange={(e) => setUser({...user,regnum: e.target.value.toUpperCase()})} aria-describedby="regnum-text"/>
        <FormHelperText id="regnum-text" hidden={!(error?.regnum)}>{regNumErrHandler(user.regnum)}</FormHelperText>
      </FormControl>
      <Button variant="contained" color="success" onClick={submitHandler}>Submit</Button>
    </Card>
  )
}

export default App

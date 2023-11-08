import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import OutlinedInput from "@mui/material/OutlinedInput"
import FormHelperText from "@mui/material/FormHelperText"
import {GlobalStyles} from "./GlobalStyles"
import { useState, useRef, useEffect } from "react"
import FormLabel from '@mui/material/FormLabel'

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
  const [uniError, setUniError] = useState(false)
  const [fnError, setFnError] = useState(false)
  const [lnError, setLnError] = useState(false)
  const [pnError, setPnError] = useState(false)
  const [rnError, setRnError] = useState(false)
  const inputRefContainer = useRef(null)

  const phoneNumRegex = /^(0|\+\d{1,4})\d{10}$/g
  const regNumRegex = /^[A-Z]{3}\/\d{2}\/\d{2}\/\d{2}\/\d{4}$/g

  const validForm = () => {
    let isValid = true;

    // validate all fields
    if(user.firstname.trim() == "" && user.lastname.trim() == "" && user.phonenum.trim() == "" && user.regnum.trim() == ""){
      setUniError(true)
      return;
      isValid = false;
    } else{
      setUniError(false)
    }

    // validate name
    if(user.firstname.trim() == ""){
      setFnError(true)
      isValid = false;
    } if(user.lastname.trim() == ""){
      setLnError(true)
      isValid = false;
    } else{
      setFnError(false)
      setLnError(false)
    }

    // validate phonenum
    if(user.phonenum.trim() == "" || !(phoneNumRegex.test(user.phonenum))){
      setPnError(true)
      isValid = false;
    } else{
      setPnError(false)
    }

    // validate regnum
    if(user.regnum.trim() == "" || !(regNumRegex.test(user.regnum))){
      setRnError(true)
      isValid = false;
    } else{
      setRnError(false)
    }

    return isValid
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if(validForm()){
      setUser({
        firstname: "",
        lastname: "",
        othername: "",
        phonenum: "",
        regnum: ""
      })
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

  useEffect(() => {
    inputRefContainer.current.onchange = () => {
      setUniError(false)
      setFnError(false)
      setLnError(false)
      setPnError(false)
      setRnError(false)
    }
  }, [])

  return (
    <Card component="form" method="post" variant="outlined" sx={CardStyle}>
      <GlobalStyles/>
      <Card variant="outlined" sx={{color: "white", backgroundColor: "#d41d1d", padding: "1em", width: "calc(400px - 2em)"}} hidden={!(uniError)}>All fields with * are required</Card>
      <Card variant="outlined" sx={{color: "white", backgroundColor: "#3a43c0", padding: "1em", width: "calc(400px - 2em)"}}></Card>
      <FormControl variant="outlined" color="success" error={fnError} fullWidth required>
        <InputLabel htmlFor="firstname">First Name</InputLabel>
        <OutlinedInput id="firstname" label="First Name" ref={inputRefContainer} value={user.firstname} onChange={(e) => setUser({...user,firstname: e.target.value})} aria-describedby="firstname-text"/>
        <FormHelperText id="firstname-text" hidden={!(fnError)}>First name is required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" error={lnError} fullWidth required>
        <InputLabel htmlFor="lastname">Last Name</InputLabel>
        <OutlinedInput id="lastname" label="Last Name" ref={inputRefContainer} value={user.lastname} onChange={(e) => setUser({...user,lastname: e.target.value})} aria-describedby="lastname-text"/>
        <FormHelperText id="lastname-text" hidden={!(lnError)}>Last name is required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" fullWidth>
        <InputLabel htmlFor="othername">Other Names</InputLabel>
        <OutlinedInput id="othername" label="Other Names" ref={inputRefContainer} value={user.othername} onChange={(e) => setUser({...user,othername: e.target.value})} aria-describedby="othername-text"/>
      </FormControl>
      <FormControl variant="outlined"color="success" error={pnError} fullWidth required>
        <InputLabel htmlFor="phonenum">Phone Number</InputLabel>
        <OutlinedInput id="phonenum" label="Phone Number" ref={inputRefContainer} value={user.phonenum} onChange={(e) => setUser({...user,phonenum: e.target.value})} aria-describedby="phonenum-text"/>
        <FormHelperText id="phonenum-text" hidden={!(pnError)}>{phoneNumErrHandler(user.phonenum)}</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" error={rnError} fullWidth required>
        <InputLabel htmlFor="regnum">Registration Number</InputLabel>
        <OutlinedInput id="regnum" label="Registration Number" ref={inputRefContainer} value={user.regnum} onChange={(e) => setUser({...user,regnum: e.target.value.toUpperCase()})} aria-describedby="regnum-text"/>
        <FormHelperText id="regnum-text" hidden={!(rnError)}>{regNumErrHandler(user.regnum)}</FormHelperText>
      </FormControl>
      <Button variant="contained" color="success" type="submit" onClick={submitHandler}>Submit</Button>
    </Card>
  )
}

export default App

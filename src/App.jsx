import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import OutlinedInput from "@mui/material/OutlinedInput"
import FormHelperText from "@mui/material/FormHelperText"
import {GlobalStyles} from "./GlobalStyles"
import { useState, useRef, useEffect } from "react"
import FormLabel from '@mui/material/FormLabel'
import Modal from '@mui/material/Modal'
import {CheckCircleOutline, WarningOutlined} from "@mui/icons-material"
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import emailjs from '@emailjs/browser';
import {v4 as uuidv4} from "uuid"

function App() {

  const CardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1em",
    width: "400px",
    height: window.innerWidth <= 380 ? "80%" : "450px"
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
  const [success, isSuccess] = useState(false)
  const [loading, isLoading] = useState(false)
  const [error, isError] = useState(false)
  const fnRefContainer = useRef(null)
  const lnRefContainer = useRef(null)
  const pnRefContainer = useRef(null)
  const rnRefContainer = useRef(null)

  const phoneNumRegex = /^(0|\+\d{1,4})\d{10}$/g
  const regNumRegex = /^[A-Z]{3}\/\d{2}\/\d{2}\/\d{2}\/\d{4}$/g

  const validForm = () => {
    let isValid = true;

    // validate all fields
    if(user.firstname.trim() == "" && user.lastname.trim() == "" && user.phonenum.trim() == "" && user.regnum.trim() == ""){
      setUniError(true)
      isValid = false;
      return;
    }

    // validate name
    if(user.firstname.trim() == ""){
      setFnError(true)
      isValid = false;
    } if(user.lastname.trim() == ""){
      setLnError(true)
      isValid = false;
    }

    // validate phonenum
    if(user.phonenum.trim() == "" || !(phoneNumRegex.test(user.phonenum))){
      setPnError(true)
      isValid = false;
    }

    // validate regnum
    if(user.regnum.trim() == "" || !(regNumRegex.test(user.regnum))){
      setRnError(true)
      isValid = false;
    }

    return isValid
  }

  const emailFunc = () => {
    const publicKey = "SodAMZNmb3PKAwz9g"
    const serviceID = "service_427nc5e"
    const templateID = "template_lymv5jq"

    const templateParams = {
      userId: uuidv4(),
      fullname: user.firstname.trim() + " " + (user.othername.trim() != "" ? user.othername.trim() + " " : "") + user.lastname.trim(),
      phonenum: user.phonenum,
      regnum: user.regnum
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        isSuccess(true)
        isLoading(false)
        isError(false)
      })
      .catch(() => {
        isSuccess(true)
        isLoading(false)
        isError(true)
      })
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
      isLoading(true)
      emailFunc()
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
    fnRefContainer.current.onchange = () => {
      setUniError(false)
      setFnError(false)
      setLnError(false)
      setPnError(false)
      setRnError(false)
    }
    lnRefContainer.current.onchange = () => {
      setUniError(false)
      setFnError(false)
      setLnError(false)
      setPnError(false)
      setRnError(false)
    }
    pnRefContainer.current.onchange = () => {
      setUniError(false)
      setFnError(false)
      setLnError(false)
      setPnError(false)
      setRnError(false)
    }
    rnRefContainer.current.onchange = () => {
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
      <Modal open={success} onClose={() => isSuccess(false)} children={
        <Card variant="outlined" sx={{padding: "2rem", textAlign: "center", width: "400px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", overflow: "visible"}}>
          {error ? <WarningOutlined color="error" sx={{fontSize: "6rem", transform: "translateY(-100%)"}}/> : <CheckCircleOutline sx={{fontSize: "6rem", fill: "#0f7230", transform: "translateY(-100%)"}}/>}
          <Typography variant="h4" color="initial" marginTop={-10} paddingBottom={1}>{error ? "Oops!!!" : "Congratutions,"}</Typography>
          <Typography variant="h5" color="initial">{error ? "An error occurred check your internet connection" : "You have completed the registration"}</Typography>
        </Card>}/>
      <Card variant="outlined" sx={{backgroundColor: "#3a43c0", width: "400px"}}></Card>
      <Card variant="outlined" sx={{color: "white", backgroundColor: "#d41d1d", padding: "1em", width: "calc(400px - 2em)"}} hidden={!(uniError)}>All fields with * are required</Card>
      <FormControl variant="outlined" color="success" error={fnError || uniError} fullWidth required>
        <InputLabel htmlFor="firstname">First Name</InputLabel>
        <OutlinedInput id="firstname" label="First Name" ref={fnRefContainer} value={user.firstname} onChange={(e) => setUser({...user,firstname: e.target.value})} aria-describedby="firstname-text"/>
        <FormHelperText id="firstname-text" hidden={!(fnError)}>First name is required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" error={lnError || uniError} fullWidth required>
        <InputLabel htmlFor="lastname">Last Name</InputLabel>
        <OutlinedInput id="lastname" label="Last Name" ref={lnRefContainer} value={user.lastname} onChange={(e) => setUser({...user,lastname: e.target.value})} aria-describedby="lastname-text"/>
        <FormHelperText id="lastname-text" hidden={!(lnError)}>Last name is required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" fullWidth>
        <InputLabel htmlFor="othername">Other Names</InputLabel>
        <OutlinedInput id="othername" label="Other Names" value={user.othername} onChange={(e) => setUser({...user,othername: e.target.value})} aria-describedby="othername-text"/>
      </FormControl>
      <FormControl variant="outlined"color="success" error={pnError || uniError} fullWidth required>
        <InputLabel htmlFor="phonenum">Phone Number</InputLabel>
        <OutlinedInput id="phonenum" label="Phone Number" ref={pnRefContainer} value={user.phonenum} onChange={(e) => setUser({...user,phonenum: e.target.value})} aria-describedby="phonenum-text"/>
        <FormHelperText id="phonenum-text" hidden={!(pnError)}>{phoneNumErrHandler(user.phonenum)}</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" color="success" error={rnError || uniError} fullWidth required>
        <InputLabel htmlFor="regnum">Registration Number</InputLabel>
        <OutlinedInput id="regnum" label="Registration Number" ref={rnRefContainer} value={user.regnum} onChange={(e) => setUser({...user,regnum: e.target.value.toUpperCase()})} aria-describedby="regnum-text"/>
        <FormHelperText id="regnum-text" hidden={!(rnError)}>{regNumErrHandler(user.regnum)}</FormHelperText>
      </FormControl>
      <Button variant="contained" color="success" type="submit" onClick={submitHandler} sx={{width: "100px", cursor: `${loading ? "not-allowed" : "pointer"}`, pointerEvents: `${loading ? "none" : "all"}`}}>{loading ? <CircularProgress color="inherit" size="1.3rem"/> : "Submit"}</Button>
    </Card>
  )
}

export default App

import React from 'react'
import { Modal ,TextField , Button ,Avatar ,Box } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Title } from './style';



  
const Login = () => {

    const [showModal, setshowModal] = useState(true)
    const [email,setemail] = useState("")
    const [password, setpassword] = useState("")

    const handleOpen = () =>{
        setshowModal(true)

    }
    const handleClose = () =>{
        setshowModal(false)
    }
    const handleEmail = (e) =>{
        setemail(e.target.value)
    }
    const handlePassword = (e) =>{
        setpassword(e.target.value)
    }
    const Navigate=useNavigate();
    const handleNavigation = () =>{
      Navigate("/signup")
    }

  return(
        <>
        {/* <button onClick={handleOpen}> Click me
        
        </button> */}
        
        <Modal 
        hideBackdrop
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
        >
            
            <Box sx={styles.modalStyle}>
        <div style={{ width: "inherit", height: "inherit" }}>
        
        <Avatar 
            sx={{ 
            width: 60, 
            height: 60, 
            backgroundColor:"blue",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginLeft:"95px",
            marginBottom:"30px"

           
            }}

  
    >
          </Avatar>
          <Title>Login</Title>

        <TextField
              style={{ width: "inherit", marginBottom: "10px" }}
              
              
              placeholder="Tanzeel Ur Rehman"
              value={email}
              variant="filled"
              onChange={handleEmail}
              multiline
              required
              id="outlined-required"
              label="Email Address"
              
            />
            <TextField
              style={{ width: "inherit", marginBottom: "10px" }}
              id="filled-start-adornment"
              label="Password"
              placeholder="Example:123"
              value={password}
              variant="filled"
              onChange={handlePassword}
              multiline
              
            />
          
            <Button
              style={styles.loginButton}
            
               
              
            >
              Login
            </Button>
            <Button style={styles.signUpButton} onClick={
                ()=>{ handleNavigation()  }} >
              Signup
            </Button>
            
          </div>
          </Box>
      

    </Modal>
    </>
  

  )
}

const styles = {
    signUpButton: {
      backgroundColor: "blue",
      color: "white",
      display: "flex",
      marginRight: "auto",
      marginTop: "-36px",
      borderRadius:"10px"
    },
    loginButton: {
      backgroundColor: "blue",
      color: "white",
      display: "flex",
      marginLeft: "auto",
      borderRadius:"10px"
      
    },
    modalStyle: {
      display:"flex",
      alignitems:"center",
      justifycontent:"center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 250,
      bgcolor: "background.paper",
      border: "2px solid #ADD8E6",
      boxShadow: 24,
      p: 4,
    },
    
  };

export default Login;
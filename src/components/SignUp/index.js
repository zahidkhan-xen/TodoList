import React from 'react'
import { useState } from 'react';
import { Modal ,TextField ,Button ,Box ,Avatar,Card } from '@mui/material';
import { Title } from './style';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  
    const [showModal, setshowModal] = useState(true)
    const [email,setemail] = useState("")
    const [createpassword, setcreatePassword] = useState("")
    const [confirmpassword, setconfirmPassword] = useState("")

    const handleOpen = () =>{
        setshowModal(true)

    }
    const handleClose = () =>{
        setshowModal(false)
    }
    const handleEmail = (e) =>{
        setemail(e.target.value)
    }
    const handleCreatePassword = (e) =>{
        setcreatePassword(e.target.value)
    }
    const handleConfirmPassword = (e) =>{
        setconfirmPassword(e.target.value)
    }
    const Navigate=useNavigate();
    const handleTodoNavigation = () =>{
      Navigate("/todo")
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
            <Title>SignUp</Title>
        
       

            <TextField
              style={{ width: "inherit", marginBottom: "10px" }}
              id="filled-start-adornment"
              label="Enter your email"
              placeholder="xyz@gmail.com"
              value={email}
              variant="filled"
              onChange={handleEmail}
              multiline
            />
            <TextField
              style={{ width: "inherit", marginBottom: "10px" }}
              id="filled-start-adornment"
              label="Create your password"
              placeholder="Example:123"
              value={createpassword}
              variant="filled"
              onChange={handleCreatePassword}
              multiline
            />
             <TextField
              style={{ width: "inherit", marginBottom: "10px" }}
              id="filled-start-adornment"
              label="Confirm your password"
              placeholder="Example:123"
              value={confirmpassword}
              variant="filled"
              onChange={handleConfirmPassword}
              multiline
            />
          
         
            <Button style={styles.createButton}  onClick={(()=>{handleTodoNavigation()})}>
              Create
            </Button>
            
          </div>
          </Box>
      

    </Modal>
    </>
  

  )
}

const styles = {
    createButton: {
        backgroundColor:"blue",
        color: "white",
        display: "flex",
        justifycontent:"center",
        alignitems:"center",
        marginLeft: "90px",
        marginTop: "25px",
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

export default SignUp;
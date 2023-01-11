import { Title } from "@mui/icons-material";
import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { AddSquare } from "iconsax-react";

import { v4 as uuidv4 } from "uuid";

export const Form = ({ input, setinput, todos, settodos }) => {
  const handleInput = (e) => {
    setinput(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    settodos([...todos, { id: uuidv4(), title: input }]);
    setinput("");
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{ 
            width: "inherit", 
            marginBottom: "50px" ,
            marginTop:"08px"
        }}
          id="outlined-basic"
          variant="outlined"
          type="text"
          placeholder="Enter Todo List Item"
          value={input}
          onChange={handleInput}
          size="small"
         
        ></TextField>
        <AddSquare
          size="55"
          color="blue"
          variant="Bold"
          type="submit"
          onClick={handleFormSubmit}
          style={{
           
            marginTop:"0.1px",
            marginLeft:"8px"
          }}
        />
      </Box>
    </div>
  );
};

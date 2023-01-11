import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { TextField, Checkbox } from "@mui/material";
import { TrushSquare } from "iconsax-react";

export const Display = ({ todos, settodos }) => {

  // const handleDeleteTodo = ({id}) =>{

  //   settodos(todos.filter((todo)=> todo.id!==id))

  // }
  return (
    <div>
      {todos.map((todo) => {
        return (
          <List
          sx={{
            width: "100%",
           
            bgcolor: "background.paper",
           
            
           
            zIndex: 100,
            marginBottom: "20px",
            overflow: "auto",
            marginTop: "20px"
          }}>
            <Checkbox edge="start" tabIndex={-1} disableRipple />
            <ListItem key={todo.id} >
              <TextField
                id="standard-basic"
                variant="standard"
                type="text"
                value={todo.title}
                onChange={(e) => {
                  e.preventDefault();
                }}
              />
              {/* <TrushSquare size="40" color="#FF2E2E" variant="Bold" onClick={handleDeleteTodo(todo)}/> */}
            </ListItem>
          </List>
        );
      })}
    </div>
  );
};

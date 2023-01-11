import React from "react";
import ListItem from "@mui/material/ListItem";
import TextMessage from "@mui/material/ListItem";
import { useState } from "react";
import { Form } from "../Form";
import { Container, ChatContainer } from "./style";
import { Display } from "../Response";


const Todo = () => {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState([]);

 

  return (
    <div>
      <Container style={{ border: "2px solid #ADD8E6",
      boxShadow: 24,
      p: 4,
      height:"inherit",

      }}>
      <ListItem
        style={{
          marginTop: "10px",
          flexDirection: "column",
          alignItems: "center",
         
        }}
      >
        <Form
          input={input}
          setinput={setinput}
          todos={todos}
          settodos={settodos}
        />
        <Display todos={todos} settodos={settodos} />
      </ListItem>
      </Container>
    </div>
  );
};

export default Todo;

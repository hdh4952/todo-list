import React, { useState } from 'react';
import { Button, Input, List, ListItem, ListItemText } from '@mui/material';
// import { v4 as uuidv4 } from 'uuid';

export default function Main() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');
  const [editTodoNumber, setEditTodoNumber] = useState(-1);
  const [editTodo, setEditTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    setTodoList((prev) => [...prev, todo]);
    setTodo('');
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setTodoList((prev) => prev.map((item, index) => (index === editTodoNumber ? editTodo : item)));
    setEditTodoNumber(-1);
  };

  const completeTodo = (index) => {
    setTodoList((prev) => prev.filter((item, i) => i !== index));
  };

  const handleEditTodo = (index) => {
    setEditTodoNumber(index);
    setEditTodo(todoList[index]);
  };

  return (
    <div className="h-5/6 w-[48rem] flex flex-col jutify-center items-center">
      <div className="h-5/6 w-full flex justify-center items-start overflow-y-scroll pl-10 scrollbar-thin scrollbar-thumb-white scrollbar-track-[#121212]">
        <List sx={{ width: '80%' }}>
          {todoList.map((item, index) => (
            <ListItem key={item} divider className="h-24 w-full flex justify-start items-center">
              <div className="h-3/5 w-full flex justify-start items-center">
                {editTodoNumber === index ? (
                  <form onSubmit={handleEditSubmit} className="h-full">
                    <Input
                      className="h-full flex justify-start items-center"
                      type="text"
                      name="editTodo"
                      value={editTodo}
                      onChange={(e) => setEditTodo(e.target.value)}
                    />
                  </form>
                ) : (
                  <>
                    <ListItemText
                      id={index}
                      primary={item}
                      className="h-full w-full flex justify-start items-center"
                      onClick={() => {
                        handleEditTodo(index);
                      }}
                    />
                    <Button
                      key={item}
                      type="button"
                      onClick={() => {
                        completeTodo(index);
                      }}
                    >
                      Done
                    </Button>
                  </>
                )}
              </div>
            </ListItem>
          ))}
        </List>
      </div>
      <div className="h-1/6 w-full">
        <form onSubmit={handleSubmit} className="h-full w-full flex justify-around items-center">
          <Input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            name="todo"
            placeholder="Enter your to do"
            className="h-1/3 w-10/12 border border-slate-400 rounded-2xl pl-5 focus:outline-none"
          />
          <Button variant="outlined" type="submit" className="h-1/3 w-1/12">
            Add
          </Button>
        </form>
      </div>
    </div>
  );
}

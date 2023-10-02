import React, { useState } from 'react';
import { Button, Checkbox, Input, List, ListItem, ListItemText } from '@mui/material';

export default function Main() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    setTodoList((prev) => [...prev, todo]);
    setTodo('');
  };

  const completeTodo = (index) => {
    setTodoList((prev) => prev.filter((item, i) => i !== index));
  };

  return (
    <div className="h-5/6 w-[48rem] flex flex-col jutify-center items-center">
      <div className="h-5/6 w-full overflow-y-scroll scrollbar-none pl-10">
        <List sx={{ width: '80%' }}>
          {todoList.map((item, index) => (
            <ListItem key={item} divider className="h-24 w-full flex justify-start items-center">
              <div className="h-2/3 w-full flex justify-start items-center">
                <Checkbox
                  onClick={() => {
                    completeTodo(index);
                  }}
                />
                <ListItemText id={index} primary={item} />
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
            확인
          </Button>
        </form>
      </div>
    </div>
  );
}

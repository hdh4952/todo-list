/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { Button, Input, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const TodoItem = React.memo(function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <ListItem divider className="h-24 w-full flex justify-start items-center">
      <div className="h-3/5 w-full flex justify-start items-center">
        <ListItemText
          id={todo.id}
          primary={todo.text}
          className={`h-full w-full flex justify-start items-center ${todo.done ? 'line-through' : ''}`}
        />
        {!todo.done && (
          <Button onClick={() => onToggle(todo.id)} variant="outlined" color="success">
            Done
          </Button>
        )}
        {todo.done && (
          <>
            <Button
              sx={{ 'margin-right': '5px' }}
              onClick={() => onToggle(todo.id)}
              variant="outlined"
              color="secondary"
            >
              Undone
            </Button>
            <Button onClick={() => onDelete(todo.id)} variant="outlined" color="error">
              Delete
            </Button>
          </>
        )}
      </div>
    </ListItem>
  );
});

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const TodoList = React.memo(function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className="h-5/6 w-full flex justify-center items-start overflow-y-scroll pl-10 scrollbar-thin scrollbar-thumb-white scrollbar-track-[#121212]">
      <List sx={{ width: '80%' }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </List>
    </div>
  );
});

function Todos({ todos, onCreate, onToggle, onDelete }) {
  // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아닙니다.
  const [text, setText] = useState('');
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(''); // 인풋 초기화
  };

  return (
    <div className="h-5/6 w-[48rem] flex flex-col justify-center items-center">
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
      <div className="h-1/6 w-full">
        <form onSubmit={onSubmit} className="h-full w-full flex justify-around items-center">
          <Input
            value={text}
            placeholder="Enter your to do"
            onChange={onChange}
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

export default Todos;

import React, { useState } from 'react';

export default function Main() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo('');
  };

  const completeTodo = (index) => {
    const newTodoList = todoList.filter((item, i) => i !== index);
    setTodoList(newTodoList);
  };

  return (
    <div className="h-full w-full">
      <div className="h-5/6 w-full pl-24">
        {todoList.map((item, index) => (
          <div key={item} className="h-24 w-full flex justify-start items-center">
            <input
              type="checkbox"
              onClick={() => {
                completeTodo(index);
              }}
            />
            <span className="mx-5">{item}</span>
          </div>
        ))}
      </div>
      <div className="h-1/6 w-full">
        <form onSubmit={handleSubmit} className="h-full w-full flex justify-around items -center">
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            name="todo"
            placeholder="Enter your to do"
            className="h-1/3 w-10/12 border border-slate-400 rounded-2xl pl-5 focus:outline-none"
          />
          <input
            type="submit"
            value="확인"
            className="h-1/3 w-1/12 border border-slate-400 rounded-2xl hover:cursor-pointer hover:bg-slate-400 hover:text-white"
          />
        </form>
      </div>
    </div>
  );
}

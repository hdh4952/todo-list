const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 0; // todo 데이터에서 사용할 고유 id
export const addTodo = (text) => {
  nextId += 1;
  return {
    type: ADD_TODO,
    todo: {
      id: nextId,
      text,
      done: false,
    },
  };
};

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

const initialState = []; // 초기 상태 선언

// eslint-disable-next-line default-param-last
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    default:
      return state;
  }
}

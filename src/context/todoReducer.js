export const initialState = [];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return [...state] = action.payload;
    case "ADD":
      return [...state, action.payload];
    case "TOGGLE":
      return state.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    case "EDIT":
      return state.map((todo) =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    default:
      return state;
  }
};

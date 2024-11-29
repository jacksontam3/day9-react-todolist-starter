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
    default:
      return state;
  }
};

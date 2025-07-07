import { types } from "../actions/types";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_REQUEST:
      return { ...state, loading: true, error: null };
    case types.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case types.FETCH_TODOS_FAILURE:
      return { ...state, loading: false, error: action.error };

    case types.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case types.DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };

    case types.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    default:
      return state;
  }
};


export default todoReducer;

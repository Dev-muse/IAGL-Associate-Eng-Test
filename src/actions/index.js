import axios from "axios";
import { types } from "./types";

const API_URL = "http://localhost:9091/api/todo"

// Fetch Todos (with full request/success/failure lifecycle)
export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: types.FETCH_TODOS_REQUEST });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: types.FETCH_TODOS_SUCCESS, payload: response.data.todos });
  } catch (error) {
    dispatch({ type: types.FETCH_TODOS_FAILURE, error: error.message });
  }
};

// Add Todo (simple success action only)
export const addTodo = (task) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, { task });
    dispatch({ type: types.ADD_TODO, payload: response.data });
  } catch (error) {
    console.error("Add Todo failed:", error.message);
  }
};

// Delete Todo (simple success action only)
export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: types.DELETE_TODO, payload: id });
  } catch (error) {
    console.error("Delete Todo failed:", error);
  }
};

// Update Todo (simple success action only)
export const updateTodo = (id, updates) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updates);
    dispatch({ type: types.UPDATE_TODO, payload: response.data });
  } catch (error) {
    console.error("Update Todo failed:", error.message);
  }
};

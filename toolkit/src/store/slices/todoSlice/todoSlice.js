import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: null,
    todos: [
        {
            "userId": 1,
            "id": 1252,
            "title": "delectus aut",
            "completed": false
        },
    ],
};


export const fetchTodos = createAsyncThunk(
    'todoSlice/fetchTodos',
    async (payload, {rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            return await response.json();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(el => el.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            console.log('pending');
            state.loading = true;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            console.log('success');
            state.loading = false;
            state.todos.push(...action.payload);
        },
        [fetchTodos.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            console.log(state.error);
        },
    }
});

export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;

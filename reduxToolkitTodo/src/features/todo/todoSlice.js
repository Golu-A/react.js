import { createSlice, nanoid } from "@reduxjs/toolkit";

// const tS = createSlice({
//     name: todo,
//     iS: [
//         {
//             id: 1,
//             text: 'hello'
//         }
//     ],
//     addTodo: (state, action) => {},
//     removeTodo: () => {}
// })

const initialState = {
    todos: [
        {
            id: 1, 
            text: 'Hello World!'
        }
    ]
}

// slice almost ek reducer ka bada version hai, aur reducer ek functionality hai. Har createSlice ka name hota hai vo humare upar depend krta hai ki kya rakhe, ab uske andar intialState k baad reducers likha jiske andar property and function likhi jaati hai. 

export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
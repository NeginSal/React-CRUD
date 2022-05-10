import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    users: [
        { id: 1, name: 'userOne' },
        { id: 2, name: 'userTwo' },
        { id: 3, name: 'userThree' },
    ]
}

//Create Context
export const GlobalContext = createContext(initialState);


//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Actions
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }
    return (
        <GlobalContext.Provider value={{ users: state.users, removeUser }}>
            {children}
        </GlobalContext.Provider>
    )
}


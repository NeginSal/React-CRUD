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
    return(
        <GlobalContext.Provider value={{users:state.users}}>
            {children}
        </GlobalContext.Provider>
    )
}
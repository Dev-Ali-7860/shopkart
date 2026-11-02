import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

function reducer(theme, action) {
    switch (action.type) {
        case "TOGGLE": {
            return theme === 'light' ? 'dark' : 'light'
        }
    }
}

export function ThemeProvider({ children }) {

    const [theme, dispatch] = useReducer(reducer, 'light')

    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}
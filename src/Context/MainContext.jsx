import { createContext, useContext } from "react";

const MainContext = createContext({});

export const MainContextProvider = ({children}) => {
    const text = 'This is from mainContext';
    return <MainContext.Provider value={text}>{children}</MainContext.Provider>;
}

export const useMainContext = () => useContext(MainContext);
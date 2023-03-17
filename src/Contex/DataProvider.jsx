import { createContext, useState } from "react";

export const DataContex = createContext();

const DataProvider = ({ children }) => {

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    return (
        <DataContex.Provider
            value={{
                html,
                setHtml,
                css,
                setCss,
                js,
                setJs
            }}
        >
         { children }   
        </DataContex.Provider>
    )
}

export default DataProvider;
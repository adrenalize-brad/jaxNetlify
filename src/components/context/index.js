import React, { useState, createContext, useEffect } from 'react';
import { useWindowWidth, useWindowHeight, isBrowser } from '../../hooks';

const Context = createContext();

const ContextProvider = ({ children }) => {

    const [ display, setDisplay ] = useState('mobile');

    let browserWidth = useWindowWidth();
    let browserHeight = useWindowHeight();
    
    let browserWindow;
    if(!isBrowser){
        browserWindow = window;
    }
    
    
    useEffect(() => {
        if(browserWidth < 600){
            setDisplay('mobile')
        }
        else{
            setDisplay('desktop')
        }
    }, [ browserWidth ]);
    

    return (

        <Context.Provider value={{ display, browserHeight, browserWidth, browserWindow }}>
        	{children}
        </Context.Provider>
    )
};

export { ContextProvider, Context };



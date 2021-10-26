import React, { useLayoutEffect, useState, createContext, useEffect } from 'react';

const Context = createContext();

const useWindowWidth = () => {
    const [ width, setWidth ] = useState(0)    
    useLayoutEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)
        updateWidth()
        return () => window.removeEventListener('resize', updateWidth)
    }, []);
    return width;
};

const ContextProvider = ({ children }) => {

    const [ display, setDisplay ] = useState('mobile');

    let browserWidth = useWindowWidth();
    
    useEffect(() => {
        if(browserWidth < 600){
            setDisplay('mobile')
        }
        else{
            setDisplay('desktop')
        }
    }, [ browserWidth ]);
    

    return (

        <Context.Provider value={{ display }}>
        	{children}
        </Context.Provider>
    )
};

export { ContextProvider, Context };



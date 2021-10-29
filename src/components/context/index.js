import React, { useState, createContext, useEffect } from 'react';
import { useWindowWidth, useWindowHeight, isBrowser } from '../../hooks';

const Context = createContext();

const ContextProvider = ({ children }) => {

    return (

        <Context.Provider>
        	{children}
        </Context.Provider>
    )
};

export { ContextProvider, Context };



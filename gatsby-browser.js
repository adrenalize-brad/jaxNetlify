import React from 'react'
import './src/styles/global.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ContextProvider } from './src/components/context';

const onClientEntry = () => {
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

  const wrapRootElement = ({ element }) => {
    return(
          <ContextProvider>
            {element}
          </ContextProvider>
      )
    };

  export { wrapRootElement, onClientEntry };
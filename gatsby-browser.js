import React from 'react'
import './src/styles/global.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ContextProvider } from './src/components/context';

const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `The Jax Bucerias site has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
      window.location.reload()
    }
  };

  const wrapRootElement = ({ element }) => {
    return(
        <ContextProvider>
          {element}
        </ContextProvider>
      )
    };

  export { wrapRootElement, onServiceWorkerUpdateReady };
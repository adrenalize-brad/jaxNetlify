import React from 'react'
import './src/styles/global.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ContextProvider } from './src/components/context';
import { HashRouter as Router } from 'react-router-dom'

const onClientEntry = () => {
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

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
        <Router hashType='noslash'>
          <ContextProvider>
            {element}
          </ContextProvider>
        </Router>
      )
    };

  export { wrapRootElement, onServiceWorkerUpdateReady, onClientEntry };
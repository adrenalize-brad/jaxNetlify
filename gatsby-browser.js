import './src/styles/global.css';
import 'react-toastify/dist/ReactToastify.min.css';

const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `The Jax Bucerias site has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
      window.location.reload()
    }
  };


  export { onServiceWorkerUpdateReady };
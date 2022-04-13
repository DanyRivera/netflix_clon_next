import '../styles/globals.css';
import AppSatate from '../context/AppState';

function MyApp({ Component, pageProps }) {
  return (
    <AppSatate>
      <Component {...pageProps} />
    </AppSatate>
  )
}

export default MyApp

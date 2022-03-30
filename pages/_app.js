import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { PberProvider } from "../context/pberContext";

function MyApp({ Component, pageProps }) {
  return (
    <PberProvider>
      <Component {...pageProps} />
    </PberProvider>
  );
}

export default MyApp;

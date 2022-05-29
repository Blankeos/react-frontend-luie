import "../src/styles/globals.css";
import AuthContextProvider from "../src/contexts/AuthContextProvider";
function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;

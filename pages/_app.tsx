import React, { useEffect } from "react";
import type { AppProps } from "next/app";

import GlobalStyle from "@dreadera/styles/global";
import { ROUTES, SETTINGS } from "@dreadera/constants";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (window.location.pathname !== ROUTES.STATUS && SETTINGS.IS_MAINTENANCE) {
      window.location.replace(ROUTES.STATUS);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;

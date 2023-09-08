import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

//extend the theme
const colors = {
  brand: {
    900: "#21121f",
    800: "#42243e",
    700: "#63365d",
    600: "#84487c",
    500: "#a45b9b",
    400: "#b77bb0",
    300: "#c99cc4",
    200: "#dbbdd7",
    100: "#eddeeb",
    50: "#f6eff5",
  },
};
const fonts = {
  body: "Tahoma",
  heading: "Arial",
};
const customTheme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

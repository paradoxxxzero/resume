/** @jsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import App from "./App";
import ThemeSwitcher from "./ThemeSwitcher";

const light = {
  colors: {
    primary: "rgba(0, 0, 0, 0.87)",
    soft: "rgba(0, 0, 0, 0.75)",
    muted: "rgba(0, 0, 0, 0.5)",
    background: "#f5f5f5",
    backgroundActive: "#ebebeb",
    link: "#3741fb",
    linkActive: "#262fd4",
    linkVisited: "#9b3eff",
  },
};
const dark = {
  colors: {
    primary: "rgba(255, 255, 255, 0.87)",
    soft: "rgba(255, 255, 255, 0.75)",
    muted: "rgba(255, 255, 255, 0.5)",
    background: "#202020",
    backgroundActive: "#262626",
    link: "#646cff",
    linkActive: "#535bf2",
    linkVisited: "#b46cff",
  },
};

const getDefaultMode = () => {
  if (!window.matchMedia) {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function ThemedApp() {
  const [mode, setMode] = useState(getDefaultMode);

  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }
    function mediaChanged({ matches }) {
      setMode(matches ? "dark" : "light");
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", mediaChanged);
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", mediaChanged);
    };
  }, []);

  return (
    <ThemeProvider theme={mode == "dark" ? dark : light}>
      <App />
      <ThemeSwitcher mode={mode} onChange={setMode} />
    </ThemeProvider>
  );
}

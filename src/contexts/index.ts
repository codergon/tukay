import { useContext } from "react";
import { AppContext } from "./AppProvider";
import { ThemeProviderContext } from "./ThemeProvider";

const useApp = () => {
  const value = useContext(AppContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useApp must be wrapped in a <AppProvider />");
    }
  }
  return value;
};

const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export { useApp, useTheme };

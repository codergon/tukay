import { useState, useEffect, useContext, createContext } from "react";

export type AppTheme = "dark" | "light" | "system";

type ThemeProviderProps = {
  storageKey?: string;
  defaultTheme?: AppTheme;
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<AppTheme>(
    () => (localStorage.getItem(storageKey) as AppTheme) || defaultTheme
  );

  useEffect(() => {
    // const root = document?.body;
    const root = window.document.documentElement;

    switch (theme) {
      case "light": {
        if (root) {
          root.classList.remove("light", "dark");
          root.classList.add("light");
        }

        break;
      }
      case "dark": {
        if (root) {
          root.classList.remove("light", "dark");
          root.classList.add("dark");
        }

        break;
      }
      case "system": {
        if (root) {
          root.classList.remove("light", "dark");
          root.classList.add(
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
          );
        }

        break;
      }
      default: {
        //
      }
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: AppTheme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

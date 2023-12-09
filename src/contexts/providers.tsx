import App from "../App";
import { WagmiConfig } from "wagmi";
import AppProvider from "./AppProvider";
import { wagmiConfig } from "utils/wagmiSetup";
import { ThemeProvider } from "./ThemeProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Providers = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <WagmiConfig config={wagmiConfig}>
          <Router>
            <QueryClientProvider client={queryClient}>
              <AppProvider>
                <App />
              </AppProvider>
            </QueryClientProvider>
          </Router>
        </WagmiConfig>
      </ThemeProvider>
    </>
  );
};

export default Providers;

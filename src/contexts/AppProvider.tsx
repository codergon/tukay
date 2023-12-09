import axios from "axios";
import { useQuery, useAccount } from "wagmi";
import {
  useMemo,
  Dispatch,
  useState,
  ReactNode,
  useEffect,
  useContext,
  ReactElement,
  createContext,
  SetStateAction,
} from "react";

const AppProvider = ({ children }: AppProviderProps) => {
  const { address } = useAccount();
  const [currentChain, setCurrentChain] = useState("ethereum_testnet");

  return (
    <AppContext.Provider
      value={{
        currentChain,
        setCurrentChain,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

interface AppProviderProps {
  children: ReactElement[] | ReactElement | ReactNode;
}

interface AppContextType {
  currentChain: string;
  setCurrentChain: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

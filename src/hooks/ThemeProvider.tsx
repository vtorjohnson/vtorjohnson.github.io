"use client";
import {
  useState,
  createContext,
  ReactNode,
  useCallback,
  useContext,
} from "react";

type screenModes = "light" | "dark";

type IGlobalContextProps = {
  mode: screenModes;
  toggle: () => void;
};

export const GlobalContext = createContext<IGlobalContextProps>({
  mode: "light",
  toggle: () => {},
});

type Props = {
  children: ReactNode;
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export const GlobalContextProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<screenModes>("light");

  const toggle = useCallback(() => {
    if (mode == "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [setMode, mode]);

  return (
    <GlobalContext.Provider
      value={{
        mode,
        toggle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

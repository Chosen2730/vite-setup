import { createContext, useContext, PropsWithChildren } from "react";

interface AppContextType {
  loadData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: PropsWithChildren) => {
  const loadData = async () => {};

  const value: AppContextType = {
    loadData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext) as AppContextType;
};

export default AppProvider;

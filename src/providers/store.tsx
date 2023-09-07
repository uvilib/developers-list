import { createContext } from "react";
import RootStore from "@/domain/core/store";

interface StoreProviderProps {
  initialState: RootStore;
  children: React.ReactNode;
}

export const StoreContext = createContext<RootStore | null>(null);

export function StoreProvider({ initialState, children }: StoreProviderProps) {
  return (
    <StoreContext.Provider value={initialState}>
      {children}
    </StoreContext.Provider>
  );
}

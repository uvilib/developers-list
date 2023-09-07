import { useContext } from "react";
import RootStore from "@/domain/core/store";
import { StoreContext } from "@/providers/store";

export function useStore(): RootStore;
export function useStore<Result>(
  selector: (value: RootStore) => Result
): Result;
export function useStore<Result>(selector?: (value: RootStore) => Result) {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error("Can not `useStore` outside of the `StoreProvider`");
  }

  if (typeof selector === "function") {
    return selector(store);
  }

  return store;
}

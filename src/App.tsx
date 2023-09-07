import { StoreProvider } from "@/providers/store";
import { initialState } from "@/domain/core/store";
import List from "./components/features/List";
import "@/styles/index.sass";

function App() {
  return (
    <StoreProvider initialState={initialState}>
      <List />
    </StoreProvider>
  );
}

export default App;

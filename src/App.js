import "./App.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import BugsList from "./components/BugsList";
import Bugs from "./components/Bugs";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <BugsList />
    </Provider>
  );
}

export default App;

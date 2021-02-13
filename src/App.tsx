import { Provider } from "react-redux";
import { store } from "./state";
import PackageList from "./components/PackageList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a Package</h1>
        <PackageList />
      </div>
    </Provider>
  );
};

export default App;

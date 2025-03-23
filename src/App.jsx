import { Provider } from "react-redux";
import MainLayout from "./layouts/MainLayout";
import store from "./redux/store";

const App = () => (
  <Provider store={store}>
    <MainLayout />
  </Provider>
);

export default App;

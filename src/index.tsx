import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./redux/configureStore";

import TodoAppContainer from "./container/TodoAppContainer";
import registerServiceWorker from "./registerServiceWorker";

import MyHeader from "./components/MyHeader";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MyHeader />

    <TodoAppContainer />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();

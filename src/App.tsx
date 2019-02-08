import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { UserList } from "./views/UserList/UserList";
import { loadUsers } from "./store/Actions";
import { store } from "./store/Store";

ReactDOM.render(
  <Provider store={store}>
    <UserList />
  </Provider>,
  document.getElementById('app-root')
);
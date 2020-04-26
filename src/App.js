import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

import initStore from './store';
import Router from './router';

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;

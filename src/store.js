import {createStore} from 'redux';
import reducer from './reducer';

const initStore = () => {
  return createStore(reducer);
};

export default initStore;

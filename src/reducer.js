import {combineReducers} from 'redux';
import {ReserveReducer} from './features/reserve';

const rootReducer = combineReducers({
  reserve: ReserveReducer,
});

export default rootReducer;

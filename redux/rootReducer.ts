import { combineReducers } from '@reduxjs/toolkit';
import PostReducer from './slices/postSlice';

const rootReducer = combineReducers({
  // Put reducers here
  post: PostReducer,
});

export default rootReducer;

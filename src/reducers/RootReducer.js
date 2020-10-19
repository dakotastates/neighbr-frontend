import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import reactDeviseReducers from 'react-devise/lib/reducers';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import ApolloClient from 'apollo-client';


const rootReducer = combineReducers({
  ...reactDeviseReducers,
  form: formReducer,
  router: routerReducer,
  apollo: apolloClient.reducer()

});

export default rootReducer;

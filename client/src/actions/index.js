import axios from 'axios';
import { AUTH_USER } from './types';

export const signup = formProps => dispatch => {
  // Redux thunk action creator
  axios.post('http://localhost:3090/signup', formProps);
};

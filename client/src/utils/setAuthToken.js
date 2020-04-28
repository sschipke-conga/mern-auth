import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // Apply auth token to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    //Delete auth from header
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken;
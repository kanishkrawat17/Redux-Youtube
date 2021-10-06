const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios')

initialstate = {
  loading: true,
  data: [],
  error: "",
};

const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

const fetchData = (users) => {
  return {
    type: FETCH_SUCCESS,
    payload: users,
  };
};

const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

const reducer = async (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };

    case FETCH_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchRequest());
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // let data = users.data.map((user) => {
        //    user.name;
        // });
        dispatch(fetchData(res.json));
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());

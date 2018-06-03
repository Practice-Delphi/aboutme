export const FETCH_TOKEN_START = "FETCH_TOKEN_START";
export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const DELETE_TOKEN = "DELETE_TOKEN";
export const DELETE_USER = "DELETE_TOKEN";
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";


const fetchStart = () => ({
    type: FETCH_TOKEN_START
});

const fetchSuccess = token => ({
    type: FETCH_TOKEN_SUCCESS,
    token
});

const fetchError = error => ({
    type: FETCH_ERROR,
    error
});

const deleteToken = () => ({
    type: DELETE_TOKEN
});

const deleteUser = () => ({
    type: DELETE_USER
});

const fetchUserStart = () => ({
    type: FETCH_USER_START
});

const fetchUserSuccess = (user) => ({
    type: FETCH_USER_SUCCESS,
    user
});


export const login = (email, password) => (dispatch, getState) => {
    dispatch(fetchStart());
    // Fetch to server
    const fetchToken = () => (new Promise((resolve, reject) => {
        const rand = Math.random();
        if (rand < 0.2) {
            reject("Error fetch to server");
        } else {
            resolve("MyToken");
        }
    }));

    const fetchUser = () => (new Promise((resolve, reject) => {
        const rand = Math.random();
        if (rand < 0.2) {
            reject("Error fetch to server");
        } else {
            resolve({ email, tokens: 13.02, url: "/testurl", registers: 5, commission: 4.35});
        }
    }));

    fetchToken()
        .then(token => {
            dispatch(fetchSuccess(token));
            dispatch(fetchUserStart());
            return fetchUser();
        })
        .then(user => dispatch(fetchUserSuccess(user)))
        .catch(error => dispatch(fetchError(error)));
}

export const runDelete = () => (dispatch, getState) => {
    dispatch(deleteToken());
    dispatch(deleteUser());
}

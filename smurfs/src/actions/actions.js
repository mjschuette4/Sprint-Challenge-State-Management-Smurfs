import axios from "axios";

//exporting cases
export const GET_DATA = "GET_DATA";
export const LOADING_SUCCESS = "LOADING_SUCCESS";

export const smurfLoad = () => dispatch => {
    dispatch({ type: GET_DATA });
}

export const smurfAdd = smurf => dispatch => {
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            dispatch({ type: LOADING_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
        });
};
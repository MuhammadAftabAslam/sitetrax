import * as types from '../constants/actionTypes';
import { browserHistory } from 'react-router';
import axios from 'axios';

const http = axios.create({
  baseURL: 'http://office.netarus.com:8888',
  // baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export function receiveLoadingStatus(loading) {
  return {
    type: types.RECEIVE_LOADING_STATUS,
    loading,
  };
}

export function postRecipe(params) {
  return dispatch => {
    dispatch(receiveLoadingStatus(true));
    return http.post('/', params)
      .then(function (response) {
        console.log(response);
        dispatch(receiveLoadingStatus(false));
      })
      .catch(function (error) {
        console.log(error);
        dispatch(receiveLoadingStatus(false));
      });
	};
}

// Loading Hoist Cam Director Images
export function receiveHoistCamDirectorImages(images) {
  return {
    type: types.RECEIVE_HOIST_CAM_DIRECTOR_IMAGES,
    images,
  };
}

export function loadHoistCamDirectorImages() {
  return dispatch => {
    dispatch(receiveLoadingStatus(true));
    const images = [
      "https://s3.amazonaws.com/netarus-test-images/1.png",
      "https://s3.amazonaws.com/netarus-test-images/2.png",
      "https://s3.amazonaws.com/netarus-test-images/3.png",
      "https://s3.amazonaws.com/netarus-test-images/4.png",
      "https://s3.amazonaws.com/netarus-test-images/5.png",
      "https://s3.amazonaws.com/netarus-test-images/6.png",
      "https://s3.amazonaws.com/netarus-test-images/7.png",
      "https://s3.amazonaws.com/netarus-test-images/8.png",
      "https://s3.amazonaws.com/netarus-test-images/9.png",
      "https://s3.amazonaws.com/netarus-test-images/10.png",
      "https://s3.amazonaws.com/netarus-test-images/11.png",
      "https://s3.amazonaws.com/netarus-test-images/12.png",
      "https://s3.amazonaws.com/netarus-test-images/13.png",
    ];
    dispatch(receiveHoistCamDirectorImages(images));
    dispatch(receiveLoadingStatus(false));
  }
}

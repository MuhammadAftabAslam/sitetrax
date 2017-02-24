import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import * as types from '../constants/actionTypes';

const loading = (state = false, action) => {
  switch (action.type) {
    case types.RECEIVE_LOADING_STATUS:
      return action.loading;
    default:
      return state;
  }
};

const alert = (state = {}, action) => {
  switch (action.type) {
    case types.DISPLAY_ERROR_ALERT:
      return {
        type: action.type,
        text: action.alert,
        active: true
      };
    case types.DISMISS_ALERT:
      return {
        type: action.type,
        text: action.alert,
        active: false
      };
    default:
      return state;
  }
};

export type HoistCamDirectorImage = String;

const hoistCamDirectorImages = (state: Array<HoistCamDirectorImage> = [], action) => {
  switch (action.type) {
    case types.RECEIVE_HOIST_CAM_DIRECTOR_IMAGES:
      return action.images;
    default:
      return state;
  }
};

const selectedHoistCamDirectorImages = (state: Array<HoistCamDirectorImage> = [], action) => {
  switch (action.type) {
    case types.RECEIVE_SELECTED_HOIST_CAM_DIRECTOR_IMAGES:
      return action.images;
    default:
      return state;
  }
};

export type ProcessingOption = {
  id: string;
  type: string;
  title: string;
  description: string;
  icon: string;
  backgroundColor: string;
};

const processingOptions = (state: Array<ProcessingOption> = [
    {
      id: '0',
      type: 'brightness',
      title: 'Increase Brightness',
      description: 'Increase brightness level of each selected image (images) based on the metric chosen.',
      icon: 'fa-sun-o',
      backgroundColor: '#e7e7e7'
    },
    {
      id: '1',
      type: 'contrast',
      title: 'Increase Contrast',
      description: 'Increase contrast level of each selected image (images) based on the metric chosen.',
      icon: 'fa-sun-o',
      backgroundColor: '#e7e7e7'
    },
    {
      id: '2',
      type: 'stitch',
      title: 'High Resolution Stitching',
      description: 'Stitch together similar images into a single high resolution image.',
      icon: 'fa-sun-o',
      backgroundColor: '#e7e7e7'
    },
    {
      id: '3',
      type: 'pointCloud',
      title: '3D Point Cloud',
      description: 'Generate 3d point cloud based on images selected (integration with BIM environment).',
      icon: 'fa-sun-o',
      backgroundColor: '#e7e7e7'
    },
  ], action) => {
  switch (action.type) {
    case types.RECEIVE_PROCESSING_OPTIONS:
      return action.options;
    default:
      return state;
  }
};

const selectedProcessingOptions = (state: Array<ProcessingOption> = [], action) => {
  switch (action.type) {
    case types.RECEIVE_SELECTED_PROCESSING_OPTIONS:
      return action.options;
    default:
      return state;
  }
};

export type DeliveryOption = {
  id: string;
  type: string;
  title: string;
  description: string;
  icon: string;
  backgroundColor: string;
};

const deliveryOptions = (state: Array<DeliveryOption> = [
    {
      id: '0',
      type: 'email',
      title: 'Email',
      description: 'Share this via Email',
      icon: 'fa-envelope-o',
      backgroundColor: '#e7e7e7'
    },
  ], action) => {
  switch (action.type) {
    case types.RECEIVE_DELIVERY_OPTIONS:
      return action.options;
    default:
      return state;
  }
};

const selectedDeliveryOptions = (state: Array<DeliveryOption> = [], action) => {
  switch (action.type) {
    case types.RECEIVE_SELECTED_DELIVERY_OPTIONS:
      return action.options;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
	loading,
	alert,
  hoistCamDirectorImages,
  processingOptions,
  deliveryOptions,
  selectedHoistCamDirectorImages,
  selectedProcessingOptions,
  selectedDeliveryOptions,
  routing: routerReducer
});

export default rootReducer;

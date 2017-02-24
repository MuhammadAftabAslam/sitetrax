import * as types from '../constants/actionTypes';
import _ from 'lodash';

export function receiveSelectedHoistCamDirectorImages(images) {
  return {
    type: types.RECEIVE_SELECTED_HOIST_CAM_DIRECTOR_IMAGES,
    images,
  };
}

export function updateSelectedHoistCamDirectorImages(selectedImages, image, selectedStatus) {
  return dispatch => {
    let currentSelectedImages = Object.assign([], selectedImages);
    const imageIndex = _.find(currentSelectedImages, (selectedImage) => { return selectedImage === image; });
    if (!imageIndex && selectedStatus) {
      // add it
      currentSelectedImages.push(image);
    }
    if (imageIndex && !selectedStatus) {
      // remove it
      _.remove(currentSelectedImages, (selectedImage) => { return selectedImage === image; });
    }
    dispatch(receiveSelectedHoistCamDirectorImages(currentSelectedImages));
	};
}

export function receiveSelectedProcessingOptions(options) {
  return {
    type: types.RECEIVE_SELECTED_PROCESSING_OPTIONS,
    options,
  };
}

export function updateSelectedProcessingOptions(selectedOptions, option, selectedStatus) {
  return dispatch => {
    let currentSelectedOptions = Object.assign([], selectedOptions);
    const optionIndex = _.find(currentSelectedOptions, (selectedOption) => { return selectedOption === option; });
    if (!optionIndex && selectedStatus) {
      // add it
      currentSelectedOptions.push(option);
    }
    if (optionIndex && !selectedStatus) {
      // remove it
      _.remove(currentSelectedOptions, (selectedOption) => { return selectedOption === option; });
    }
    dispatch(receiveSelectedProcessingOptions(currentSelectedOptions));
  };
}

export function receiveSelectedDeliveryOptions(options) {
  return {
    type: types.RECEIVE_SELECTED_DELIVERY_OPTIONS,
    options,
  };
}

export function updateSelectedDeliveryOptions(selectedOptions, option, selectedStatus) {
  return dispatch => {
    let currentSelectedOptions = Object.assign([], selectedOptions);
    const optionIndex = _.find(currentSelectedOptions, (selectedOption) => { return selectedOption === option; });
    if (!optionIndex && selectedStatus) {
      // add it
      currentSelectedOptions.push(option);
    }
    if (optionIndex && !selectedStatus) {
      // remove it
      _.remove(currentSelectedOptions, (selectedOption) => { return selectedOption === option; });
    }
    dispatch(receiveSelectedDeliveryOptions(currentSelectedOptions));
  };
}
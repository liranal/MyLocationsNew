export const addLocation = (newLocation) => {
  return {
    type: "ADD_LOCATION",
    payload: newLocation,
  };
};

export const editLocation = (editedLocation) => {
  return {
    type: "EDIT_LOCATION",
    payload: editedLocation,
  };
};

export const removeLocation = (locationToRemove) => {
  return {
    type: "REMOVE_LOCATION",
    payload: locationToRemove,
  };
};

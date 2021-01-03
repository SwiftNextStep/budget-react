import modalTypes from '../actions/modals.actions';

const reducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case modalTypes.OPEN_EDIT_MODAL:
      return { ...state, isOpen: true, id: action.payload.id };
    case modalTypes.CLOSE_EDIT_MODAL:
      return { ...state, isOpen: false, id: null };

    default:
      return state;
  }
};

export default reducer;

const initialState = {
  sortBy: 'популярности',
  category: 0,
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sorbBy: action.payload,
    };
  }  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state
};

export default filters

const initialState = {
    cart: [],
    specialOffers: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case 'APPLY_SPECIAL_OFFER':
        return {
          ...state,
          specialOffers: [...state.specialOffers, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
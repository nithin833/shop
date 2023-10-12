export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const applySpecialOffer = (offer) => ({
    type: 'APPLY_SPECIAL_OFFER',
    payload: offer,
  });
  
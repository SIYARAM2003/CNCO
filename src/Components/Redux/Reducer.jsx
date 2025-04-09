const initialState = {
	cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
	switch (action.type) {
	  case "ADD_TO_CART":
		const item = action.payload;
		const existItem = state.cartItems.find((x) => x.id === item.id);
		if (existItem) {
		  return {
			...state,
			cartItems: state.cartItems.map((x) =>
			  x.id === item.id ? { ...x, qty: x.qty + 1 } : x
			),
		  };
		} else {
		  return {
			...state,
			cartItems: [...state.cartItems, { ...item, qty: 1 }],
		  };
		}
  
	  case "REMOVE_FROM_CART":
		return {
		  ...state,
		  cartItems: state.cartItems.filter((x) => x.id !== action.payload),
		};

	case "CLEAR_CART":
  	   return {
   	   ...state,
   	   cartItems: [],
  		};

  
	  default:
		return state;
	}
  };
  
  export default cartReducer;
  
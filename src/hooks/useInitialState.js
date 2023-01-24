import { useState } from "react";

const initialState = {
    cart:[],
}
const useInitialState = () => {
    const [state, setstate] = useState(initialState);
    const addToCart = (payload) => {
        setstate({
            ...state,
            cart:[...state.cart, payload]
        });
    };

    return {
        state,
        addToCart
    }
}
export default useInitialState;
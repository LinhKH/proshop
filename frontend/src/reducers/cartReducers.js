import {
    CART_ADD_ITEM,
    COUNT_CART_TOTALS,
    CART_CLEAR_ITEMS,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD
} from '../constants/cartConstants'

const getLocalStorage = () => {
    let cartItems = localStorage.getItem('cartItems')
    if (cartItems) {
        return JSON.parse(localStorage.getItem('cartItems'))
    } else {
        return []
    }
};

const initState = {
    cartItems: getLocalStorage(),
    shippingAddress: {}
};

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find((x) => x.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product === existItem.product ? item : x
                    ),
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
            }
        
        case CART_CLEAR_ITEMS:
            return {
                ...state,
                cartItems: []
            }

        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload,
            }
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            }

        case COUNT_CART_TOTALS:
            const { total_items, total_amount } = state.cartItems.reduce(
                (total, cartItem) => {
                    const { qty, price } = cartItem
                    total.total_items += Number(qty)
                    total.total_amount += price * Number(qty)
                    return total
                },
                { total_items: 0, total_amount: 0 }
            )
            return { ...state, total_items, total_amount }

        default:
            return state
    }
}

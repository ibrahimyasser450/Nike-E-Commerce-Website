import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  // localStorage for storing cart
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQantity: 0,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    // when the user want to add the item to the cart
    setAddItemToCart: (state, action) => {
      // first find the item index in the cartItems array that stored in the localStorage
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      // if the item index is greater than or equal to 0 that means the item is already added to the cart and we need to increase the quantity
      // else that means the item is not added to the cart and we need to add the item first time to the cart and set the quantity to 1
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        // toast success message like notification or alert for showing the massage to the user
        toast.success(`Item QTY Increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} added to Cart`);
      }
      // after adding the item to the cart we need to update the localStorage
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // when click on the remove button [Waste basket] that remove the item from the cart
    setRemoveItemFromCart: (state, action) => {
      // return the cartItems array without the item that user want to remove
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      // after removing the item from the cart we need to update the localStorage
      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      // notification or alert for showing the massage to the user
      toast.success(`${action.payload.title} Removed From Cart`);
    },

    // when the user click on the increase button [+] that increase the quantity of the item
    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`Item QTY Increased`);
      }
      // after increasing the quantity of the item we need to update the localStorage
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // when the user click on the decrease button [-] that decrease the quantity of the item
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.success(`Item QTY Decreased`);
      }
      // after decreasing the quantity of the item we need to update the localStorage
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // when the user click on the clear cart button [x] that clear the cart [delete all the items from the cart]
    setClearCartItems: (state, action) => {
      //set the cartItems array to empty
      state.cartItems = [];
      toast.success(`Cart Cleared`);
      // after clearing the cart we need to update the localStorage
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // when the user want to get the total price and total quantity of the items in the cart
    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQantity = totalQTY;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals,
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity;

export default CartSlice.reducer;

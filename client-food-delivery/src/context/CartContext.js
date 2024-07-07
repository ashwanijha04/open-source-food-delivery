import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0 });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/cart');
        setCart(response.data || { items: [], total: 0 });
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  const addToCart = async (dish) => {
    const updatedItems = [...cart.items, { dish, quantity: 1 }];
    const updatedTotal = cart.total + (dish.price || 0); // Ensure price is valid



    const updatedCart = { items: updatedItems, total: updatedTotal };

    console.log("Updated cart: ", updatedCart)
    setCart(updatedCart);

    try {
      await axios.post('http://localhost:8081/api/cart', updatedCart);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const removeFromCart = async (dishId) => {
    const updatedItems = cart.items.filter(item => item.dish._id !== dishId);
    const updatedTotal = updatedItems.reduce((acc, item) => acc + (item.dish.price || 0), 0); // Ensure price is valid

    const updatedCart = { items: updatedItems, total: updatedTotal };
    setCart(updatedCart);

    try {
      await axios.post('http://localhost:8081/api/cart', updatedCart);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const clearCart = async () => {
    setCart({ items: [], total: 0 });

    try {
      await axios.delete('http://localhost:8081/api/cart');
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

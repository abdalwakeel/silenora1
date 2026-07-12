// src/context/CartContext.js
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('silenora_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveToStorage = (newCart) => {
    setCart(newCart);
    localStorage.setItem('silenora_cart', JSON.stringify(newCart));
  };

  // إضافة منتج للسلة (بالاعتماد على id بدل title)
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      const updated = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveToStorage(updated);
    } else {
      saveToStorage([...cart, { ...product, quantity: 1 }]);
    }
    setIsOpen(true);
  };

  // حذف منتج تماماً
  const removeFromCart = (id) => {
    const updated = cart.filter(item => item.id !== id);
    saveToStorage(updated);
  };

  // تحديث الكمية (زيادة أو نقصان)
  const updateQuantity = (id, amount) => {
    const updated = cart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + amount;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    });
    saveToStorage(updated);
  };

  const cartTotal = cart.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, isOpen, setIsOpen, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
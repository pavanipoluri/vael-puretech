import React, { createContext, useContext, useState, useEffect } from 'react';
import { BUILDER_OPTIONS } from '../data/productData';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Agency Mode CRO Insights Toggle
  const [isAgencyMode, setIsAgencyMode] = useState(false);
  const [activeAgencyModal, setActiveAgencyModal] = useState(null);

  // Cart Drawer State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);

  // Cart Items
  const [cart, setCart] = useState([
    {
      id: "initial-core",
      title: "VAEL H2-Pro™ Undersink Core System",
      finish: "Matte Noir Architectural",
      subscription: "Annual Auto-Replenish (Save 20%)",
      addons: ["Extra Year Mineral Infusion Pods"],
      unitPrice: 899 + 69,
      quantity: 1,
      image: "core-noir"
    }
  ]);

  // Modular System Builder State
  const [builderState, setBuilderState] = useState({
    system: BUILDER_OPTIONS.systems[0],
    finish: BUILDER_OPTIONS.finishes[0],
    addons: [BUILDER_OPTIONS.addons[1]], // Pre-selected popular add-on
    subscription: BUILDER_OPTIONS.subscriptions[0]
  });

  // Calculate current builder price
  const calculateBuilderTotal = () => {
    let total = builderState.system.price;
    total += builderState.finish.addedPrice;
    builderState.addons.forEach(addon => {
      total += addon.price;
    });
    return total;
  };

  // Cart calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const freeShippingThreshold = 500;
  const freeShippingProgress = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const toggleAgencyMode = () => {
    setIsAgencyMode(prev => !prev);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.finish === product.finish);
      if (existing) {
        return prev.map(item => 
          item === existing ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, delta) => {
    setCart(prev => prev.map((item, i) => {
      if (i === index) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const addCustomBuilderToCart = () => {
    const item = {
      id: `custom-system-${Date.now()}`,
      title: `${builderState.system.name}`,
      finish: builderState.finish.name,
      subscription: builderState.subscription.name,
      addons: builderState.addons.map(a => a.name),
      unitPrice: calculateBuilderTotal(),
      quantity: 1,
      image: builderState.finish.image
    };
    addToCart(item);
  };

  return (
    <StoreContext.Provider
      value={{
        isAgencyMode,
        toggleAgencyMode,
        activeAgencyModal,
        setActiveAgencyModal,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isPitchModalOpen,
        setIsPitchModalOpen,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartSubtotal,
        cartCount,
        freeShippingProgress,
        freeShippingThreshold,
        builderState,
        setBuilderState,
        calculateBuilderTotal,
        addCustomBuilderToCart
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

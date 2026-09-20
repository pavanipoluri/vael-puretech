import React from 'react';
import { useStore } from '../context/StoreContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, Zap, CheckCircle } from 'lucide-react';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateQuantity, 
    cartSubtotal, 
    freeShippingProgress, 
    freeShippingThreshold,
    setIsCheckoutOpen,
    addToCart
  } = useStore();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleAddCrossSell = () => {
    addToCart({
      id: "cross-sell-remineral",
      title: "Himalayan Bio-Mineral Infusion Pod (1-Year Supply)",
      finish: "Medical Core Standard",
      subscription: "Annual Replacement",
      addons: [],
      unitPrice: 69,
      quantity: 1,
      image: "mineral-pod"
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-obsidian-900 border-l border-white/10 shadow-2xl flex flex-col justify-between animate-slideLeft">
          
          {/* Top Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-hydro-cyan" />
              <h2 className="text-lg font-bold text-white">Your Hydration Bag</h2>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/10 text-titanium-300">
                {cart.length} {cart.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-titanium-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Milestone Indicator */}
          <div className="p-4 bg-obsidian-950 border-b border-white/10 space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-titanium-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {freeShippingProgress >= 100 
                    ? 'Free Insured Express Delivery Unlocked!' 
                    : `Add $${(freeShippingThreshold - cartSubtotal).toFixed(0)} for Free Express Shipping`}
                </span>
              </span>
              <span className="text-emerald-400 font-bold">{freeShippingProgress.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-obsidian-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-hydro-cyan to-emerald-400 h-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-white/5">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center text-titanium-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-base text-titanium-300 font-medium">Your bag is currently empty.</p>
                <a
                  href="#builder"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block text-xs font-mono font-bold text-hydro-cyan hover:underline"
                >
                  Configure a VAEL H2-Pro System &rarr;
                </a>
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="pt-4 first:pt-0 flex gap-4 items-start">
                  
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl bg-obsidian-800 border border-white/10 flex-shrink-0 flex items-center justify-center p-2">
                    <div className="w-8 h-10 rounded bg-hydro-cyan/20 border border-hydro-cyan/40 flex items-center justify-center text-[10px] font-mono font-bold text-hydro-cyan">
                      RO
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold text-white leading-tight">{item.title}</h3>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-titanium-400 hover:text-red-400 transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs text-titanium-400">Finish: {item.finish}</p>
                    {item.subscription && (
                      <p className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>{item.subscription}</span>
                      </p>
                    )}

                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center gap-2 border border-white/10 rounded-lg p-1 bg-obsidian-950">
                        <button
                          onClick={() => updateQuantity(index, -1)}
                          className="p-1 text-titanium-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs text-white px-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, 1)}
                          className="p-1 text-titanium-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-mono font-bold text-white text-sm">
                        ${(item.unitPrice * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>

                </div>
              ))
            )}

            {/* High-Converting 1-Click Cross-Sell */}
            {cart.length > 0 && !cart.some(item => item.id.includes("remineral")) && (
              <div className="pt-4">
                <div className="p-3.5 rounded-2xl bg-mineral-gold/10 border border-mineral-gold/30 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-mineral-gold flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Add Extra Himalayan Mineral Pod</p>
                      <p className="text-[10px] text-titanium-300">Boosts Magnesium & Calcium ions (+$69)</p>
                    </div>
                  </div>
                  <button
                    onClick={handleAddCrossSell}
                    className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-mineral-gold text-obsidian-950 hover:bg-yellow-400 transition-all flex-shrink-0"
                  >
                    + Add
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Checkout Action */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-obsidian-950 space-y-4">
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-titanium-300">Estimated Subtotal</span>
                  <span className="font-mono font-extrabold text-white text-lg">${cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-titanium-400">
                  <span>Shipping & Handling</span>
                  <span className="text-emerald-400 font-mono">FREE (Insured)</span>
                </div>
                <div className="flex justify-between text-xs text-titanium-400 pt-1 border-t border-white/5">
                  <span>Financing Estimate</span>
                  <span className="text-hydro-cyan font-mono">${Math.round(cartSubtotal / 24)}/mo with Affirm</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-hydro-cyan via-hydro-glow to-hydro-blue text-obsidian-950 font-extrabold text-base shadow-glow-cyan transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Proceed to Express Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-3 text-[10px] text-titanium-400 font-mono">
                <span>🔒 256-BIT ENCRYPTED</span>
                <span>&bull;</span>
                <span>100-DAY RISK-FREE TRIAL</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

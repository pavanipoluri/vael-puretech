import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, CheckCircle, ShieldCheck, Lock, CreditCard, Sparkles, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, cartSubtotal } = useStore();
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'express' | 'affirm'
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isCheckoutOpen) return null;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
      // Trigger festive confetti
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-obsidian-900 border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 animate-scaleUp overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-titanium-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Order Confirmation Screen */
          <div className="text-center py-8 space-y-6 animate-fadeIn">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-hydro-cyan uppercase tracking-widest">
                ORDER #VL-98421 CONFIRMED
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Welcome to Cellular Hydration.
              </h2>
              <p className="text-sm text-titanium-300 max-w-md mx-auto font-light">
                Your VAEL H2-Pro Pure Core system is being hand-calibrated in our clean lab and dispatched via priority courier.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-950 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-titanium-400">Estimated Delivery:</span>
                <span className="text-white font-bold font-mono">Wednesday (2 Business Days)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-titanium-400">Total Paid:</span>
                <span className="text-emerald-400 font-bold font-mono">${cartSubtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-titanium-400">Warranty Status:</span>
                <span className="text-hydro-cyan font-bold font-mono">Lifetime Active</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-hydro-cyan to-hydro-blue text-obsidian-950 font-bold text-sm shadow-glow-cyan"
            >
              Return to Storefront
            </button>
          </div>
        ) : (
          /* High-Converting Frictionless Checkout */
          <form onSubmit={handlePlaceOrder} className="space-y-6">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-hydro-cyan mb-1">
                <Lock className="w-3.5 h-3.5" />
                <span>256-BIT ENCRYPTED DIRECT CHECKOUT</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">Complete Your Order</h2>
            </div>

            {/* Express Pay Pills */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-3 rounded-xl border text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 ${
                  paymentMethod === 'card'
                    ? 'bg-obsidian-800 border-hydro-cyan text-white shadow-glow-cyan'
                    : 'bg-obsidian-950 border-white/10 text-titanium-400 hover:text-white'
                }`}
              >
                <CreditCard className="w-4 h-4 text-hydro-cyan" />
                <span>Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('express')}
                className={`py-3 rounded-xl border text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 ${
                  paymentMethod === 'express'
                    ? 'bg-obsidian-800 border-hydro-cyan text-white shadow-glow-cyan'
                    : 'bg-obsidian-950 border-white/10 text-titanium-400 hover:text-white'
                }`}
              >
                <span>Pay / G-Pay</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('affirm')}
                className={`py-3 rounded-xl border text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 ${
                  paymentMethod === 'affirm'
                    ? 'bg-obsidian-800 border-hydro-cyan text-white shadow-glow-cyan'
                    : 'bg-obsidian-950 border-white/10 text-titanium-400 hover:text-white'
                }`}
              >
                <span>Affirm ($38/mo)</span>
              </button>
            </div>

            {/* Shipping Inputs */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase text-titanium-400 tracking-wider">Shipping Destination</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  required
                  type="text"
                  placeholder="First & Last Name"
                  defaultValue="Marcus Sterling"
                  className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-titanium-400 focus:outline-none focus:border-hydro-cyan"
                />
                <input
                  required
                  type="email"
                  placeholder="Email for Tracking & Telemetry"
                  defaultValue="marcus@sterling.design"
                  className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-titanium-400 focus:outline-none focus:border-hydro-cyan"
                />
              </div>

              <input
                required
                type="text"
                placeholder="Street Address"
                defaultValue="742 Evergreen Terrace"
                className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-titanium-400 focus:outline-none focus:border-hydro-cyan"
              />

              <div className="grid grid-cols-3 gap-3">
                <input
                  required
                  type="text"
                  placeholder="City"
                  defaultValue="Austin"
                  className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-titanium-400 focus:outline-none focus:border-hydro-cyan"
                />
                <input
                  required
                  type="text"
                  placeholder="State"
                  defaultValue="TX"
                  className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-titanium-400 focus:outline-none focus:border-hydro-cyan"
                />
                <input
                  required
                  type="text"
                  placeholder="Postal Code"
                  defaultValue="78701"
                  className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-titanium-400 focus:outline-none focus:border-hydro-cyan"
                />
              </div>
            </div>

            {/* Payment Fields (Card simulation) */}
            {paymentMethod === 'card' && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-mono uppercase text-titanium-400 tracking-wider">Payment Details</h3>
                <input
                  required
                  type="text"
                  placeholder="Card Number (4242 •••• •••• 4242)"
                  defaultValue="4242 •••• •••• 4242"
                  className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-titanium-400 focus:outline-none focus:border-hydro-cyan font-mono"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    required
                    type="text"
                    placeholder="MM / YY"
                    defaultValue="08/29"
                    className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-titanium-400 focus:outline-none focus:border-hydro-cyan font-mono"
                  />
                  <input
                    required
                    type="text"
                    placeholder="CVC"
                    defaultValue="894"
                    className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-titanium-400 focus:outline-none focus:border-hydro-cyan font-mono"
                  />
                </div>
              </div>
            )}

            {/* Price Total & Submission */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-titanium-300">Total Charged Today:</span>
                <span className="text-2xl font-extrabold text-white font-mono">${cartSubtotal.toLocaleString()}</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-hydro-cyan via-hydro-glow to-hydro-blue text-obsidian-950 font-extrabold text-base shadow-glow-cyan transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="font-mono text-xs animate-pulse">AUTHORIZING SECURE TRANSACTION...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Pay ${cartSubtotal.toLocaleString()} & Activate Lifetime Warranty</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-titanium-400">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Free Insured Express Shipping &bull; 100-Day In-Home Return Privilege</span>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}

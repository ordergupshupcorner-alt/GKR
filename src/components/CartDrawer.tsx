import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageSquare, Phone, ArrowRight, Tag, Truck, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_PHONE } from '../data/menuData';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    discount,
    deliveryFee,
    finalTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    deliveryType,
    setDeliveryType,
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
    customerAddress,
    setCustomerAddress,
    orderNotes,
    setOrderNotes,
    checkoutViaWhatsApp,
    checkoutViaCall
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    if (!inputCoupon.trim()) return;

    const res = applyCoupon(inputCoupon);
    if (res.success) {
      setCouponSuccess(res.message);
      setInputCoupon('');
    } else {
      setCouponError(res.message);
    }
  };

  // Free delivery threshold calculations
  const freeDeliveryThreshold = 249;
  const amountNeededForFree = Math.max(0, freeDeliveryThreshold - subtotal);
  const freeDeliveryProgress = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs animate-fade-in"
      onClick={() => setIsCartOpen(false)}
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 id="cart-drawer-title" className="font-heading font-black text-stone-900 text-lg">Your Gupshup Order</h3>
                <p className="text-xs text-stone-500">{cart.length} unique items selected</p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart drawer"
              className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Bar */}
          {deliveryType === 'delivery' && (
            <div className="px-5 py-2.5 bg-amber-50 border-b border-amber-200/80 text-xs text-stone-800">
              {amountNeededForFree > 0 ? (
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-medium">
                    <span className="flex items-center gap-1.5 text-stone-700">
                      <Truck className="w-3.5 h-3.5 text-amber-600" />
                      Add <strong className="text-stone-950">₹{amountNeededForFree}</strong> for FREE Delivery!
                    </span>
                    <span className="font-bold text-amber-700">{freeDeliveryProgress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-amber-200/80 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-red-500 transition-all duration-300"
                      style={{ width: `${freeDeliveryProgress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Congratulations! You unlocked FREE Delivery!</span>
                </div>
              )}
            </div>
          )}

          {/* Drawer Body / Scrollable Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-3xl bg-amber-100 mx-auto flex items-center justify-center text-amber-600">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-stone-900 text-lg">Your cart is feeling hungry</h4>
                  <p className="text-xs text-stone-500 max-w-xs mx-auto">
                    Explore our crispy burgers, spicy momos, and street chowmein starting at just ₹30!
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-heading font-extrabold text-xs shadow-md cursor-pointer hover:bg-amber-600 transition-colors"
                >
                  Explore Delicious Menu
                </button>
              </div>
            ) : (
              <>
                {/* Order Type Toggle: Delivery vs Takeaway */}
                <div className="p-1 bg-stone-100 rounded-xl flex items-center text-xs font-bold text-stone-700">
                  <button
                    onClick={() => setDeliveryType('delivery')}
                    className={`flex-1 py-2 rounded-lg text-center transition-all cursor-pointer ${
                      deliveryType === 'delivery'
                        ? 'bg-white text-stone-950 shadow-xs'
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    🛵 Home Delivery
                  </button>
                  <button
                    onClick={() => setDeliveryType('takeaway')}
                    className={`flex-1 py-2 rounded-lg text-center transition-all cursor-pointer ${
                      deliveryType === 'takeaway'
                        ? 'bg-white text-stone-950 shadow-xs'
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    🛍️ Takeaway / Dine-in
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wider">
                    <span>Items Ordered</span>
                    <button
                      onClick={clearCart}
                      className="text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      Clear All
                    </button>
                  </div>

                  {cart.map((ci) => (
                    <div
                      key={ci.cartItemId}
                      className="p-3 rounded-2xl border border-stone-200 bg-white hover:border-amber-200 transition-all flex gap-3 items-center"
                    >
                      <img
                        src={ci.image}
                        alt={ci.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0 space-y-0.5">
                        <h4 className="font-heading font-bold text-stone-900 text-sm truncate">
                          {ci.name}
                        </h4>
                        <div className="flex flex-wrap items-center gap-1 text-[11px] text-stone-500">
                          {ci.portionOrSize && ci.portionOrSize !== 'single' && (
                            <span className="bg-stone-100 px-1.5 py-0.2 rounded font-semibold uppercase text-stone-700">
                              {ci.portionOrSize}
                            </span>
                          )}
                          {ci.extras.cheeseSlice && (
                            <span className="bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-semibold">
                              +Cheese
                            </span>
                          )}
                          {ci.extras.alooTikki && (
                            <span className="bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-semibold">
                              +Tikki
                            </span>
                          )}
                        </div>
                        {ci.notes && (
                          <p className="text-[10px] text-stone-400 italic truncate">
                            Note: {ci.notes}
                          </p>
                        )}
                        <p className="font-heading font-extrabold text-stone-950 text-xs">
                          ₹{ci.unitPrice * ci.quantity}
                        </p>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <button
                          onClick={() => removeFromCart(ci.cartItemId)}
                          aria-label={`Remove ${ci.name} from cart`}
                          className="text-stone-400 hover:text-red-500 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50 p-0.5">
                          <button
                            onClick={() => updateQuantity(ci.cartItemId, ci.quantity - 1)}
                            aria-label={`Decrease quantity of ${ci.name}`}
                            className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-stone-900">
                            {ci.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(ci.cartItemId, ci.quantity + 1)}
                            aria-label={`Increase quantity of ${ci.name}`}
                            className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <div className="space-y-3 pt-2 border-t border-stone-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Your Contact & Delivery Info
                  </h4>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Your Name (e.g. Rahul Sharma)"
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50/50 focus:bg-white outline-none focus:border-amber-500"
                    />
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Your Mobile Number"
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50/50 focus:bg-white outline-none focus:border-amber-500"
                    />
                    {deliveryType === 'delivery' && (
                      <textarea
                        rows={2}
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="Complete Delivery Address / House No. / Landmark"
                        className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50/50 focus:bg-white outline-none focus:border-amber-500 resize-none"
                      />
                    )}
                    <input
                      type="text"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      placeholder="Special Cooking Note (e.g. extra napkins, mild spicy)"
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50/50 focus:bg-white outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Coupon Code Section */}
                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-amber-600" /> Apply Discount Coupon
                    </span>
                    {appliedCoupon && (
                      <button
                        onClick={removeCoupon}
                        className="text-[11px] text-red-600 hover:underline font-semibold"
                      >
                        Remove
                      </button>
                    )}
                  </label>

                  {appliedCoupon ? (
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <div>
                          <p className="font-bold text-emerald-900">{appliedCoupon} Applied</p>
                          <p className="text-[11px] text-emerald-700">You saved ₹{discount} on this order!</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <input
                        type="text"
                        value={inputCoupon}
                        onChange={(e) => setInputCoupon(e.target.value)}
                        placeholder="Enter coupon (e.g. GUPSHUP10)"
                        className="flex-1 px-3.5 py-2 rounded-xl border border-stone-200 text-xs uppercase font-mono focus:border-amber-500 outline-none"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-black text-amber-300 font-heading font-bold text-xs cursor-pointer transition-colors"
                      >
                        Apply
                      </button>
                    </form>
                  )}

                  {couponError && (
                    <p className="text-[11px] font-semibold text-red-600">{couponError}</p>
                  )}
                  {couponSuccess && (
                    <p className="text-[11px] font-semibold text-emerald-600">{couponSuccess}</p>
                  )}
                </div>

                {/* Quick promo tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <button
                    onClick={() => applyCoupon('GUPSHUP10')}
                    className="text-[10px] font-semibold bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-stone-950 px-2 py-0.5 rounded border border-stone-200 transition-colors"
                  >
                    GUPSHUP10 (10% OFF)
                  </button>
                  <button
                    onClick={() => applyCoupon('FEAST50')}
                    className="text-[10px] font-semibold bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-stone-950 px-2 py-0.5 rounded border border-stone-200 transition-colors"
                  >
                    FEAST50 (₹50 OFF on ₹299+)
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer / Bill & Order Trigger */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3">
              {/* Price Calculation breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-stone-900">₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount ({appliedCoupon})</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="font-bold text-stone-900">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-700 uppercase font-bold">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-heading font-black text-stone-950 pt-1.5 border-t border-stone-200">
                  <span>Grand Total</span>
                  <span className="text-lg text-stone-950">₹{finalTotal}</span>
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={checkoutViaWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>Send Order Via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={checkoutViaCall}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-black text-stone-100 font-heading font-bold text-xs flex items-center justify-center gap-1.5 active:scale-98 transition-all cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Kitchen ({STORE_PHONE})</span>
                  </button>
                </div>
              </div>

              <p className="text-[10px] text-center text-stone-500">
                ⚡ Instant dispatch confirmation • Pay via UPI or Cash upon arrival
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

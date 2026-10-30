import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem, ComboItem } from '../types';
import confetti from 'canvas-confetti';
import { STORE_WHATSAPP, STORE_PHONE } from '../data/menuData';

interface CartContextType {
  cart: CartItem[];
  addToCart: (
    item: MenuItem,
    portionOrSize?: 'single' | 'half' | 'full' | 'medium' | 'large',
    extras?: { cheeseSlice?: boolean; alooTikki?: boolean },
    notes?: string
  ) => void;
  addComboToCart: (combo: ComboItem) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQty: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  itemCount: number;
  subtotal: number;
  discount: number;
  deliveryFee: number;
  finalTotal: number;
  couponCode: string;
  setCouponCode: (code: string) => void;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  deliveryType: 'delivery' | 'takeaway';
  setDeliveryType: (type: 'delivery' | 'takeaway') => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  customerPhone: string;
  setCustomerPhone: (phone: string) => void;
  customerAddress: string;
  setCustomerAddress: (address: string) => void;
  orderNotes: string;
  setOrderNotes: (notes: string) => void;
  checkoutViaWhatsApp: () => void;
  checkoutViaCall: () => void;
  isOrderSuccessModalOpen: boolean;
  setIsOrderSuccessModalOpen: (open: boolean) => void;
  lastOrderRef: string | null;
  selectedModalItem: MenuItem | null;
  setSelectedModalItem: (item: MenuItem | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('gupshup_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>('GUPSHUP10'); // Default welcome offer
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'takeaway'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [isOrderSuccessModalOpen, setIsOrderSuccessModalOpen] = useState(false);
  const [lastOrderRef, setLastOrderRef] = useState<string | null>(null);
  const [selectedModalItem, setSelectedModalItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('gupshup_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToCart = (
    item: MenuItem,
    portionOrSize: 'single' | 'half' | 'full' | 'medium' | 'large' = 'single',
    extras: { cheeseSlice?: boolean; alooTikki?: boolean } = { cheeseSlice: false, alooTikki: false },
    notes = ''
  ) => {
    // Determine unit price based on portion/size
    let unitPrice = item.price;
    if (item.hasPortions) {
      unitPrice = portionOrSize === 'half' ? (item.halfPrice ?? item.price) : (item.fullPrice ?? item.price);
    } else if (item.hasSizes) {
      unitPrice = portionOrSize === 'medium' ? (item.mediumPrice ?? item.price) : (item.largePrice ?? item.price);
    }

    // Add extra costs
    if (extras.cheeseSlice) unitPrice += 20;
    if (extras.alooTikki) unitPrice += 20;

    const cartItemId = `${item.id}-${portionOrSize}-${extras.cheeseSlice ? 'ch' : 'no'}-${extras.alooTikki ? 'tk' : 'no'}-${notes.trim()}`;

    setCart((prev) => {
      const existing = prev.find((ci) => ci.cartItemId === cartItemId);
      if (existing) {
        return prev.map((ci) =>
          ci.cartItemId === cartItemId ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          menuId: item.id,
          name: item.name,
          portionOrSize,
          unitPrice,
          quantity: 1,
          extras,
          notes,
          image: item.image
        }
      ];
    });

    // Fire mini confetti microinteraction
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.85, x: 0.9 },
      colors: ['#F59E0B', '#EF4444', '#10B981']
    });
  };

  const addComboToCart = (combo: ComboItem) => {
    const cartItemId = `combo-${combo.id}`;
    setCart((prev) => {
      const existing = prev.find((ci) => ci.cartItemId === cartItemId);
      if (existing) {
        return prev.map((ci) =>
          ci.cartItemId === cartItemId ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          menuId: combo.id,
          name: combo.title,
          portionOrSize: 'single',
          unitPrice: combo.offerPrice,
          quantity: 1,
          extras: {},
          notes: combo.items.join(', '),
          image: combo.image
        }
      ];
    });

    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.7, x: 0.5 },
      colors: ['#F59E0B', '#EF4444', '#10B981']
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
    } else {
      setCart((prev) =>
        prev.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  // Discount calculation
  let discount = 0;
  if (appliedCoupon === 'GUPSHUP10') {
    discount = Math.round(subtotal * 0.1); // 10% OFF
  } else if (appliedCoupon === 'FEAST50') {
    discount = subtotal >= 299 ? 50 : 0;
  } else if (appliedCoupon === 'CHAI100') {
    discount = subtotal >= 599 ? 100 : 0;
  }

  // Delivery fee logic: Free delivery over ₹249 for delivery orders, ₹0 for takeaway
  const deliveryFee = deliveryType === 'takeaway' || subtotal >= 249 || subtotal === 0 ? 0 : 25;
  const finalTotal = Math.max(0, subtotal - discount + deliveryFee);

  const applyCoupon = (code: string) => {
    const upper = code.trim().toUpperCase();
    if (upper === 'GUPSHUP10') {
      setAppliedCoupon('GUPSHUP10');
      return { success: true, message: '🎉 FLAT 10% Discount Applied!' };
    } else if (upper === 'FEAST50') {
      if (subtotal < 299) {
        return { success: false, message: 'Minimum order of ₹299 required for FEAST50' };
      }
      setAppliedCoupon('FEAST50');
      return { success: true, message: '🎉 ₹50 Discount Applied!' };
    } else if (upper === 'CHAI100') {
      if (subtotal < 599) {
        return { success: false, message: 'Minimum order of ₹599 required for CHAI100' };
      }
      setAppliedCoupon('CHAI100');
      return { success: true, message: '🎉 ₹100 Mega Discount Applied!' };
    }
    return { success: false, message: 'Invalid coupon code. Try GUPSHUP10' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const generateOrderMessage = (orderRef: string) => {
    let msg = `🍔 *NEW ORDER FOR GUPSHUP CORNER* 🍔\n`;
    msg += `*Order Ref:* #${orderRef}\n`;
    msg += `*Customer:* ${customerName.trim() || 'Foodie'}\n`;
    msg += `*Phone:* ${customerPhone.trim() || 'Not specified'}\n`;
    msg += `*Type:* ${deliveryType.toUpperCase()}\n`;
    if (deliveryType === 'delivery') {
      msg += `*Delivery Address:* ${customerAddress.trim() || 'To be shared on call'}\n`;
    }
    if (orderNotes.trim()) {
      msg += `*Special Instructions:* ${orderNotes.trim()}\n`;
    }
    msg += `\n*─── ORDER ITEMS ───*\n`;

    cart.forEach((item, idx) => {
      let portionLabel = '';
      if (item.portionOrSize && item.portionOrSize !== 'single') {
        portionLabel = ` (${item.portionOrSize.toUpperCase()})`;
      }
      let extrasText = '';
      if (item.extras.cheeseSlice) extrasText += ' +Extra Cheese';
      if (item.extras.alooTikki) extrasText += ' +Extra Tikki';

      msg += `${idx + 1}. ${item.name}${portionLabel}${extrasText} x ${item.quantity} = ₹${item.unitPrice * item.quantity}\n`;
    });

    msg += `\n*─── BILL SUMMARY ───*\n`;
    msg += `Subtotal: ₹${subtotal}\n`;
    if (discount > 0) {
      msg += `Discount (${appliedCoupon}): -₹${discount}\n`;
    }
    msg += `Delivery: ${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee}\n`;
    msg += `*TOTAL PAYABLE:* ₹${finalTotal}\n`;
    msg += `\nPlease confirm preparation and estimated dispatch time! Thank you.`;

    return msg;
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const checkoutViaWhatsApp = () => {
    if (cart.length === 0) return;
    const orderRef = Math.floor(100000 + Math.random() * 900000).toString();
    setLastOrderRef(orderRef);
    const msg = generateOrderMessage(orderRef);
    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${STORE_WHATSAPP}?text=${encoded}`;

    triggerCelebration();
    setIsOrderSuccessModalOpen(true);
    setIsCartOpen(false);

    // Open WhatsApp
    window.open(waUrl, '_blank');
  };

  const checkoutViaCall = () => {
    if (cart.length === 0) return;
    const orderRef = Math.floor(100000 + Math.random() * 900000).toString();
    setLastOrderRef(orderRef);
    triggerCelebration();
    setIsOrderSuccessModalOpen(true);
    setIsCartOpen(false);
    window.location.href = `tel:${STORE_PHONE}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        addComboToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        itemCount,
        subtotal,
        discount,
        deliveryFee,
        finalTotal,
        couponCode,
        setCouponCode,
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
        checkoutViaCall,
        isOrderSuccessModalOpen,
        setIsOrderSuccessModalOpen,
        lastOrderRef,
        selectedModalItem,
        setSelectedModalItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

import { describe, it, expect, beforeEach } from 'vitest';
import cartReducer, { addToCart, removeFromCart } from '../../slice/cartSlice';

describe('Cart Slice', () => {
  beforeEach(() => {
    localStorage.getItem.mockClear();
    localStorage.setItem.mockClear();
  });

  it('should return the initial state', () => {
    const initialState = { cart: [], cartCount: 0 }; // Add cartCount
    const result = cartReducer(undefined, { type: undefined });
    expect(result).toEqual(initialState);
  });

  it('should handle addToCart', () => {
    const initialState = { cart: [] };
    const item = { id: 1, name: 'Product 1' }; // Initial item
    const result = cartReducer(initialState, addToCart(item));
  
    // Check if cart contains item with quantity property
    expect(result.cart).toContainEqual({ ...item, quantity: 1 });
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([ { ...item, quantity: 1 } ]));
  });

  it('should handle removeFromCart', () => {
    const initialState = { cart: [{ id: 1, name: 'Product 1' }] };
    const result = cartReducer(initialState, removeFromCart(1));

    expect(result.cart).toEqual([]);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([]));
  });
});

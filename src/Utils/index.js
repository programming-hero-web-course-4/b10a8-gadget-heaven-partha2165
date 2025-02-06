import toast, { Toaster } from 'react-hot-toast';

//  get all item ls
const getAllCarts = () => {
    const allCart = localStorage.getItem('cart');
    if (allCart) {
        return JSON.parse(allCart);
    } else {
        return [];
    }
};

// Add item  loc st
const addToCart = (product) => {
    const cart = getAllCarts();

    const isExist = cart.find(item => item.id === product.id);
    if (isExist) {
        toast.error('Product is already added to Cart');
        return cart.length;
    }

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Product added to Cart');
    
    // Dispatch custom event for cart update
    document.dispatchEvent(new Event('cartUpdated'));
    
    return cart.length;
};

// Clear all items ls
const clearCart = () => {
    localStorage.removeItem('cart');
    document.dispatchEvent(new Event('cartUpdated'));
};

// getall wishlist  local storage
const getAllWishlist = () => {
    const allWishlist = localStorage.getItem('wishlist');
    if (allWishlist) {
        return JSON.parse(allWishlist);
    } else {
        return [];
    }
};

// Add item to wishlist 
const addToWishlist = (product) => {
    const wishlist = getAllWishlist();

    const isExist = wishlist.find(item => item.id === product.id);
    if (isExist) {
        toast.error('Product is already in Wishlist');
        return wishlist.length;
    }

    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    toast.success('Product added to Wishlist');
    
    
    document.dispatchEvent(new Event('wishlistUpdated'));
    
    return wishlist.length;
};

const removeFromWishlist = (productId) => {
    const wishlist = getAllWishlist();
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    
    // Dispatch custom event for wishlist update
    document.dispatchEvent(new Event('wishlistUpdated'));
    
    return updatedWishlist.length;
};

// Check if item is in the cart
const isInCart = (id) => {
    const cart = getAllCarts();
    return cart.some(item => item.id === id);
};

//    return cart length
const getCartCount = () => {
  const cart = getAllCarts();
  return cart.length;
};

const removeFromCart = (productId) => {
    const cart = getAllCarts();
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Dispatch custom event for cart update
    document.dispatchEvent(new Event('cartUpdated'));
    
    return updatedCart.length;
};

const getWishlistCount = () => {
  const wishlist = getAllWishlist();
  return wishlist.length;
};

export { addToCart, getAllCarts, clearCart, addToWishlist, getAllWishlist, removeFromWishlist, isInCart, getCartCount, removeFromCart, getWishlistCount };







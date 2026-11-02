import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(currentCart => {
            const existingProduct = currentCart.find(
                item => item.id === product.id
            );

            if (existingProduct) {
                return currentCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...currentCart, { ...product, quantity: 1 }];
        });
    }

    const increaseQuantity = (id) => {
        setCart(currentCart => currentCart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    }

    const decreaseQuantity = (id) => {
        setCart(currentCart => currentCart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);
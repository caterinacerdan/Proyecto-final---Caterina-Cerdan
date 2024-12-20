import { createContext, useState } from 'react';

//lo que tenemos que consumir - creamos el contexto
export const CartContext = createContext(false);

//el que provee acceso al contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //funciones para administrar cambios en el carro
  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <CartContext.Provider value={[cart, setCart, addItem]}>
      {children}
    </CartContext.Provider>
  );
}

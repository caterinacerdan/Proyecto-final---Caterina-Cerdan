import { createContext, useEffect, useState } from 'react';
import { getProducts } from '../asyncMock';

//lo que tenemos que consumir - creamos el contexto
export const ProductsContext = createContext(false);

//el que provee acceso al contexto
export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <ProductsContext.Provider value={[products, setProducts, loading]}>
      {children}
    </ProductsContext.Provider>
  );
}

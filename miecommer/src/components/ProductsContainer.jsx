import { getProducts } from '../../asyncMock.js';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(console.log('Promesa finalizada!'));
  }, []);
  return (
    <>
      <h1>Vista de Products</h1>
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </>
  );
}

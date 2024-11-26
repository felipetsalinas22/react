import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './product';

const ProductList = ({ addToCart }) => {
  const [productList, setProductList] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [filtro, setFiltro] = useState('');

  const handleFiltro = (e) => {
    setFiltro(e.target.value);
  };

  useEffect(() => {
    const skip = pagina * 5;

    if (filtro) {
      axios
        .get(`https://dummyjson.com/products/search?q=${filtro}&limit=5&skip=${skip}`)
        .then((res) => {
          setProductList(res.data.products);
        });
    } else {
      axios
        .get(`https://dummyjson.com/products?limit=5&skip=${skip}`)
        .then((res) => {
          setProductList(res.data.products);
        });
    }
  }, [pagina, filtro]);

  const handleSwitch = (e) => {
    if (e.target.value === 'next') {
      setPagina(pagina + 1);
    } else {
      setPagina(pagina <= 0 ? 0 : pagina - 1);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={filtro} 
        onChange={handleFiltro} 
        placeholder="Search for a product..."
      />
      <div>
        {productList.map((product) => (
          <Product 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
          />
        ))}
      </div>
      <button onClick={handleSwitch} value="prev" disabled={pagina <= 0}>
        Previous
      </button>
      <button onClick={handleSwitch} value="next">
        Next
      </button>
    </div>
  );
};

export default ProductList;

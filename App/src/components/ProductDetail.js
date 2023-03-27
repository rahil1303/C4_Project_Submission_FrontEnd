import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productID } = useParams();
    console.log(productId);
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail
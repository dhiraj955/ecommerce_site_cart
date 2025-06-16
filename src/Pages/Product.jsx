import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext';
import { useParams } from 'react-router';
import BredCrums from '../Component/Bredcrums/BredCrums';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import Description from '../Component/Description/Description';
import RelatedProducts from '../Component/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product?.find((e) => e.id === Number(productId)) || { category: "Unknown", name: "Unknown" }; // Convert productId to number

  return (
    <div>
      <BredCrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  );
};

export default Product

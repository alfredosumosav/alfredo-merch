import React from 'react'
import Product from "./Product";
import "../styles/components/Products.css";

const Products = ({ products }) => (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product key={products.id} product={product} />
        ))}
      </div>
    </div>
  )

export default Products

import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import handleSumTotal from '../utils/handleSumTotal';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  return (
    <>
      <Helmet>
        <title>Alfredo Merch - Order List</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? <h3>Order List:</h3> : <h3>No Orders...</h3>}
          {cart.map((item) => (
            <div className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total: $${handleSumTotal(cart)}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continue Order</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;

import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";

function MyComponent() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [totalItems, setTotalItems] = useState(0);

  const { isEmpty: cartIsEmpty, totalItems: cartTotalItems } = useCart();

  useEffect(() => {
    setIsEmpty(cartIsEmpty);
    setTotalItems(cartTotalItems);
  }, [cartIsEmpty, cartTotalItems]);

  return (
    <>
      <div className="ms-5 ">
        <p>
          {totalItems}
          <img
            style={{ marginLeft: !isEmpty ? "1px" : 0 }}
            className="icon-shop"
            src={`${process.env.PUBLIC_URL}/assets/images/logo_cart.jpg`}
            alt=""
          />
         
        </p>
      </div>
    </>
  );
}

export default MyComponent;

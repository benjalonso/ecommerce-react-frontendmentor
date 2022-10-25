import React from "react";

const MainProducts = () => {
  return (
    <main>
      <section>galeria de imagenes</section>
      <section>
        <p>Sneaker Company</p>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <p>
          <span>$125.00</span>
          <span>50%</span>
        </p>
        <p>$250.00</p>
        <div>
          <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
        <button>Add To Cart</button>
      </section>
    </main>
  );
};

export default MainProducts;
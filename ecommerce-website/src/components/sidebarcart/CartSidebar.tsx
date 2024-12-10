import { useState } from "react";

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 right-4 bg-black text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Cart
      </button>
      {isOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6">
          <button className="text-gray-500" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
          <p>Cart items go here...</p>
        </div>
      )}
    </>
  );
};

export default CartSidebar;

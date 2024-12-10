"use client"
import Image from "next/image";
import { useState } from "react";

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 right-4 bg-black text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Cart" : "Open Cart"}
      </button>

      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform`}
      >
        <div className="p-6">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <div className="mt-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/sofa-main.jpg"
                alt="Asgaard Sofa"
                className="w-16 h-16 rounded"
                width={64}
                height={64}
              />
              <div>
                <p className="font-semibold">Asgaard Sofa</p>
                <p className="text-gray-500">1 x Rs. 250,000.00</p>
              </div>
              <button className="text-red-500">×</button>
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <p className="font-semibold">Subtotal</p>
            <p className="font-bold">Rs. 250,000.00</p>
          </div>
          <div className="mt-4">
            <button className="w-full bg-black text-white py-2 rounded">
              View Cart
            </button>
            <button className="w-full mt-2 border border-black py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;

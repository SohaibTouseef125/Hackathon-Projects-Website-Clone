
import Image from "next/image";
import ProductImage1 from "./../../../public/assest/ProductImage1.png";
import ProductImage2 from "./../../../public/assest/ProductImage3.png";
import ProductImage3 from "./../../../public/assest/ProductImage3.png";
import { useState } from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Images */}
      <div>
        <Image
          src={ProductImage1}
          alt="Product Image"
          className="w-full h-auto"
          
        />
        <div className="flex space-x-2 mt-4">
          <Image src={ProductImage2} alt="Thumbnail 1" className="w-16 h-16" />
          <Image src={ProductImage3} alt="Thumbnail 2" className="w-16 h-16" />
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-2xl font-bold">Asgaard Sofa</h1>
        <p className="text-lg font-semibold text-gray-500 mt-2">Rs. 250,000.00</p>
        <p className="mt-4">
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a
          compact, stout-hearted hero.
        </p>

        {/* Options */}
        <div className="mt-6">
          <h3 className="font-bold">Size</h3>
          <div className="flex space-x-2 mt-2">
            {["L", "XL", "XS"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>

          <h3 className="font-bold mt-4">Color</h3>
          <div className="flex space-x-2 mt-2">
            <span className="w-8 h-8 bg-black rounded-full"></span>
            <span className="w-8 h-8 bg-purple-600 rounded-full"></span>
          </div>
        </div>

        {/* Quantity and Cart */}
        <div className="flex items-center space-x-4 mt-6">
          <div className="flex items-center space-x-2 border border-gray-300 px-3 py-1 rounded">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

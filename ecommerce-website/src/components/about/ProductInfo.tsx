const ProductInfo = () => {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Asgaard Sofa</h1>
        <p className="text-lg font-semibold text-gray-600">Rs. 250,000.00</p>
        <div className="flex items-center space-x-2">
          <p className="text-yellow-500">★★★★☆</p>
          <span className="text-gray-500 text-sm">5 Customer Reviews</span>
        </div>
        <p className="text-gray-600">
          Setting the bar as one of the loudest speakers in its class, this sofa
          is perfect for compact spaces.
        </p>
        <div className="space-y-2">
          <div>
            <label className="font-semibold">Size:</label>
            <div className="flex gap-2 mt-1">
              <button className="px-3 py-1 border rounded">L</button>
              <button className="px-3 py-1 border rounded">XL</button>
              <button className="px-3 py-1 border rounded">XS</button>
            </div>
          </div>
          <div>
            <label className="font-semibold">Color:</label>
            <div className="flex gap-2 mt-1">
              <span className="w-6 h-6 bg-blue-500 rounded-full"></span>
              <span className="w-6 h-6 bg-purple-500 rounded-full"></span>
              <span className="w-6 h-6 bg-yellow-500 rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="number"
            min="1"
            className="border px-2 py-1 w-16 text-center"
            defaultValue={1}
          />
          <button className="bg-black text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductInfo;
  
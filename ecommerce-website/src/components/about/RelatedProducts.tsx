import { relaredProducts } from "@/app/data";
import Image from "next/image";

const RelatedProducts = () => {
    return (
      <div className="mt-12">
        <h2 className="text-xl font-semibold">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {relaredProducts.map(product => (
            <div key={product.id} className="text-center border p-4">
              <Image src={product.image} alt={product.name} className="h-40 mx-auto"
              width={160}
              height={160} />
              <h3 className="mt-2 font-semibold">{product.name}</h3>
              <p className="text-gray-500">Rs. {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RelatedProducts;
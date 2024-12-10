
import { relaredProducts } from "@/app/data";
import Image from "next/image";

const RelatedProducts = () => {
    
    return (
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relaredProducts.map((product, index) => (
            <div key={index} className="text-center">
              <Image src={product.image} alt={product.name} className="w-full h-auto" width={750} height={384.46} />
              <h3 className="mt-2">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RelatedProducts;
  
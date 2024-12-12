import { products } from "@/app/data";
import Image from "next/image";
import Link from "next/link";

const ProductListShop = () => {
    return (
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-8" >
          

        {products.map(product => (
          <div key={product.id} className=" p-4 text-center">
           <Link href={product.link}  key={product.id}><Image width={900} height={192} src={product.image} alt={product.name} className="w-full h-48 object-cover" />  </Link>
            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <p className="text-gray-600">Rs. {product.price}</p>
          
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductListShop;
import Image from "next/image";
import ProductImage1 from "./../../../public/assest/ProductImage1.png";

export default function ProductRow() {
    return (
      <tr className="border-t">
        <td className="p-4 flex items-center">
          <Image src={ProductImage1} alt="Asgaard Sofa" className="w-16 h-16 rounded mr-4" />
          <span>Asgaard Sofa</span>
        </td>
        <td className="p-4">Rs. 250,000.00</td>
        <td className="p-4">
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="border rounded w-16 text-center"
          />
        </td>
        <td className="p-4">Rs. 250,000.00</td>
        <td className="p-4 text-red-500 cursor-pointer">
          <span className="material-icons">delete</span>
        </td>
      </tr>
    );
  }
  
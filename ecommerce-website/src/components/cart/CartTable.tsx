import ProductRow from "./ProductRow";

export default function CartTable() {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-700">
            <th className="p-4">Product</th>
            <th className="p-4">Price</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Subtotal</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          <ProductRow />
        </tbody>
      </table>
    </div>
  );
}

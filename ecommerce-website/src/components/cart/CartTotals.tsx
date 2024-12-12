import Link from "next/link";

export default function CartTotals() {
    return (
      <div className="bg-yellow-50 p-6 shadow-md rounded">
        <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>Rs. 250,000.00</span>
        </div>
        <Link href="/checkout">
        <button className="w-full bg-yellow-500 text-white py-3 rounded mt-4 hover:bg-yellow-600">
          Check Out
        </button>
        </Link>
      </div>
    );
  }
  
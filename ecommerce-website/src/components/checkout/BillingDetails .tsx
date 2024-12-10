export default function BillingDetails() {
    return (
      <div className="w-full max-w-lg bg-white p-6 shadow-md">
        <h2 className="text-lg font-bold mb-4">Billing Details</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border p-3 rounded w-full" />
            <input type="text" placeholder="Last Name" className="border p-3 rounded w-full" />
          </div>
          <input type="text" placeholder="Company Name (Optional)" className="border p-3 rounded w-full" />
          <select className="border p-3 rounded w-full">
            <option>Country / Region</option>
            <option>Sri Lanka</option>
          </select>
          <input type="text" placeholder="Street Address" className="border p-3 rounded w-full" />
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Town / City" className="border p-3 rounded w-full" />
            <input type="text" placeholder="Province" className="border p-3 rounded w-full" />
          </div>
          <input type="text" placeholder="ZIP Code" className="border p-3 rounded w-full" />
          <input type="tel" placeholder="Phone" className="border p-3 rounded w-full" />
          <input type="email" placeholder="Email Address" className="border p-3 rounded w-full" />
          <textarea placeholder="Additional Information" className="border p-3 rounded w-full" rows={4} />
        </form>
      </div>
    );
  }
  
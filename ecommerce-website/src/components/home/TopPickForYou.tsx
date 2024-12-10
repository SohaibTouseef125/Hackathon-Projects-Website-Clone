import { topPick } from "@/app/data";
import Image from "next/image";

const TopPickForYou = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Top Picks For You</h2>
        <p className="text-gray-600 mb-8">
          Find a bright idea to suit your taste...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Add product cards here */}
          {topPick.map((item) => (
            <>
              <div key={item.id} className="border p-4 text-center">
                <Image
                  width={900}
                  height={192}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="text-gray-600">Rs. {item.price}</p>
              </div>
            </>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 rounded-md underline">
          View More
        </button>
      </div>
    </section>
  );
};

export default TopPickForYou;

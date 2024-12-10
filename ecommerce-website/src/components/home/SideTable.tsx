// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import Image2 from "./../../../public/assest/Image2.png";
import Image3 from "./../../../public/assest/Image3.png";





const SideTable = () => {
  return (
    <section className="py-16 bg-customSideTable">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Image src={Image2} alt="Side Table" />
          <h2 className="text-xl font-bold mt-4">Side Table</h2>
          <Link href="#" className="">View More</Link>
        </div>
        <div className="text-center">
          <Image src={Image3} alt="Side Table 2" />
          <h2 className="text-xl font-bold mt-4">Side Table</h2>
          <Link href="#" className="">View More</Link>
        </div>
      </div>
    </section>
  );
};

export default SideTable;

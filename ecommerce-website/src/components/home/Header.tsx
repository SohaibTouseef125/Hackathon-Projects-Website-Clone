import { navItems } from "@/app/data";
import Link from "next/link";
import { IoIosContact } from "react-icons/io";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <nav className="bg-customHeader shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className=" md:flex items-center justify-center space-x-10 mx-auto ">
          {navItems.map((items, i) => (
            <>
              <Link href={items.link}>
                <li key={i}>{items.name} </li>
              </Link>
            </>
          ))}
        </ul>
       
        <div className=" md:flex items-center justify-center gap-10 items-center ">
        <Link href={"/account"}>
            
            <IoIosContact
              size={24}
              className="hover:text-gray-700 cursor-pointer"
            />
          </Link>
          <CiSearch size={24} className="hover:text-gray-700 cursor-pointer" />
          <CiHeart size={24} className="hover:text-gray-700 cursor-pointer" />
          <Link href="/cart">
           <CiShoppingCart
            size={24}
            className="hover:text-gray-700 cursor-pointer"
          />
       </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

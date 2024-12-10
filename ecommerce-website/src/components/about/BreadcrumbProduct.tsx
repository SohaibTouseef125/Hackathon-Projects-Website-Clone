import Link from "next/link";

const Breadcrumb = () => {
  return (
    <div className="bg-gray-100 py-4 px-6">
      <p className="text-sm">
        <Link href="/">Home</Link> &gt;{" "}
        <Link href="/shop">Shop</Link> &gt; Asgaard Sofa
      </p>
    </div>
  );
};

export default Breadcrumb;

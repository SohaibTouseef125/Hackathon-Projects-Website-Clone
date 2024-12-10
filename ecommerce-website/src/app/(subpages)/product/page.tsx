import AdditionalInfo from "@/components/products/AdditionalInfo"
import Breadcrumb from "@/components/products/BreadcrumbProduct"
import GalleryProduct from "@/components/products/GalleryProducts"
import ProductInfo from "@/components/products/ProductInfo"
import RelatedProducts from "@/components/products/RelatedProducts"


const ProductPage = () => {
  return (
    <>
      
      <Breadcrumb />
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <GalleryProduct />
        <ProductInfo />
      </div>
      <AdditionalInfo />
      <div className="container mx-auto">
        <RelatedProducts />
      </div>
      
    </>
  );
};

export default ProductPage;
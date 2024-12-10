import AdditionalInfo from "@/components/about/AdditionalInfo"
import GalleryProduct from "@/components/about/GalleryProducts"
import ProductInfo from "@/components/about/ProductInfo"
import RelatedProducts from "@/components/about/RelatedProducts"
import Breadcrumb from "@/components/products/BreadcrumbProduct"

const About = () => {
  return (
    <>
   
      <Breadcrumb/>
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <GalleryProduct />
        <ProductInfo />
      </div>
      <AdditionalInfo/>
      <div className="container mx-auto">
        <RelatedProducts/>
      </div>
     
    </>
  )
}

export default About
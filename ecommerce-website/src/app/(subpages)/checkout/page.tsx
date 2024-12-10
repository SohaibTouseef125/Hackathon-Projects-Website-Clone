import BillingDetails from "@/components/checkout/BillingDetails "
import CheckOut from "@/components/checkout/CheckOut"
import OrderButton from "@/components/checkout/OrderButton"
import PaymentMethods from "@/components/checkout/PaymentMethods "
import ProductSummary from "@/components/checkout/ProductSummary"
import FeaturesShop from "@/components/shop/FeaturesShop"


const page = () => {
  return (
    <div>
      
      <CheckOut />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <BillingDetails />
        <div>
          <ProductSummary />
          <PaymentMethods />
          <OrderButton />
        </div>
      </div>
     
      <FeaturesShop/>
    </div>
  )
}

export default page
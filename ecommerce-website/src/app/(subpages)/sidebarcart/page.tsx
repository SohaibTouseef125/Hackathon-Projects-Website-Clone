"use client";
import CartSidebar from '@/components/sidebarcart/CartSidebar'
import ProductDetails from '@/components/sidebarcart/Product Details'
import RelatedProducts from '@/components/sidebarcart/RelatedProducts'
import Tabs from '@/components/sidebarcart/Tabs Section'
import React from 'react'

const SideBarCart = () => {
  return (
    <div>
    
    <main className="container mx-auto px-4 py-12">
      <ProductDetails />
      <Tabs />
      <RelatedProducts />
    </main>
    <CartSidebar />
   
  </div>
  )
}

export default SideBarCart
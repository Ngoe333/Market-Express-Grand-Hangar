// import Image from 'next/image'

import Header from "./components/header";
import Hero from "./components/hero";
import PopularVendors from "./components/PopularVendors";
import HomeMeun from '@/app/components/HomeMenu';
import Testimonials from '@/app/components/Testimonials';
import Footer from '@/app/components/footer';


export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <PopularVendors />

      <HomeMeun />


      <Testimonials />

      <Footer />




    </>

  )
}

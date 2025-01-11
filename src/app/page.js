import Image from "next/image";
import Header from "./components/header";
import RealtorSection from "./components/realtor";
import HouseListings from "./components/house_listing";
import RegisterSection from "./components/register";
import Footer from "./components/footor";

export default function Home() {
  return (
    <div> 
      <Header />
      <RealtorSection />
      <HouseListings />
      <RegisterSection />
      <Footer />
    </div>
  );
}

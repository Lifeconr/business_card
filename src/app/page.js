import Image from "next/image";
import Header from "./components/header";
import RealtorSection from "./components/realtor";
import HouseListings from "./components/house_listing";
import RegisterSection from "./components/register";
import AppointmentPage from "./components/appointment";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div> 
      <Header />
      <RealtorSection />
      <HouseListings />
      <RegisterSection />
      <AppointmentPage/>
      <Footer />
    </div>
  );
}

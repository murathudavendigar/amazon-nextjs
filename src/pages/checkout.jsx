import Header from "@/components/Header";
import Image from "next/image";

const Checkout = () => {
  return (
    <div className="bg-gray-50">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div>
          <Image
            src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
            width={1020}
            height={250}
          />
        </div>

        {/* Right */}
      </main>
    </div>
  );
};

export default Checkout;

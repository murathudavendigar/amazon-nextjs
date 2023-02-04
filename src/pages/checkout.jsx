import CheckoutProduct from "@/components/CheckoutProduct";
import Header from "@/components/Header";
import { selectTotal } from "@/slices/basketSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";

const Checkout = () => {
  const items = useSelector((state) => state.basket.items);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  const createCheckoutSession = () => {};

  return (
    <div className="bg-gray-50">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
            width={1020}
            height={250}
            className="object-contain"
            loading="lazy"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>
            {items.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold">$ {total.toFixed(2)}</span>
              </h2>
              <button
                role="link"
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
                onClick={createCheckoutSession}>
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;

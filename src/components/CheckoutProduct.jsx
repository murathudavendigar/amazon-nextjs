import { addToBasket, removeFromBasket } from "@/slices/basketSlice";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };

    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        height={200}
        width={200}
        style={{ objectFit: "contain" }}
        alt={title}
      />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <div className="mb-5">
          <p>$ {price}</p>
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              loading="lazy"
              src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
              alt="prime"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove form Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;

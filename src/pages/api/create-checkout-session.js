//! Here is the backend !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  //! We transformed the data we had into what Stripe wanted.
  const transformedItems = items.map((item) => ({
    quantity: 1,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image], //* stripe wants array for image
        description: item.description,
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_options: [
      {
        shipping_rate: "shr_1MYHTvEEEnWsdWVejWw5rCwr",
      },
    ],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA", "TR"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email, //* This email will connection with firebase
      images: JSON.stringify(items.map((item) => item.image)), //* We created a array of pictures
    },
  });

  res.status(200).json({ id: session.id });
};

# Project : Amazon Clone App

Fully responsive Amazon Clone Application made using Next.js. It is a web application where a real payment system is created using Stripe checkout, the relevant orders are registered to the firestore database using webhooks, and Redux is used as global state management.

## Table of contents

- [Project : Amazon Clone App](#project--amazon-clone-app)
  - [Table of contents](#table-of-contents)
  - [The challenge](#the-challenge)
  - [Project Skeleton](#project-skeleton)
  - [Screenshot](#screenshot)
  - [Links](#links)
    - [Built with](#built-with)
    - [Useful resources](#useful-resources)
  - [Installation](#installation)
  - [Author](#author)
  - [Contact](#contact)
  - [How to use](#how-to-use)

## The challenge

To create an clone site with ReactJS, NextJS, Redux, Webhooks, Stripe Checkout, NextAuth, Firestore and TailwindCSS

## Project Skeleton

```


|----README.md
├── lib
│       └── index.js
├── public
│       ├── favicon.ico
│       └── vercel.svg
├── src
│       ├── app
│       │       └── store.js
│       ├── components
│       │       ├── Banner.jsx
│       │       ├── CheckoutProduct.jsx
│       │       ├── Header.tsx
│       │       ├── Order.jsx
│       │       ├── Product.jsx
│       │       └── ProductFeed.jsx
│       ├── pages
│       │       ├── api
│       |       |     ├── auth
│       |       |     |      └── [...nextauth].js
│       |       |     ├── create-checkout-session.js
│       |       |     └── webhooks.js
│       │       ├── _app.js
│       │       ├── checkout.jsx
│       │       ├── index.js
│       │       ├── orders.jsx
│       │       └── success.jsx
│       ├── slices
│       │       └──  basketSlice.ts
│       └── styles
│               └── global.css
├── next.config.js
├── .env
├── jsconfig.json
├── package-lock.json
├── package.json
├── permission.json
├── postcss.config.js
└── tailwind.config.js
```

## Screenshot

<p align="center">
<a href="https://amazon-nextjs-hazel.vercel.app/"><img src="" alt="screenshot"></a>
</p>

## Links

<hr>
<b>Check The Live Website ➡️</b> <a href="https://amazon-nextjs-hazel.vercel.app/">Live Website</a>
<hr>

### Built with

- Next.js
- React Components, Props, States and Hooks
- Redux
- Webhooks
- Stripe Checkout
- API GET requests
- JSX Elements
- TailwindCSS
- NextAuth
- Firestore Database

### Useful resources

- [W3 Schools](https://www.w3schools.com/)
- [MDN](https://developer.mozilla.org/en-US/)
- [Firebase](https://firebase.google.com/)
- [Stripe](https://stripe.com/)
- [TailwindCSS](https://tailwindcss.com/)

## Installation

Use the Npm package manager install command.

```bash
npm install
```

---

## Author

- Author - [Murat Hüdavendigâr]

## Contact

<p align="center">
<a href="https://codepen.io/m_hudavendigar" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="m_hudavendigar" height="30" width="40" /></a>
<a href="https://twitter.com/murathoncu" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="murathoncu" height="30" width="40" /></a>
<a href="https://www.linkedin.com/in/murathudavendigaroncu/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="murat-hüdavendigâr-öncü-232749246" height="30" width="40" /></a>
<a href="https://instagram.com/m_hdavendigr" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="m_hdavendigr" height="30" width="40" /></a>
  <a href="https://medium.com/@murathoncu" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="@murathoncu" height="30" width="40" /></a>
</p>

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

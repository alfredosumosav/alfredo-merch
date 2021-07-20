import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';
import initialState from '../initialState';

const Home = () => (
  <>
    <Helmet>
      <title>Alfredo Merch - Products</title>
      <meta name="twitter:card" content="Alfredo Merch" />
      <meta name="twitter:site" content="@alfredosumosa" />
      <meta name="twitter:creator" content="@alfredosumosa" />
      <meta name="twitter:title" content="Alfredo Merch" />
      <meta name="twitter:description" content="Buy merch from Alfredo" />
      <meta
        name="twitter:image"
        content="https://alfredosumosa.s3.us-west-1.amazonaws.com/alfredosumosav2.jpg"
      />
      <meta property="og:title" content="Alfredo Merch" />
      <meta property="og:description" content="Buy merch from Alfredo" />
      <meta
        property="og:image"
        content="https://alfredosumosa.s3.us-west-1.amazonaws.com/alfredosumosav2.jpg"
      />
      <meta property="og:url" content="alfredomerch.xyz" />
      <meta property="og:site_name" content="Alfredo Merch" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      {/* <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
    </Helmet>
    <Products products={initialState.products} />
  </>
);

export default Home;

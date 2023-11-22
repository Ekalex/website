import React from 'react';
import Script from 'next/script';

const Contact = () => {
  return (
<section>  
  <div className='m-20 p-8 border border-primary rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500'> 
      <div data-tf-live="01HFTG5XED12THWW9771CNS8XH"></div>
      <Script src="//embed.typeform.com/next/embed.js" strategy="lazyOnload"/>
    </div>

    <div className='m-20 p-8 border border-primary rounded-lg shadow-lg bg-Gray-100 hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition duration-500'>
    <div className="container">
      <h2 className="text-3xl font-bold mb-3">Looking for the Perfect Gift?</h2>
      <p className="mb-4">Our gift cards let your loved ones choose exactly what they want. Ideal for any occasion!</p>
      <a href="https://squareup.com/gift/MLSQND4VMTYVV/order" className="bg-primary text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-Gray hover:shadow-md transform hover:-translate-y-1">
        Get A Gift Card Here!
      </a>
    </div>
</div>

</section>  


  );
};

export default Contact;

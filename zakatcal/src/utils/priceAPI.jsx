// import React, { useState, useEffect } from "react";

// const PriceAPI = () => {
//   const [goldPriceOunce, setGoldPriceOunce] = useState(null);
//   const [silverPriceOunce, setSilverPriceOunce] = useState(null);
//   // const API_KEY = "43fd3cef6d20489ead8b7761066693c7";
//   const API_KEY = "43bf5183bcb78caefc3c45d2bf9406c2";

//   const METAL_API_URL = `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=USD&currencies=XAU,XAG`;

//   useEffect(() => {
//     const fetchMetalPrices = async () => {
//       try {
//         const response = await fetch(METAL_API_URL);
//         const data = await response.json();
//         const { XAU, XAG } = data.rates;
//         setGoldPriceOunce(XAU);
//         setSilverPriceOunce(XAG);
//       } catch (error) {
//         console.error("Error fetching metal prices:", error);
//       }
//     };

//     fetchMetalPrices();
//   }, [METAL_API_URL]);

//   // Calculate reciprocal values
//   const goldReciprocal = 1 / goldPriceOunce;
//   const silverReciprocal = 1 / silverPriceOunce;

//   return (
//     <div className="bg-gray-100 p-2 rounded-lg shadow-md mt-2">
//       <h1 className="text-xl mb-4">
//         $ Gold Price ~{goldReciprocal.toFixed(3)} per ounce USD
//       </h1>
//       <h1 className="text-xl">
//         $ Silver Price ~{silverReciprocal.toFixed(3)} per ounce USD
//       </h1>
//     </div>
//   );
// };

// export default PriceAPI;

import React, { useState, useEffect } from "react";

const PriceAPI = () => {
  const [goldPriceOunce, setGoldPriceOunce] = useState(null);
  const [silverPriceOunce, setSilverPriceOunce] = useState(null);
  const API_KEY = "43bf5183bcb78caefc3c45d2bf9406c2";
  const METAL_API_URL = `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=USD&currencies=XAU,XAG`;

  useEffect(() => {
    const fetchMetalPrices = async () => {
      try {
        const response = await fetch(METAL_API_URL);
        const data = await response.json();
        const { XAU, XAG } = data.rates;
        setGoldPriceOunce(XAU);
        setSilverPriceOunce(XAG);
      } catch (error) {
        console.error("Error fetching metal prices:", error);
      }
    };

    fetchMetalPrices();
  }, [METAL_API_URL]);

  // Calculate reciprocal values
  const goldReciprocal = 1 / goldPriceOunce;
  const silverReciprocal = 1 / silverPriceOunce;

  return (
    <div className="bg-gray-100 p-2 rounded-lg shadow-md mt-2">
      <h1 className="text-xl mb-4 md:text-2xl">
        $ Gold Price ~{goldReciprocal.toFixed(3)} per ounce USD
      </h1>
      <h1 className="text-xl md:text-2xl">
        $ Silver Price ~{silverReciprocal.toFixed(3)} per ounce USD
      </h1>
    </div>
  );
};

export default PriceAPI;

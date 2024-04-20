import React from "react";

const InfoOfNisab = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        How to Calculate Nisab and Zakat
      </h2>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Nisab Calculation:</h3>
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            <strong>Understand Nisab:</strong> Nisab is the minimum amount of
            wealth that one must possess before they are obligated to pay Zakat.
            It is typically calculated based on the value of gold or silver.
          </li>
          <li className="mb-2">
            <strong>Determine the Value:</strong> Check the current market value
            of gold or silver in your chosen currency. This value may vary
            depending on the purity of the metal and the current market rates.
          </li>
          <li className="mb-2">
            <strong>Calculate Nisab:</strong> Multiply the weight of gold or
            silver that corresponds to the Nisab by the current market value of
            gold or silver. This will give you the Nisab threshold value in your
            chosen currency.
          </li>
          <li>
            <strong>Set Nisab Value:</strong> Set this calculated value as the
            Nisab value in your Zakat calculator or application. Users will need
            to input this value to calculate their Zakat eligibility.
          </li>
        </ol>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Zakat Calculation:</h3>
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            <strong>Gather Wealth Information:</strong> Collect information
            about all your assets, including gold, silver, cash, savings,
            investments, and any other valuable assets you possess.
          </li>
          <li className="mb-2">
            <strong>Calculate Total Wealth:</strong> Add up the value of all
            these assets to get your total wealth.
          </li>
          <li className="mb-2">
            <strong>Check Eligibility:</strong> Compare your total wealth with
            the Nisab value. If your total wealth is equal to or greater than
            the Nisab threshold, you are eligible to pay Zakat.
          </li>
          <li className="mb-2">
            <strong>Calculate Zakat Amount:</strong> If eligible, calculate
            Zakat as 2.5% (or 1/40) of your total wealth. This is the amount you
            are required to pay as Zakat.
          </li>
          <li>
            <strong>Pay Zakat:</strong> Once you have calculated your Zakat
            amount, pay it to the appropriate beneficiaries according to Islamic
            guidelines. This typically includes the poor, needy, and other
            deserving individuals or causes.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default InfoOfNisab;

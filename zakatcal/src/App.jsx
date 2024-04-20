import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import InputField from "./components/InputField.jsx";
import currencies from "./utils/CurrencyOptions.js";
import logo from "./assets/png-transparent-the-zakat-foundation-five-pillars-of-islam-muslim-islam-trademark-logo-mosque-removebg-preview.png";
import InfoOfNisab from "./utils/infoOfNisab.jsx";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import PriceAPI from "./utils/priceAPI.jsx";

function App() {
  const initialState = {
    selectedCurrency: "dollar",
    gold: 0,
    cash: 0,
    futurePurpose: 0,
    otherAssets: 0,
    zakatAmount: 0,
    totalWealth: 0,
    nisabValue: 0,
    showInfoOfNisab: false,
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const calculateZakat = () => {
    // Convert nisab value to a floating-point number
    const nisab = parseFloat(state.nisabValue);

    // Check if the nisab value is zero or not provided
    if (nisab === 0 || isNaN(nisab)) {
      enqueueSnackbar("Please enter the Nisab value.", { variant: "error" });
      return;
    }

    // Check if any of the input fields have a value of zero
    if (
      state.nisabValue === 0 &&
      state.gold === 0 &&
      state.cash === 0 &&
      state.futurePurpose === 0 &&
      state.otherAssets === 0
    ) {
      enqueueSnackbar("Please enter a value for all input fields.", {
        variant: "error",
      });
      return;
    }

    // Calculate the total wealth
    const total =
      parseFloat(state.gold) +
      parseFloat(state.cash) +
      parseFloat(state.futurePurpose) +
      parseFloat(state.otherAssets);

    // Check if the total wealth is greater than or equal to the nisab value
    if (total >= nisab) {
      // If eligible, calculate Zakat
      const zakat = total * 0.025; // Zakat is 2.5% of total wealth
      setState((prevState) => ({
        ...prevState,
        totalWealth: total,
        zakatAmount: zakat,
      }));
    } else {
      // If not eligible, display a message
      setState((prevState) => ({
        ...prevState,
        totalWealth: total,
        zakatAmount: 0,
      }));
      enqueueSnackbar("You are not eligible to pay Zakat.", {
        variant: "warning",
      });
    }
  };

  const handleClearFields = () => {
    setState(initialState);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-black ">
      <div className="max-w-md w-full space-y-8 p-2">
        <div className="mt-2">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 -mb-4 ">
            <img
              src={logo}
              alt="zakatlogo"
              className="mx-auto animate-bounce h-32 w-auto"
              style={{
                maxWidth: "80%",
                maxHeight: "200px",
                margin: "auto",
                padding: "20px",
              }}
            />
            Zakat Calculator
            <PriceAPI />
          </h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md bg-white">
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-xl"
              htmlFor="currency"
            >
              Select Currency
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="selectedCurrency"
              value={state.selectedCurrency}
              onChange={handleChange}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <InputField
            label={`Nisab Value (${state.selectedCurrency})`}
            placeholder={`Enter the Nisab value in ${state.selectedCurrency}`}
            value={state.nisabValue}
            onChange={handleChange}
            name="nisabValue"
          />
          <InputField
            label={`Value of Gold/Silver(in ${state.selectedCurrency})`}
            placeholder={`Enter the value of gold in ${state.selectedCurrency}`}
            value={state.gold}
            onChange={handleChange}
            name="gold"
          />
          <InputField
            label={`Cash in Hand & in Bank Accounts (${state.selectedCurrency})`}
            placeholder={`Enter the amount of cash in ${state.selectedCurrency}`}
            value={state.cash}
            onChange={handleChange}
            name="cash"
          />
          <InputField
            label={`Cash deposited for some future purpose, e.g. Hajj (${state.selectedCurrency})`}
            placeholder={`Enter the amount of cash for future purpose in ${state.selectedCurrency}`}
            value={state.futurePurpose}
            onChange={handleChange}
            name="futurePurpose"
          />
          <InputField
            label={`Other Assets (${state.selectedCurrency})`}
            placeholder={`Enter the value of other assets in ${state.selectedCurrency}`}
            value={state.otherAssets}
            onChange={handleChange}
            name="otherAssets"
          />
          <div className="flex flex-col md:flex-row mt-3 justify-center">
            <button
              // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline w-full md:w-auto mt-4 md:mt-0 md:mr-2 transition duration-300 ease-in-out transform hover:scale-105"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4 transition duration-300 ease-in-out transform hover:scale-105"
              type="button"
              onClick={calculateZakat}
            >
              Calculate Zakat
            </button>
            <button
              // className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto mt-4 md:mt-0 transition duration-300 ease-in-out transform hover:scale-105 "
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4 transition duration-300 ease-in-out transform hover:scale-105 ml-1"
              type="button"
              onClick={handleClearFields}
            >
              Clear Fields
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-700 font-bold">
              Your Total Wealth is displayed below:
            </p>
            <p className="text-gray-700">{state.totalWealth.toFixed(2)}</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-700 font-bold ">
              Your Zakat Amount is calculated based on your total wealth
            </p>
            <p className="text-gray-700">{state.zakatAmount.toFixed(2)}</p>
            <button
              onClick={() =>
                setState((prevState) => ({
                  ...prevState,
                  showInfoOfNisab: !prevState.showInfoOfNisab,
                }))
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4 transition duration-300 ease-in-out transform hover:scale-105 mb-4"
            >
              Know How calculate Nisab and Zakat
            </button>
          </div>
          {state.showInfoOfNisab && <InfoOfNisab />}{" "}
          {/* Render InfoOfNisab component based on state */}
        </div>
      </div>
    </div>
  );
}

export default App;

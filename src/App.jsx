import { useState } from "react";
import "./App.css";
import UseCurrency from "./Hooks/useCurrency";
import { InputBox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");

  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = UseCurrency(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#FFCED8] px-4 py-8 font-[Poppins]">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="wrapper relative flex items-center flex-col justify-center bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-white/40">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-gray-800">
                Currency Converter
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                Check live foreign exchange rates
              </p>
            </div>

            <div className="w-full mb-3">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setAmount(amount);
                }}
                selectCurrency={from}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
              />
            </div>

            <div className="relative z-10 my-[-18px]">
              <button
                type="button"
                className="bg-[#4D8DBA] text-white p-3.5 rounded-full shadow-lg hover:bg-[#FFD38B] hover:text-black hover:rotate-180 transition-all duration-300 hover:cursor-pointer flex items-center justify-center border-4 border-white"
                title="Swap Currencies"
                onClick={swap}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </button>
            </div>

            <div className="w-full mt-3">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>

            <button
              type="submit"
              onClick={() => {
                convert();
              }}
              className="bg-[#4F7D32] hover:bg-[#3e6327] transition-colors py-4 rounded-xl text-white font-semibold w-full mt-6 shadow-md hover:cursor-pointer tracking-wide"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;

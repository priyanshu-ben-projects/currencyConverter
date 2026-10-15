import "./App.css";
import InputBox from "../components/Input";
function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#FFCED8] px-4 py-8 font-[Poppins]">
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
              currencyOption={["USD", "EUR", "INR", "GBP", "AUD"]}
            />
          </div>

          <div className="relative z-10 my-[-18px]">
            <button
              type="button"
              className="bg-[#4D8DBA] text-white p-3.5 rounded-full shadow-lg hover:bg-[#FFD38B] hover:text-black hover:rotate-180 transition-all duration-300 hover:cursor-pointer flex items-center justify-center border-4 border-white"
              title="Swap Currencies"
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
              currencyOption={["USD", "EUR", "INR", "GBP", "AUD"]}
            />
          </div>

          <button
            type="button"
            className="bg-[#4F7D32] hover:bg-[#3e6327] transition-colors py-4 rounded-xl text-white font-semibold w-full mt-6 shadow-md hover:cursor-pointer tracking-wide"
          >
            CONVERT
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

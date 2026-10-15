import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  onCurrencyChange,
  currencyDisable = false,
  className = "",
}) {
  const id = useId();

  return (
    <>
      <div className="relative rounded-2xl flex flex-col justify-between font-[Poppins] bg-[#F9FAFB] border border-gray-200 w-full p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between w-full mb-3">
          <h3 className="text-sm font-semibold text-gray-600">{label}</h3>

          <div className="flex flex-col gap-1">
            <label
              htmlFor={`currency-select-${id}`}
              className="text-xs text-gray-400"
            >
              Select Currency Wow!
            </label>
            <select
              id={`currency-select-${label}`}
              name="currencyOption"
              value={selectCurrency}
              onChange={(e) =>
                onCurrencyChange && onCurrencyChange(e.target.value)
              }
              disabled={currencyDisable}
              className="px-3 py-1.5 bg-[#FFF4DE] text-gray-700 text-xs font-medium rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-[#4D8DBA] cursor-pointer"
            >
              {currencyOptions.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full">
          <input
            id={`${id}-amount`}
            type="number"
            className="currentInput w-full px-3.5 py-3 bg-white border border-gray-300 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4D8DBA] focus:border-transparent transition-all"
            placeholder="0.00"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => {
              onAmountChange && onAmountChange(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default InputBox;

# Currency Converter

A responsive currency converter built with React and Tailwind CSS. This project fetches exchange-rate data from a public currency API and allows users to convert between supported currencies.

## Features

- **Currency conversion:** Convert an amount from one selected currency to another.
- **Dynamic currency options:** Populate currency selectors from fetched exchange-rate data.
- **Currency swapping:** Switch the source and target currencies.
- **Reusable components:** Use a reusable `InputBox` component for currency selection and amount display.
- **Custom React hook:** Keep API-fetching logic separate from the UI using `useCurrency`.
- **Responsive UI:** A clean interface styled with Tailwind CSS.

## Tech Stack

- React
- JavaScript (ES6+)
- Tailwind CSS
- Fetch API
- React Hooks: `useState`, `useEffect`, and `useId`
- [Fawaz Ahmed's Currency API](https://github.com/fawazahmed0/exchange-api)

## API Endpoints

**Available currencies**

`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`

**Exchange rates for a selected currency**

`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json`

Replace `{currency}` with a supported lowercase currency code, such as `inr` or `usd`.

## How It Works

1. The application initializes the selected currencies and amount using React state.
2. The `useCurrency` custom hook fetches exchange rates for the selected source currency.
3. The application extracts available currency codes and displays them in the selectors.
4. The reusable `InputBox` component receives its values and event handlers through props.
5. When the user clicks **Convert**, the application multiplies the entered amount by the exchange rate for the target currency.
6. The **Swap** button exchanges the selected currencies and displayed amounts.

### Conversion Formula

`Converted Amount = Input Amount × Exchange Rate`

The exchange rate is relative to the selected source currency.

## Project Structure

```text
src/
├── components/
│   ├── InputBox.jsx
│   └── index.js
├── Hooks/
│   └── useCurrency.js
├── App.js
├── App.css
└── main.jsx
```

*Adjust the structure above if your actual filenames or folders differ.*

## Getting Started

### Prerequisites

- Node.js and npm installed
- Basic knowledge of React

### Installation

1. Clone this repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd <your-project-folder>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server (for a typical Vite setup):

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## What I Learned

- Managing component state with `useState`.
- Fetching API data with `useEffect` and the Fetch API.
- Creating and using custom React hooks.
- Passing props and callback functions between components.
- Building reusable, controlled form inputs.
- Rendering dynamic options from API responses.
- Implementing currency conversion and swap functionality.
- Debugging incorrect API endpoints and inspecting network responses.
- Connecting labels and form controls using accessible IDs.

## Learning Resources

This project was built while learning React through **[Chai aur Code](https://www.youtube.com/@chaiaurcode)** on YouTube.

Special thanks to Hitesh Choudhary and the Chai aur Code community for their educational content and guidance.

## Future Improvements

- Add loading indicators while fetching exchange rates.
- Add user-friendly error handling for failed API requests.
- Validate amounts and handle empty input gracefully.
- Improve conversion behavior when switching currencies.
- Add automated tests for conversion and swapping logic.

## Author

Built as a hands-on React learning project to practice API integration, reusable components, and React Hooks.
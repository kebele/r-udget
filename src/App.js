/* 
THANKS TO CODE AND CREATE
https://www.youtube.com/watch?v=fqup-BL3VjI&list=PLpOejIRxf6_ejmtmkdNX0EvZS89TW0TDC&index=3
calısan
https://r-budget.vercel.app/
*/

import React from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import { GlobalContextProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;

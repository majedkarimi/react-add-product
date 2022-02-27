import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expense/Expense";
const App = function () {
  const expense = [
    { title: "Macbook Air Pro", amount: "23,000 $", date: new Date() },
    { title: "Tesla NP900 ", amount: "49,000 $", date: new Date() },
    { title: "Asus zenbook UI 14", amount: "10,000 $", date: new Date() },
  ];

  return (
    <div>
      <NewExpense />
      <Expense items={expense} />
    </div>
  );
};
export default App;

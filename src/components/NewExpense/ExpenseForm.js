import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = function () {
  const [dataTitle, setTitle] = useState("");
  const [dataAmount, setAmount] = useState("");
  const [dataDate, setDate] = useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const getDataExpense = (e) => {
    e.preventDefault();
    const expenseData = {
      title: dataTitle,
      amount: dataAmount,
      date: dataDate,
    };
    console.log(expenseData);
    setAmount("");
    setDate("");
    setTitle("");
  };
  return (
    <form onSubmit={getDataExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={dataTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={dataAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={dataDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

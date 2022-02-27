const ExpenseDate = function (props) {
  const year = props.date.getFullYear();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(props.date);
  const day = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(props.date);
  return (
    <div className="expense-date">
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
      <div className="expense-date-day">{day}</div>
    </div>
  );
};
export default ExpenseDate;

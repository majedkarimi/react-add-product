import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = function (props) {

  const [title, setTitle] = useState(props.title);
  const clickHandler = function () {
    console.log("Uodating...");
    setTitle("Updating...");
  };
  return (
    <Card className="expense-items">
      <ExpenseDate date={props.date} />
      <div className="espense-detail">
        <h2 className="expense-detail-title">{title}</h2>
        <div className="expense-detail-amount"> {props.amount}</div>
        <button onClick={clickHandler}>chane the txt</button>
      </div>
    </Card>
  );
};
export default ExpenseItem;

// console.log(title); // چون ولو قبل وجود دارد و حذف نمیشود  موقعی ک تابع بالا کال میکنیم دیتا ی جدید از تایتل ما عبور میکند

// برای اد کردن ایونت و تغییر دادن یک ولو در دام خود نیاز به این داریم
// با استفاده از دیاستارکپرینگ میتوانیم دیتا یان را جدا کنیم
// مقدار اول ولو اولیه می باشد
// مقدار دوم یک تابه هست برای تغییرولو ان

// چرا باید از استست  استفاده کنیم ؟
// این را باید بدانیم ک هر کامپوننت در ری اکت ینی فانکشن
// و تابع ها باید صدا زده شوند و با از طریق اد کردن ان در کامپوننت های دیگر ان را صدا میزنیم
// خب تابه ها یه بار اجرا میشن و دیگه از بین میرن و تمام
// برای اینکه بتوانییم ان را تغییر دهیم از استیت استفاده میکنیم
// خب استیت یه بار دیگر میاید تابع را صدا میزند اما اندفه مقداری را در خود عبود میدهد که ما تایین کردیم

import { dateTimeGenerator } from "./date-time.js";

//Display current date and time

export const displayDateTime = () => {
  console.log("i am in display");
  let dateTimeElement = document.getElementById("right__menu--date");

  dateTimeElement.innerText = dateTimeGenerator();
};

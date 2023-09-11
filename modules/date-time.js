export const dateTimeGenerator = () => {
  // Adding current date and time dynamically
  let todaysDate = new Date();
  //console.log(todaysDate);
  let day = todaysDate.toLocaleString("en-us", { weekday: "short" });
  let date = todaysDate.getDate();
  let month = todaysDate.toLocaleString("default", { month: "short" });

  let time = todaysDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  console.log(time[(0, 5)]);
  console.log(`${day} ${date} ${month} ${time}`);

  return `${day} ${date} ${month} ${time}`;
};

//A function that toggles 'show' class when a button is pressed

let buttonClass = "";
let newButtonClass = "";

const subMenuHandler = (e) => {
  console.log("i am in menu handler");
  console.log({ buttonClass });
  //console.log(e.currentTarget.id);

  //new buttonClass representing the current target button
  newbuttonClass = e.currentTarget.id;
  console.log({ newbuttonClass });

  if (!buttonClass) {
    subMenuToggler(newbuttonClass);
    buttonClass = newbuttonClass;
  } else {
    if (buttonClass === newbuttonClass) {
      subMenuToggler(buttonClass);
    } else {
      console.log("different IDs");
      removeClassShow(buttonClass);
      //subMenuToggler(buttonClass);
      subMenuToggler(newbuttonClass);
      buttonClass = newbuttonClass;
    }
  }
  counter++;
  console.log({ counter });
};

const removeClassShow = (buttonClass) => {
  console.log("removing show class");
  console.log({ buttonClass });
  let apps = ["chrome", "terminal", "calculator"];

  //We dont want this code to run if user has previously closed an app as the app is already closed
  if (apps.includes(buttonClass)) return;

  const dropdownClass = "left__menu__dropdown__" + buttonClass;

  const dropdownElement = document.getElementsByClassName(dropdownClass);
  console.log([...dropdownElement]);

  if ([...dropdownElement[0].classList].includes("show")) {
    dropdownElement[0].classList.remove("show");
  }
  buttonClass = "";
};

const subMenuToggler = (newButtonClass) => {
  //console.log("i am in toggler");
  //console.log(`i receieved class ${newButtonClass}`);

  const dropdownElement = document.getElementsByClassName(newButtonClass);
  //console.log(dropdownElement[0]);

  dropdownElement[0].classList.toggle("show");
  buttonClass = newButtonClass;
};

const subSubMenuToggler = (newButtonClass) => {
  //console.log("i am in toggler");
  //console.log(`i receieved class ${newButtonClass}`);

  const dropdownElement = document.getElementsByClassName(newButtonClass);
  //console.log(dropdownElement[0]);

  dropdownElement[0].classList.toggle("show");
};

const subSubMenuHandler = (e) => {
  let buttonClass = e.currentTarget.id;

  subSubMenuToggler(buttonClass);
};

// const appleMenu = document.getElementById("apple");
// const finderMenu = document.getElementById("finder");
// const fileMenu = document.getElementById("file");
const recentItemsMenu = document.getElementById("recentItems");
const recentItemsSubmenu = document.getElementById("recentItemsSubmenu");

//****** Event handlers for menu *******

window.addEventListener("click", (e) => {
  const buttonClassArr = [
    "apple",
    "finder",
    "file",
    "edit",
    "view",
    "go",
    "help",
    "chrome",
    "terminal",
    "calculator",
  ];
  console.log("you clicked in window");
  newButtonClass = e.target.id;
  console.log({ buttonClass });
  console.log({ newButtonClass });

  if (buttonClass && buttonClass != newButtonClass) {
    console.log("Going to remove class");
    removeClassShow(buttonClass);
  }

  if (buttonClassArr.includes(newButtonClass)) {
    console.log(
      `Going to toggler coz newButtonClass= ${newButtonClass} and buttonClass = ${buttonClass}`
    );
    subMenuToggler(newButtonClass);
  }
  console.log("****The End****");
});

recentItemsMenu.addEventListener("mouseover", subSubMenuHandler);
recentItemsMenu.addEventListener("mouseout", subSubMenuHandler);

// Adding current date and time dynamically
let todaysDate = new Date();
//console.log(todaysDate);
let day = todaysDate.toLocaleString("en-us", { weekday: "short" });
let date = todaysDate.getDate();
let month = todaysDate.toLocaleString("default", { month: "short" });

let time = todaysDate.toLocaleTimeString().slice(0, -3);

console.log(`${day} ${date} ${month} ${time}`);

let dateTimeElement = document.getElementById("right__menu--date");

dateTimeElement.innerText = `${day} ${date} ${month} ${time}`;

//************* Modals ***************/

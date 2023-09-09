//A function that toggles 'show' class when a button is pressed

let menuId = "";
let newMenuId = "";
let counter = 0;

const subMenuHandler = (e) => {
  console.log("i am in menu handler");
  console.log({ menuId });
  //console.log(e.currentTarget.id);

  //new menuId representing the current target button
  newMenuId = e.currentTarget.id;
  console.log({ newMenuId });

  if (!menuId) {
    subMenuToggler(newMenuId);
    menuId = newMenuId;
  } else {
    if (menuId === newMenuId) {
      subMenuToggler(menuId);
    } else {
      console.log("different IDs");
      removeClassShow(menuId);
      //subMenuToggler(menuId);
      subMenuToggler(newMenuId);
      menuId = newMenuId;
    }
  }
  counter++;
  console.log({ counter });
};

const removeClassShow = (menuId) => {
  const dropdownClass = "left__menu__dropdown__" + menuId;

  const dropdownElement = document.getElementsByClassName(dropdownClass);
  console.log("classlist-----");

  if ([...dropdownElement[0].classList].includes("show")) {
    dropdownElement[0].classList.remove("show");
  }
};

const subMenuToggler = (menuId) => {
  console.log("i am in toggler");
  console.log(`i receieved id ${menuId}`);
  const dropdownClass = "left__menu__dropdown__" + menuId;

  const dropdownElement = document.getElementsByClassName(dropdownClass);
  console.log({ dropdownClass });
  console.log(dropdownElement[0]);

  dropdownElement[0].classList.toggle("show");
};

const subSubMenuHandler = (e) => {
  let menuId = e.currentTarget.id;
  console.log({ menuId });
  subMenuToggler(menuId);
};

const appleMenu = document.getElementById("apple");
const finderMenu = document.getElementById("finder");
const fileMenu = document.getElementById("file");
const recentItemsMenu = document.getElementById("recentItems");

//****** Event handlers for menu *******
// window.addEventListener("click", () => {
//   console.log("you clicked in window");
//   if (counter > 1 && newMenuId) {
//     console.log({ newMenuId });
//     console.log({ menuId });
//     subMenuToggler(newMenuId);
//     counter--;
//   }
// });
appleMenu.addEventListener("click", subMenuHandler);
finderMenu.addEventListener("click", subMenuHandler);
fileMenu.addEventListener("click", subMenuHandler);
recentItemsMenu.addEventListener("mouseover", subSubMenuHandler);
recentItemsMenu.addEventListener("mouseout", subSubMenuHandler);

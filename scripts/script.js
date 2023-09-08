//A function that toggles 'show' class when a button is pressed

let menuId = "";

const subMenuHandler = (e) => {
  console.log("i am in menu handler");
  console.log({ menuId });
  //console.log(e.currentTarget.id);

  //new menuId representing the current target button
  let newMenuId = e.currentTarget.id;
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
  console.log("classlist-----");

  dropdownElement[0].classList.toggle("show");

  // if ([...dropdownElement[0].classList].includes("show")) {
  //   dropdownElement[0].classList.remove("show");
  // } else dropdownElement[0].classList.toggle("show");
};

const appleMenu = document.getElementById("apple");
const finderMenu = document.getElementById("finder");
const fileMenu = document.getElementById("file");

//****** Event handlers for menu *******
appleMenu.addEventListener("click", subMenuHandler);
finderMenu.addEventListener("click", subMenuHandler);
fileMenu.addEventListener("click", subMenuHandler);

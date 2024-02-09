let ham_burger = document.getElementById(`hamBurger`)
let mobile_menu = document.getElementById(`menuBox`)
let mobile_links = mobile_menu.querySelectorAll(`ul li`)
let body = document.querySelectorAll(`body`)[0]
let menu_classes = mobile_menu.classList
ham_burger.addEventListener(`click`, () => {
  for (let x of menu_classes) {
    if (x === `hidden`) {
      mobile_menu.classList.add(`flex`)
      mobile_menu.classList.remove(`hidden`)
    }else if (x === `flex`) {
      mobile_menu.classList.add(`hidden`)
      mobile_menu.classList.remove(`flex`)
    }
  }
})
setInterval(() => {
  if (body.clientWidth > 751) {
    mobile_menu.classList.add(`hidden`)
    mobile_menu.classList.remove(`flex`)
  }else {}
}, 1)
mobile_links.forEach((link) => {
  link.addEventListener(`click`, () => {
    for (let x of menu_classes) {
      if (x === `hidden`) {
        mobile_menu.classList.add(`flex`)
        mobile_menu.classList.remove(`hidden`)
      }else if (x === `flex`) {
        mobile_menu.classList.add(`hidden`)
        mobile_menu.classList.remove(`flex`)
      }
    }
  })})

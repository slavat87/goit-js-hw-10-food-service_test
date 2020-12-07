import foodListTemplate from "../templates/menu-items.hbs";
import menu from '../menu.json'

const markup = foodListTemplate(menu);

const menuRef = document.querySelector(".js-menu"); 

menuRef.insertAdjacentHTML('beforeend', markup);

// // Створення елементів розмітки і додавання в них даних з масиву
// //
// const tech = ['HTML', 'CSS', 'JS'] // масив даних
// //
// const menuRef = document.querySelector(".js-menu"); // ссилка на клас в розмітці
// //
// const markup = tech.map(el => '<li><article><img></article></li>').join(''); // створює розмітку на основі масиву tech
// //
// menuRef.insertAdjacentHTML('beforeend', markup);
// //
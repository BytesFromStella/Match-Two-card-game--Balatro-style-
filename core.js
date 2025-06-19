// All base logic will be applied here to kickstart things.
// I decided to name the app file "core" cus it sounds cool awww yeee
import menu_view from "../view/menu-view.js"
import cards_view from "./view/cards-view.js";
import menu_controller from "./controller/menu-controller.js";

let menuView = new menu_view;

let cardContainer = new cards_view;

let menuController = new menu_controller;
menuController.createBoard(3);

// Load the 
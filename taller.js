import StorageManager from "./StorageManager.js";
import DOMManager from "./DOMManager.js";

const workshopSelect = StorageManager.getFromStorage("selectedWorkshop", {});
if (!workshopSelect.id) {
    window.location.href = "index.html";
}

const domManager = new DOMManager;

const mainContainer = document.querySelector("main");
const mainHtml = domManager.WorkshopCreateDescSection(workshopSelect);
mainContainer.appendChild(mainHtml);

// const asideContainer = document.querySelector("aside");
// const asideHtml = domManager.WorkshopCreateDescAside(workshopSelect);
// asideContainer.appendChild(asideHtml);
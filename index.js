import APIManager from "./APIManager.js";
import DOMManager from "./DOMManager.js";

async function main() {
  const rawPhotos = await APIManager.getData("taller-creativo");
  const domManager = new DOMManager();

  const container = document.querySelector(".product-container")

  const workshops = rawPhotos.photos;
 
  workshops.forEach(workshop => {
    const section = domManager.createWorkshopHtml(workshop);
    container.appendChild(section);
  });
}

main();
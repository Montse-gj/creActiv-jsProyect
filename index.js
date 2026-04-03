import APIManager from "./APIManager.js";
import DOMManager from ".DOMManager.js";
import Workshop from "./Workshop.js";
import { WorkshopGeneric, WorkshopCollection } from "./Workshop.js";

async function main() {
  const workshopGross = await APIManager.getData();
  const domManager = new DOMManager();
  const container = document.querySelector(".product-container");
  console.log(container);

  const workshopGeneric = await workshopCreate(workshopGross.photos);

  const workshopCollection = new WorkshopCollection();
  workshopGeneric.getElements().forEach(workshop => {
    const html = domManager.WorkshopCreateHtml(workshop);
    container.appendChild(html);
  });
}

main();
import APIManager from "./APIManager.js";
import DOMManager from "./DOMManager.js";
import { WorkshopCollection, workshopCreate } from "./Workshop.js";
import Listeners from "./Listeners.js";
import StorageManager from "./StorageManager.js";

async function main() {
  const workshopGross = await APIManager.getData();
  const domManager = new DOMManager();
  const container = document.querySelector(".product-container");
  const workshopGeneric = await workshopCreate(workshopGross.photos);
  const workshopCollection = new WorkshopCollection();

  workshopGeneric.getElements().forEach(workshop => {
    workshopCollection.add(workshop);
  });

  const favorites = StorageManager.getFavorite();

  workshopCollection.getElements().forEach(workshop => {
    if (favorites.includes(workshop.id)) {
      workshop.setFavorite(true)
    }
  });

  workshopCollection.getElements().forEach(workshop => {

    const html = domManager.WorkshopCreateHtml(workshop);

    // console.log(workshopCollection.getElements());

    if (workshop.isFavorite) {
      html.querySelector(".fav-button").classList.add("fav-on");
    }
    container.appendChild(html);
  });

  const listeners = new Listeners(workshopCollection, domManager,container);
  listeners.worksopDescription();
  listeners.favoritesGroup();
  listeners.searchByCity();

};

main();
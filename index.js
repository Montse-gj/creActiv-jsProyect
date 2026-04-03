import APIManager from "./APIManager.js";
import DOMManager from "./DOMManager.js";
import Workshop from "./Workshop.js";
import { WorkshopGeneric, WorkshopCollection } from "./Workshop.js";
import Listeners from "./Listeners.js";
import StorageManager from "./StorageManager.js";
async function workshopCreate(workshopData) {

  const collection = new WorkshopGeneric()
  workshopData.forEach(workshopGross => {
    const workshop = new Workshop(workshopGross.id,
      workshopGross.photographer,
      workshopGross.photographer_url,
      workshopGross.photographer_id,
      workshopGross.alt,
      workshopGross.height,
      workshopGross.width,
      workshopGross.url,
      workshopGross.avg_color,
      workshopGross.src)
    collection.add(workshop);
  });
  return collection;
}

async function main() {
  const workshopGross = await APIManager.getData();
  const domManager = new DOMManager();
  const container = document.querySelector(".product-container");
  console.log(container);

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
    // console.log(favorites);
    // console.log(workshopCollection.getElements());
    // console.log("favorites:", favorites);
    // console.log("workshop.id:", workshop.id, typeof workshop.id);
    if (workshop.isFavorite) {
      html.querySelector(".fav-button").classList.add("fav-on");
    }

    container.appendChild(html);
  });

  const listeners = new Listeners(workshopCollection, domManager);
  listeners.favoritesGroup();
  return workshopCollection;
};

main();
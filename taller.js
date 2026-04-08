import StorageManager from "./StorageManager.js";
import DOMManager from "./DOMManager.js";
import APIManager from "./APIManager.js";

async function initTaller() {
    
    const workshopSelect = StorageManager.getFromStorage("selectedWorkshop", {});
    if (!workshopSelect.id) {
        window.location.href = "index.html";
        return;
    }

    const acti = workshopSelect.activity.replaceAll(" ", "-").toLowerCase();

    let galleryImages = await APIManager.getWorkshopGalleryImages(acti);

    if (!galleryImages || galleryImages.length === 0) {
        galleryImages = [workshopSelect.srcMedium];
    }

    const domManager = new DOMManager();
    const mainContainer = document.querySelector("main");
    const mainHtml = domManager.WorkshopCreateDescSection(workshopSelect, galleryImages);
    mainContainer.appendChild(mainHtml);

}

initTaller();
import StorageManager from "./StorageManager.js";
import { workshopExtended } from "./workshopExtended.js";
import APIManager from "./APIManager.js";


class Listeners {
    constructor(workshopCollection, domManager, container) {
        this.workshop = workshopCollection;
        this.dom = domManager;
        this.container = container;
    }

    favoritesGroup() {
        document.querySelectorAll(".fav-button").forEach(favButton => {
            favButton.addEventListener("click", (event) => {

                const id = parseInt(event.currentTarget.dataset.workshopId);

                const workshop = this.workshop.collection.get(id);
                const idExtended = workshop.idExtended;

                this.workshop.toggleFavorite(id, idExtended);

                StorageManager.toggleFavorite(id, idExtended);

                if (workshop.isFavorite) {
                    favButton.classList.add("fav-on");
                } else {
                    favButton.classList.remove("fav-on");
                }
            });
        });
    }

    worksopDescription() {
        document.querySelectorAll(".book-bt").forEach(bookDesc => {
            bookDesc.addEventListener("click", (event) => {
                const id = parseInt(event.currentTarget.dataset.workshopId);

                let workshopSelected = this.workshop.collection.get(id);

                if (!workshopSelected) {
                    workshopSelected = workshopExtended.find(w => w.id === id);
                }
                if (workshopSelected){
                StorageManager.saveToStorage("selectedWorkshop", workshopSelected);
                window.open('../taller.html', '_blank');
            }
            });
        });
    }

    async searchByCity() {
        const formSearch = document.getElementById("searchForm");

        formSearch.addEventListener('submit', async (event) => {
            event.preventDefault();

            const searchData = new FormData(formSearch);
            const cityData = searchData.get('city').toLowerCase();

            const workshopExtendedArray = workshopExtended;


            const result = workshopExtendedArray.filter((workshop) =>
                workshop.city.trim().toLowerCase() === cityData.trim().toLowerCase()
            );

            this.container.innerHTML = '';

            if (result.length === 0) {
                const message = document.createElement("p");
                message.classList.add("no-results-message");
                message.textContent = `No hay talleres disponibles en "${cityData}"`;
                this.container.appendChild(message);
            } else {
                const query = `manualidades-${cityData}`;
                const response = await APIManager.getData(query);
                const newPhotos = response.photos;

                result.forEach((workshop, index) => {
                    const photoData = newPhotos[index % newPhotos.length];

                    if (photoData) {
                        workshop.id = photoData.id;
                        workshop.srcMedium = photoData.src.medium;
                        workshop.alt = photoData.alt;
                        workshop.photographer = photoData.photographer;
                    }

                    const html = this.dom.WorkshopCreateHtml(workshop);

                    const btBook = html.querySelector(".book-bt");
                    if (btBook) {
                        btBook.dataset.workshopId = workshop.id; 
                    }

                    this.container.appendChild(html);
                });

                this.favoritesGroup();
                this.worksopDescription();
            }
        });
    }
}
export default Listeners;
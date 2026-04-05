import StorageManager from "./StorageManager.js";

class Listeners {
    constructor(workshopCollection, domManager) {
        this.workshop = workshopCollection;
        this.dom = domManager;
    }

    favoritesGroup() {
        document.querySelectorAll(".fav-button").forEach(favButton => {
            favButton.addEventListener("click", (event) => {
                const id = parseInt(event.currentTarget.dataset.workshopId);
                this.workshop.toggleFavorite(id);

                const workshop = this.workshop.collection.get(id);

                StorageManager.toggleFavorite(id);

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

                const workshopSelected = this.workshop.collection.get(id);

                StorageManager.saveToStorage("selectedWorkshop", workshopSelected);
                window.open('../taller.html', '_blank');

            })
        })
    }
}
export default Listeners;
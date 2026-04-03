class Listeners {
    constructor(workshopCollection, domManager){
        this.workshop = workshopCollection; // instancia correcta
        this.dom = domManager;
    }

    favoritesGroup() {
        document.querySelectorAll(".fav-button").forEach(favButton => {
            favButton.addEventListener("click", (event) => {
                const id = parseInt(event.currentTarget.dataset.workshopId);
                this.workshop.toggleFavorite(id);

                const workshop = this.workshop.collection.get(id);

                if(workshop.isFavorite){
                    favButton.classList.add("fav-on");
                } else {
                    favButton.classList.remove("fav-on");
                }
            });
        });
    }
}
export default Listeners;
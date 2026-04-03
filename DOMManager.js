class DOMManager {

    constructor() {

    }
    WorkshopCreateHtml(workshop) {
        //contenedor taller
        const article = document.createElement("article");
        article.classList.add("product-card");
        article.setAttribute("id", `workshop-${workshop.id}`);

        // imagen
        const productImg = document.createElement("div");
        productImg.classList.add("product-img");
        const favButton = document.createElement("button");
        favButton.classList.add("fav-button");
        const favIcon = document.createElement("i");
        favIcon.classList.add("fas", "fa-heart", "favic", `fav-${workshop.id}`);
        favIcon.dataset.workshopId = workshop.id;
        // favButton.addEventListener("click", () => {
            // workshop.toggleFavorite();
            
            // if (workshop.isFavorite) {
            //     favButton.classList.add("fav-on");
            // } else {
            //     favButton.classList.remove("fav-on");
            // }
        // })


        const img = document.createElement("img");
        img.setAttribute("alt", `${workshop.alt}`);
        img.setAttribute("src", `${workshop.srcMedium}`);

        // contenedos descripcion
        const productDesc = document.createElement("div");
        productDesc.classList.add("product-short-desc");
        const productTitle = document.createElement("h4");
        productTitle.textContent = workshop.alt;
        const teacher = document.createElement("p");
        teacher.textContent = `Profesor: ${workshop.photographer}`;
        const center = document.createElement("p");
        center.textContent = `centro: ???? `;
        const productPrice = document.createElement("div");
        productPrice.classList.add("product-priceData");
        const price = document.createElement("div");
        price.textContent = "???€";
        const month = document.createElement("div");
        month.textContent = "???mes";
        const btBook = document.createElement("button");
        btBook.textContent = "Reservar";

        article.append(productImg, productDesc);
        productImg.append(favButton, img);
        favButton.append(favIcon);
        productDesc.append(productTitle, teacher, center, productPrice, btBook);
        productPrice.append(price, month);

        return article;

    }
}
export default DOMManager;
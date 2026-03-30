class DOMManager {

    constructor() {

    }
    createWorkshopHtml(workshop) {
        //contenedor taller
        const article = document.createElement("article");
        article.classList.add("product-card");
        article.setAttribute("id", `workshop-${workshop.id}`);

        // imagen
        const productImg = document.createElement("div");
        productImg.classList.add("product-img");
        const img = document.createElement("img");
        img.setAttribute("alt", `${workshop.alt}`);
        img.setAttribute("src", `${workshop.src.medium}`);

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
        productPrice.classList.add("product-price-data");
        const euro = document.createElement("div");
        euro.textContent = "???€";
        const mes = document.createElement("div");
        mes.textContent = "???mes";

        //    <button>Reservar</button>
        article.append(productImg,productDesc);
        productImg.append(img);
        productDesc.append(productTitle, teacher, center, euro, mes);

        return article;

    }
}
export default DOMManager;
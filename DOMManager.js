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
        favButton.classList.add("fav-button", `fav-${workshop.id}`);
        favButton.dataset.workshopId = workshop.id;
        const favIcon = document.createElement("i");
        favIcon.classList.add("fas", "fa-heart", "favic");

        const img = document.createElement("img");
        img.setAttribute("alt", `${workshop.alt}`);
        img.setAttribute("src", `${workshop.srcMedium}`);

        // contenedo descripcion
        const productDesc = document.createElement("div");
        productDesc.classList.add("product-short-desc");
        const productTitle = document.createElement("h2");
        productTitle.textContent = `${workshop.activity}`;
        const teacher = document.createElement("p");
        teacher.textContent = `Profesor: ${workshop.photographer}`;
        const center = document.createElement("p");
        center.textContent = `centro: ${workshop.center}`;
        const productPrice = document.createElement("div");
        productPrice.classList.add("product-priceData");
        const price = document.createElement("div");
        price.textContent = `${workshop.price}`;
        const month = document.createElement("div");
        month.textContent = `${workshop.month}`;
        const btBook = document.createElement("button");
        btBook.classList.add("book-bt", `book-${workshop.id}`);
        btBook.dataset.workshopId = workshop.id;
        btBook.textContent = "Reservar";

        article.append(productImg, productDesc);
        productImg.append(favButton, img);
        favButton.append(favIcon);
        productDesc.append(productTitle, teacher, center, productPrice, btBook);
        productPrice.append(price, month);

        return article;
    }

    WorkshopCreateDescSection(workshop, galleryImages) {
        //contenedor main
        const section = document.createElement("section");
        section.classList.add("workshop-info");
        section.setAttribute("id", `workshop-detail-${workshop.id}`);

        const gallery = document.createElement("div");
        gallery.classList.add("workshop-gallery");
        for (let i = 0; i < galleryImages.length; i++) {
            const galeryImg = document.createElement("img");
            galeryImg.setAttribute("alt", `${workshop.alt}`);
            galeryImg.setAttribute("src", `${galleryImages[i]}`);
            gallery.appendChild(galeryImg);
        }
        //-----2------------------------
        const asideContent = document.createElement("div");
        asideContent.classList.add("aside");
        const workshopName = document.createElement("h1");
        workshopName.textContent = `${workshop.activity}`;
        const workshopDesc = document.createElement("p");
        workshopDesc.textContent = `${workshop.randomFact}`;

        const teacher = document.createElement("div");
        teacher.classList.add("teacher");
        const imgId = document.createElement("img");
        imgId.classList.add("teacher-pic");
        imgId.setAttribute("alt", `${workshop.alt}`);
        imgId.setAttribute("src", `${workshop.srcMedium}`);
        const teacherName = document.createElement("p");
        teacherName.textContent = `${workshop.photographer}`;

        const priceCont = document.createElement("div");
        priceCont.classList.add("workshop-price");
        const euro = document.createElement("p");
        euro.textContent = `${workshop.price}`;
        const reserv = document.createElement("button")
        reserv.textContent = ("Reservar plaza");

        const workDate = document.createElement("div");
        workDate.classList.add("workshop-date");
        const workmonth = document.createElement("p");
        workmonth.textContent = `${workshop.month}`;
        const workplaces = document.createElement("p");
        workplaces.textContent = `${workshop.places} plazas libres`;
        //---------3-------------------------------------

        const workshopInfo = document.createElement("div");
        workshopInfo.classList.add("workshop-desc");
        const whatDo = document.createElement("h3");
        whatDo.textContent = "¿Qué haremos?";
        const descShort = document.createElement("p");
        descShort.textContent = `${workshop.descShort}`;
        const whatObj = document.createElement("h3");
        whatObj.textContent = "Objetivos";
        const descLarge = document.createElement("p");
        descLarge.textContent = `${workshop.descLarge}`;

        section.append(gallery, asideContent);
        asideContent.append(workshopName, workshopDesc, teacher, priceCont, workDate,workshopInfo);
        workshopInfo.append(whatDo, descShort, whatObj, descLarge);
        teacher.append(imgId, teacherName);
        priceCont.append(euro, reserv);
        workDate.append(workmonth, workplaces);

        return (section);
    }


}
export default DOMManager;
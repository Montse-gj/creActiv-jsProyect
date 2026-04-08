import { workshopExtended } from "./workshopExtended.js";

export default function matchExtended(workshopData) {
  let contador = Math.round(Math.random()*(40-1)+1);
  for (let i = 0; i < workshopData.length; i++) {
    workshopData[i].activity = workshopExtended[contador].activity;
    workshopData[i].descShort = workshopExtended[contador].descShort;
    workshopData[i].descLarge = workshopExtended[contador].descLarge;
    workshopData[i].randomFact = workshopExtended[contador].randomFact;
    workshopData[i].places = workshopExtended[contador].places;
    workshopData[i].center = workshopExtended[contador].center;
    workshopData[i].city = workshopExtended[contador].city;
    workshopData[i].month = workshopExtended[contador].month;
    workshopData[i].price = workshopExtended[contador].price;
    workshopData[i].idExtended = workshopExtended[contador].idExtended;
    workshopData[i].act = workshopExtended[contador].act;

    contador +=2;
    if (contador >= workshopExtended.length) {
      contador = 0;
    }
  }
  return workshopData;

}
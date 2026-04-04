import { workshopExtended } from "./workshopExtended.js";

export default function matchExtended(workshopData) {
  let contador = 0;
  for (let i = 0; i < workshopData.length; i++) {
    workshopData[i].center = workshopExtended[contador].center;
    workshopData[i].price = workshopExtended[contador].price;
    workshopData[i].month = workshopExtended[contador].month;
    contador += 2;
    if (contador >= workshopExtended.length) {
      contador = 0;
    }
   
  }
}
import APIManager from "./APIManager.js";

async function main() {
  const rawPhotos = await APIManager.getData("yoga");
  console.log(rawPhotos);
}
main();
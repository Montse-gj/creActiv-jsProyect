import API_KEY from "./apiKey.js";

class APIManager {
  static API_URL = `https://api.pexels.com/v1/`;

  static async getData(subject = "manualidades") {
    try {
      const query = `search?query=${subject}&per_page=10`;
      const result = await fetch(APIManager.API_URL + query, {
        method: "get",
        headers: {
          Authorization: API_KEY
        }
      });
      console.log(result);

      if (!result.ok) {
        console.log("Ha habido un error", result.status);
        return [];
      }
      const data = await result.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

}

export default APIManager;

class Workshop {
  constructor(id, photographer, photographer_url, photographer_id, alt, height, width, url, avg_color, src) {
    this.id = id;
    this.photographer = photographer;
    this.photographer_url = photographer_url;
    this.photographer_id = photographer_id;
    this.alt = alt;
    this.height = height;
    this.width = width;
    this.url = url;
    this.avg_color = avg_color;
    this.srcMedium = src.medium;
    this.isFavorite = false;
  }
  setFavorite(value) {
    this.isFavorite = value;
  }
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
  toString() {
    return `Foto: ${this.id}, 
          fotografo: ${this.photographer}, 
          fotografo url: ${this.photographer_url}, 
          fotografo id: ${this.photographer_id}, 
          descripción foto: ${this.alt}, 
          alto: ${this.height}, 
          ancho: ${this.width}, 
          direccion: ${this.url}, 
          gama de color: ${this.avg_color},
          tamaño foto medio : ${this.srcMedium}`;
  }
}

class GenericWorkshop {
  constructor() {
    this.collection = new Map();
  }
  add(element) {
    if (!element.id) {
      throw new Error(`El elemento no tiene ID`);
    }
    this.collection.set(element.id, element);
  }
  getById(id) {
    return this.collection.get(id);
  }
  getElements() {
    return Array.from(this.collection);
  }
}
class WorkshopCollection extends GenericWorkshop {
  addToFavorites(id) {
    const workshop = this.collection.get(id);
    workshop.setFavorite(true);
  }
  removeToFavorites(id) {
    const workshop = this.collection.get(id);
    workshop.setFavorite(false);
  }
  toggleFavorites(id) {
    const workshop = this.collection.get(id);
    workshop.toggleFavorites();
  }
}

function createWorkshop(workshopData) {

  const collection = new GenericWorkshop()
  workshopData.forEach(photo => {
    const workshop = new Workshop(photo.id,
      photo.photographer,
      photo.photographer_url,
      photo.photographer_id,
      photo.alt,
      photo.height,
      photo.width,
      photo.url,
      photo.avg_color,
      photo.src)
    collection.add(workshop);
  });
  return collection;
}
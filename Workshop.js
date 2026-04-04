export default class Workshop {
  constructor(id, photographer, photographer_url, photographer_id, alt, height, width, url, avg_color, src, activity, descShort, descLarge, randomFact, center, city, month,price) {
    this.id = id;
    this.photographer = photographer;
    this.photographer_url = photographer_url;
    this.photographer_id = photographer_id;
    this.alt = alt;
    this.url = url;
    this.srcMedium = src.medium;
    
    this.activity = activity;
    this.descShort = descShort;
    this.descLarge = descLarge;
    this.randomFact = randomFact;
    this.center = center;
    this.city = city;
    this.month = month;
    this.price = price;

    this.isFavorite = false;
  }
  setFavorite(value) {
    this.isFavorite = value;
  }
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
  toString() {
    return `Foto taller: ${this.id}, 
          fotografo: ${this.photographer}, 
          fotografo url: ${this.photographer_url}, 
          fotografo id: ${this.photographer_id}, 
          descripción foto: ${this.alt}, 
          direccion foto: ${this.url}, 
          tamaño foto medio : ${this.srcMedium}`;
  }
}

export class WorkshopGeneric {
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
    return Array.from(this.collection.values());
  }
}
export class WorkshopCollection extends WorkshopGeneric {
  addToFavorite(id) {
    const workshop = this.collection.get(id);
    workshop.setFavorite(true);
  }

  removeFromFavorite(id) {
    const workshop = this.collection.get(id);
    workshop.setFavorite(false);
  }

  toggleFavorite(id) {
    const workshop = this.collection.get(id);
    workshop.toggleFavorite();
  }

  getFavorite() {
    return Array.from(this.collection.values()).filter(workshop => workshop.isFavorite);
  }
}
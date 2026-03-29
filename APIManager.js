import API_KEY from "./apiKey.js";

class APIManager {
  static API_URL = `https://api.pexels.com/v1/`;
  
  static async getData(subject="manualidades") {
    try {
      const query = `search?query=${subject}&per_page=5`;
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
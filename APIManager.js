import API_KEY from "./apiKey.js";
const endpoint = "search";
class APIManager {
  static API_URL = `https://api.pexels.com/v1/${endpoint}`;

  static async getData(query = "manualidades") {
    try {
      const url = new URL(APIManager.API_URL);
      url.searchParams.append("query", query);
      url.searchParams.append("orientation", "landscape");
      url.searchParams.append("size", "medium");
      url.searchParams.append("locale", "es-ES");
      url.searchParams.append("per_page", "10");

      const apiResponse = await fetch(url.toString(), {
        method: "get",
        headers: {
          Authorization: API_KEY
        }
      });
      console.log(apiResponse);

      if (!apiResponse.ok) {
        console.log("Ha habido un error", apiResponse.status);
        return [];
      }
      const data = await apiResponse.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

}

export default APIManager;
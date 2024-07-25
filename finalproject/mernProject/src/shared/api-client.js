import axios from "axios";

export const getApiCall = async (URL) =>{

    const response = await axios.get(URL);
    // console.log(response);
    return response.data
}

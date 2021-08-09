import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
  method: 'GET',
  url: URL,
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-key': '6d0fcbf0e3mshe369e3e9dda78a5p180bb9jsn125bd4c9cb63',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async (type, sw, ne) => {
    try {
        //request
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'x-rapidapi-key': '6d0fcbf0e3mshe369e3e9dda78a5p180bb9jsn125bd4c9cb63',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
              }
        });
        return data;

    } catch (error) {
        console.log(error)
    }
}
const API_KEY = "dzaubvu8eHfv0BVAFLTeTxNkSRoYb9081bzvodEG" // in actual code, would be secure in backend
const NASA_URL = `https://api.nasa.gov/planetary/apod/`;
// would generally be implemented in backend but using React with minimal backend here

export const getPicture = async () => {
  return new Promise((resolve) => {
    fetch(`${NASA_URL}?api_key=${API_KEY}`.replace('http:', 'https:'), {
      method: "GET",
    }).then((res) => {
      resolve(res.json());
    });
  });
}

export const getPicturesByDate = async (startDate, endDate) => {
  // console.log(new Date(startDate).toISOString().slice(0, 10))

  // dates need to be parsed into correct format
  return new Promise((resolve) => {
    fetch(`${NASA_URL}?api_key=${API_KEY}&start_date=${new Date(startDate).toISOString().slice(0, 10)}&end_date=${new Date(endDate).toISOString().slice(0, 10)}`.replace('http:', 'https:'), {
      method: "GET",
    }).then((res) => {
      resolve(res.json());
    });
  });
};
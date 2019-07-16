import axios from 'axios';

const baseUrl = 'https://omgvamp-hearthstone-v1.p.rapidapi.com';

const getOptions = () => {
  return {
      credentials: 'same-origin',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'b63fcaac38msh146d1e491899685p135b49jsn36b95685c9a0',
      }
  }
};

export const getReq = (url) => {
  return axios.get(`${baseUrl}/${url}`, getOptions())
      .then(res => {
          return res;
      })
      .catch(error => {
          return console.log('Get Error', error);
      })
};

// export const postRequest = (url) => (body) => {
//   return axios.post(`${baseUrl}${url}`, body)
//       .then(res => {
//           return res
//       })
//       .catch(error => {
//           return console.log('Post Error', error);
//       })
// };

// export const securePostRequest = (url) => (body) => {
//   return axios.post(`${baseUrl}${url}`, body, {
//       ...getOptions()
//   })
//       .catch(error => {
//           return console.log('Post Error', error);
//       })
// };

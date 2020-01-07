import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllDogs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dogs.json`)
    .then((response) => {
      const theDogs = response.data;
      const dogs = [];
      Object.keys(theDogs).forEach((fbId) => {
        theDogs[fbId].id = fbId;
        dogs.push(theDogs[fbId]);
      });
      resolve(dogs);
      console.error('dogs', dogs);
    })
    .catch((error) => reject(error));
});

export default { getAllDogs };

import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((results) => {
      const allWalksObj = results.data;
      const walks = [];
      if (allWalksObj != null) {
        Object.keys(allWalksObj).forEach((walkId) => {
          const newWalk = allWalksObj[walkId];
          newWalk.id = walkId;
          walks.push(newWalk);
        });
      }
      resolve(walks);
    })
    .catch((error) => reject(error));
});

const addWalk = (newWalk) => axios.post(`${baseUrl}/walks.json`, newWalk);
const deleteWalk = (walkId) => axios.delete(`${baseUrl}/walks/${walkId}.json`);
const updateWalk = (walkId, newWalkInfo) => axios.put(`${baseUrl}/walks/${walkId}.json`, newWalkInfo);

export default {
  getWalks,
  addWalk,
  deleteWalk,
  updateWalk,
};

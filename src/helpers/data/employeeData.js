import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEmployees = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/employees.json`)
    .then((result) => {
      const employeeObject = result.data;
      const employees = [];
      if (employeeObject != null) {
        Object.keys(employeeObject).forEach((fbId) => {
          employeeObject[fbId].id = fbId;
          employees.push(employeeObject[fbId]);
        });
      }
      resolve(employees);
    })
    .catch((error) => reject(error));
});

export default { getEmployees };

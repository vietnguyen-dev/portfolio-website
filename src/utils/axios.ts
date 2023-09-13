import axios from "axios";

const api = process.env.API_URL
const key = process.env.API_KEY

const controller = axios.create({
    baseURL: api,
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${key}`, // Include the API key in the 'Authorization' header
        // 'Content-Type': 'application/json', // You can adjust headers based on your API requirements
        "Accept": "*/*, application/json, text/plain"
      },
  });

export default controller
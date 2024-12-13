import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  baseURL: "http://localhost:5000",
  // deployed version of amazon server on Render.com
  // baseURL: "https://amazon-api-deploy-82e9.onrender.com",
});

export { axiosInstance };

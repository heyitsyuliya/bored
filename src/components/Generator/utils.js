import axios from "axios";

export const makeRequest = async () => {
  let res = await axios.get("http://www.boredapi.com/api/activity");
  console.log(res.data);
};

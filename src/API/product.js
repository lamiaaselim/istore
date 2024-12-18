import axios from "axios";

const baseURL = process.env.REACT_APP_PROUCTS_API;

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(baseURL);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(`${baseURL}/${id}`);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
import axios from "axios";
import debounce from "lodash.debounce";

export const apiCall = debounce(async (searchQuery, setLoading, setData) => {
  try {
    setLoading(true);
    const res = await axios.get(
      `https://dummyjson.com/products/search?q=${searchQuery}`
    );
    const products = res?.data?.products;
    setLoading(false);
    setData(products);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}, 300);

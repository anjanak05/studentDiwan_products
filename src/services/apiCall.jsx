import axios from "axios";
import debounce from "lodash.debounce";

export const apiCall = debounce(async (searchQuery, setLoading, setData) => {
  try {
    setLoading(true);
    const res = await axios.get(
      `https://dummyjson.com/products/search?q=${searchQuery}`
    );

    const products = res?.data?.products || [];

    // Filter products by checking if the title contains the search query
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setLoading(false);
    setData(filteredProducts);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}, 1500);

import { useEffect, useState } from "react";
import axios from "axios";

const useGetUsers = (search) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/users"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    getUsers();
  }, [search]);

  return products;
};

export default useGetUsers;
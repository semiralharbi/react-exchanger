import { useEffect, useState } from "react";

import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.freecurrencyapi.com/v1/",
  headers: {
    apikey: "xEc7eJwMTWHzUnf9ij2LstBQrsONh12p4WV1MzRB",
  },
});

export const useRates = () => {
  const [rates, setRates] = useState({
    state: "loading",
  });

  useEffect(() => {
    const getRates = async () => {
      try {
        const result = await axiosClient.get("latest?base_currency=PLN");
        const data = result.data.data;
        return setRates({
          state: "success",
          data,
        });
      } catch {
        return setRates({ state: "error" });
      }
    };
    getRates();
  }, []);

  return rates;
};

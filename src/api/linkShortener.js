import axios from "axios";

export const shortenLink = (url) => {
  return axios.post(
    "https://api-ssl.bitly.com/v4/shorten",
    {
      "long_url": url
    },
    {
      headers: {
        Authorization: "0c42b31e5f54a794948770c0c0881d8c4ccd7c10",
        "Content-Type": "application/json",
      },
    }
  );
};

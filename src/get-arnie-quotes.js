const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  return Promise.all(
    urls.map(async (url) => {
      const response = await httpGet(url);
      const parsedBody = JSON.parse(response.body);
      if (response.status === 200) {
        return { "Arnie Quote": parsedBody.message };
      } else {
        return { FAILURE: parsedBody.message };
      }
    })
  );
};

module.exports = {
  getArnieQuotes,
};

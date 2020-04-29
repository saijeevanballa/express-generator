const appModule = require("./app");

const PORT = process.env.PORT || 3000;

appModule.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

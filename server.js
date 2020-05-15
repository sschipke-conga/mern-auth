const express = require("express");
const app = require('./app')

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.set('port', process.env.PORT || 5050);

app.listen(app.get('port'), () => {
  console.log(`MERN AUTH is running on localhost:${app.get('port')}`);
});

const app = require('./app')

if (process.env.NODE_ENV === "production") {
  app.user(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build/static", "index.html"));
  });
}

app.set('port', process.env.PORT || 5050);

app.listen(app.get('port'), () => {
  console.log(`MERN AUTH is running on localhost:${app.get('port')}`);
});
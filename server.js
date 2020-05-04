
const app = require('./app')

app.set('port', process.env.PORT || 5050);

app.listen(app.get('port'), () => {
  console.log(`MERN AUTH is running on localhost:${app.get('port')}`);
});
require('dotenv').config();
const express = require('express');
const app = express();


app.use(express.static('/public/images'));


app.disable('x-powered-by');


app.set('view engine', 'pug');

console.log(process.env.COLOR)
app.get('/', (req, res) => {
    res.render(process.env.COLOR)
})

const server = app.listen(3000, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('App listening at http://%s:%s', host, port);
});
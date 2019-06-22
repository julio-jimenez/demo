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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});



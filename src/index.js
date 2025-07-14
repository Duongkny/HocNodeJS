const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); // ✅

app.engine('hbs', exphbs.engine({
  extname: '.hbs',
})); // ✅
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/view', (req, res) => {
  console.log(req.query);
  res.render('view');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

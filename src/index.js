const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public'))); // ✅

app.use(express.urlencoded({ extended: true })); // ✅

app.use(express.json()); // ✅

app.engine('hbs', exphbs.engine({
  extname: '.hbs',
})); // ✅
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resource/views'));

route(app); // Initialize routes

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

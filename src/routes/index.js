const newsRouter = require('./news');

function route(app){
    
app.use('/news', newsRouter); // Use the news router for /news routes

app.get('/', (req, res) => {
  res.render('home');
});



app.get('/view', (req, res) => {
  console.log(req.query);
  res.render('view');
}); 

app.post('/view', (req, res) => {
  console.log(req.body);
  res.send('');
});

}

module.exports = route;
class NewController {
    // [Get] /news
  index(req, res) {
    console.log(req.query);
    res.render('news');

  }

  show(req, res) {
    console.log(req.params);
    res.send('News detail page');
  }
}


module.exports = new NewController();


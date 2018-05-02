module.exports = function(app) {
 app.get('/', function(req, res) {
   res.render('pages/index');
 });

 app.get('/films', function(req, res) {
   res.render('pages/films');
 });

 app.get('/team', function(req, res) {
    res.render('pages/team');
  });

 app.get('/about', function(req, res) {
    res.render('pages/about');
  });

 app.get('/contact', function(req, res) {
   res.render('pages/contact');
 });
};
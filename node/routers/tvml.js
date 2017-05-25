
 var express = require('express');
var router = express.Router();



// Lets put some request debugging in
router.use(function (req, res, next) {
  console.log("Request--> " + req.originalUrl);
  next();
});



//TVML Routes

router.get('/tvml/Alert.xml.js', function (req, res) {
  res.render('tvml/Alert');
});

router.get('/tvml/AlertWithDescription.xml.js', function (req, res) {
  res.render('tvml/AlertWithDescription');
});

router.get('/tvml/AlertWithShelf.xml.js', function (req, res) {
  res.render('tvml/AlertWithShelf',{baseURL: "graphiti"});
});

router.get('/tvml/Catalog.xml.js', function (req, res) {
  res.render('tvml/Catalog',{baseURL: "graphiti"});
});

router.get('/tvml/Compilation.xml.js', function (req, res) {
  res.render('tvml/Compilation',{baseURL: "graphiti"});
});

router.get('/tvml/DescriptiveAlert.xml.js', function (req, res) {
  res.render('tvml/DescriptiveAlert');
});

router.get('/tvml/Form.xml.js', function (req, res) {
  res.render('tvml/Form');
});

router.get('/tvml/ListItemExamples.xml.js', function (req, res) {
  res.render('tvml/ListItemExamples',{baseURL: "graphiti"});
});

router.get('/tvml/ListWithBanner.xml.js', function (req, res) {
  res.render('tvml/ListWithBanner',{baseURL: "graphiti"});
});

router.get('/tvml/Loading.xml.js', function (req, res) {
  res.render('tvml/Loading');
});

router.get('/tvml/Main.xml.js', function (req, res) {
  res.render('tvml/Main',{baseURL: "graphiti"});
});

router.get('/tvml/MenuBar.xml.js', function (req, res) {
  res.render('tvml/MenuBar',{baseURL: "graphiti"});
});

router.get('/tvml/Parade.xml.js', function (req, res) {
  res.render('tvml/Parade', {baseURL: "graphiti"});
});

router.get('/tvml/Product.xml.js', function (req, res) {
  res.render('tvml/Product',{baseURL: "graphiti"});
});

router.get('/tvml/ProductBundle.xml.js', function (req, res) {
  res.render('tvml/ProductBundle',{baseURL: "graphiti"});
});

router.get('/tvml/Rating.xml.js', function (req, res) {
  res.render('tvml/Rating');
});

router.get('/tvml/Search.xml.js', function (req, res) {
  res.render('tvml/Search',{baseURL: "graphiti"});
});

router.get('/tvml/Stack.xml.js', function (req, res) {
  res.render('tvml/Stack',{baseURL: "graphiti"});
});

router.get('/tvml/Stack_DarkTheme.xml.js', function (req, res) {
  res.render('tvml/Stack_DarkTheme',{baseURL: "graphiti"});
});

router.get('/tvml/Stack_LightTheme.xml.js', function (req, res) {
  res.render('tvml/Stack_LightTheme',{baseURL: "graphiti"});
});

router.get('/tvml/Stack_Room.xml.js', function (req, res) {
  res.render('tvml/Stack_Room',{baseURL: "graphiti"});
});

router.get('/tvml/Stack_Separator.xml.js', function (req, res) {
  res.render('tvml/Stack_Separator',{baseURL: "graphiti"});
});


/**
 * And Our Default Route
 */
router.get('/', function (req, res) {

  res.render('tvml/index',{baseURL: "graphiti"});
});

// export
module.exports = router

const router = require('express').Router();
const { withAuth } = require('../utils/auth');

// render homepage as index
router.get('/', async (req, res) => {
  res.render('home'); 
});

// render the login page
router.get('/login', (req, res) => {

  res.render('login');
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
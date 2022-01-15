const mysql = require('mysql');
const express = require('express')
const app = express()
var path = require ('path');
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

app.use(express.urlencoded({ extended: false }))

app.get('/login', (req, res) => {
  try {
  var username = req.body.username;
  const initializePassport = require('./passport-config')
initializePassport(
  passport, 
  username => pool.query('SELECT * FROM users WHERE user_name = ?', [username],  function (err, res) {
            if (err) {
                console.error("An error occurred:", err.message);
                res.status(500).json({ status: 500, message: "An error occurred: " + err.message });
            } else {
                if (res.length) {
                    console.log( "User found successfully.");
                    res.status(200).json({ status: 200, message: "User found successfully." });
                } else {
                    console.log( "User not found.");
                    res.status(404).send({ status: 404, message: "User not found." });
                }
            }
        }
  ))} catch {
    res.redirect('/login')
  }   
  })




app.engine('html', require('ejs').renderFile);
app.set('view-engine', 'html');
app.set('', __dirname);

app.use(flash())
app.use(session({
  secret: 'secret',
  resave: false,
  saveUnintialized: false
    
}))
app.use(passport.initialize())
app.use(passport.session())


const pool = mysql.createPool({
  host: "remotemysql.com",
  user: "Q3rfyQELoQ",
  password: "jGmMxEqssR",
  database:"Q3rfyQELoQ"
});

app.get('/', function(req, res){
    res.render(path.join(__dirname, 'index.html'), { name: 'Rizwan' });
});

app.get('/Login', (req, res) => {

  res.render(path.join(__dirname, 'Login.html'));
})

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: 'login',
  failureFlash: true
}))


app.get('/signup', (req, res) => {

  res.render(path.join(__dirname, 'signup.html'));
})

app.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    var username = req.body.name;
    var password = hashedPassword;
    var email = req.body.email;
    console.log(username)
    console.log(password)
    var userAndPass = "INSERT INTO `users`(`user_name`, `password`, `email`) VALUES ('" + username + "','" + password + "','" + email + "')";
    pool.query(userAndPass, function(err, result){
    if(err)throw err;
    console.log("1 ENTRY ADDED")
    })
    res.redirect('/login')
  } catch {
    res.redirect('/signup')
  }
})

app.listen(3001)

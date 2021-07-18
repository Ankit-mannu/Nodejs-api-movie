var express = require('express')
var path = require('path');
var app = express();
const fetch = require('node-fetch');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});


app.get('/movie-details/:id', function (req, res) {
    res.send('hello world');
  });


app.get('/product', function (req, res) {

    async function getPopuplarMovieData()
    {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1')
        const data = await response.json(); 
        //res.send(data);
        //var moviedata= JSON.parse(data.results);
        res.render('index', { popularMovieData : data.results });
    }

    getPopuplarMovieData();


  })

app.listen(4000,function(){
    console.log('connected');
});

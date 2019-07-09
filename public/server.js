const express = require('express');
const app = express();
const port = 8000;



//Set port
app.set('port', process.env.PORT || 8000);

//Set view engine
app.set('view engine', 'ejs');
app.set('views', 'public/views');

//Routes
//home page
app.get('/', (req, res) => {
    res.render('index', { title: 'Canada National Parks'});
});

//Banff national park
app.get('/banff-park', (req, res) => {
    res.render('banff-park', { title: 'Banff National Park'});
});

//Jasper national park
app.get('/jasper-park', (req, res) => {
    res.render('jasper-park', { title: 'Jasper National Park'});
});

//Yoho national park
app.get('/yoho-park', (req, res) => {
    res.render('yoho-park', { title: 'Yoho National Park'});
});

//Cape breton national park
app.get('/cape-breton-park', (req, res) => {
    res.render('cape-breton-park', { title: 'Cape Breton National Park'});
});


//Server listening on port 8000
app.listen(app.get('port'), () => {
    console.log("server listening on port", app.get('port'));
})
/**
 * Created by youxiachai on 14-2-28.
 */

var http = require('http'),
    express = require('express'),
    app = express();

app.set('port', 3001);

app.use(express.urlencoded());

app.use('/static' , express.static(__dirname + '/public'))
//
//app.use(function (req, res, next){
//   if(req.query.name === 'xxx'){
//       next();
//   } else {
//       res.send('please set name')
//   }
//
//})

app.use('/admin' , function (req, res, next){

    console.log(req.headers);
    // User-X
    if(req.headers['auth-name'] === 'youxiachai'){
        next();
    } else {
        res.send('please set auth name');
    }

})




app.get('/', function (req, res){
//    console.log(req.middlename)
    res.send('Hello World ');
})

app.get('/:id', function (req, res){
    res.send('Hello World' + req.params.id);
})

app.post('/', function (req, res){

    res.send('post -> Hello Wolrd ' + req.body.number)
})




app.put('/', function (req, res){
    res.send('put -> Hello Wolrd')
})



app.del('/admin', function (req, res){
    res.send('del -> Hello Wolrd')
})

http.createServer(app).listen(app.get('port'), function () {
      console.log(app.get('port'));
})
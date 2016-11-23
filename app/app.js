var express = require('express');
var app = express();

var dataFile = require('./data/data.json')


app.set('port', process.env.PORT || 3000);

app.use(require('./routes/index'));
app.use(require('./routes/speakers'));



app.listen(app.get('port'), function (){
   console.log('Сервер запущен на порту' + app.get('port'));
});
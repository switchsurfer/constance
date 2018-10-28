var express = require("express");
var bodyParser = require("body-parser") //
var { Botact } = require("botact") //

var app = express();
var port = process.env.PORT || 3000;
var bot = new Botact({
    token: '2317f5e75804cc8ffac8598571f21865b5c88799a2f82eedd6dd45ef153411fd279dd44f74a6d6bd5e748',
    confirmation: '6dae77b7'
}) //


bot.on(function (ctx){
    ctx.reply('Приветики')
})

bot.command('start', (ctx) => {
    // via shortcut from context
    ctx.reply('Hi, this is start!')
    // via shortcut with keyboard
    ctx.reply('Yo, this is keyboard?', null, {
      one_time: false,
      buttons: [
        [
          {
            action: {
              type: 'text',
              payload: {
                button: 'Hello, world!'
              },
              label: 'Hello, world!'
            },
            color: 'primary'
          }
        ]
      ]
    })
    // via function from context
    ctx.sendMessage(ctx.user_id, 'Hi, this is start!')
    // via function from instance
    bot.reply(ctx.user_id, 'Hi, this is start!')
    // to multiple users
    bot.reply([ ctx.user_id, 1 ], 'Hi, this is start!')
  })


 //подключаем модули к серверу
app.use( bodyParser.json() )

//создаём путь
app.post('/', bot.listen) 

app.listen(port);
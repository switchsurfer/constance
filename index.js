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
    ctx.reply('Приветствую')
    ctx.reply('https://vk.com/@onetkt-russkoe-varene-kakoe-ono')  
    ctx.reply('Куда хочешь сходить?', null, {
      one_time: false,
      buttons: [
        [
          {
            action: {
              type: 'text',
              payload: {
                button: 'Театр на серпуховке'
              },
              label: 'Театр на серпуховке'
            },
            color: 'default'
          }
        ],
        [
          {
            action: {
              type: 'text',
              payload: {
                button: 'Театр мюзикла'
              },
              label: 'Театр мюзикла'
            },
            color: 'default'
          } 
        ]

      ]
    })
})


bot.command('Театр на серпуховке', (ctx) => {
  ctx.reply('Выбери один из вариантов', null,{
    one_time: false,
    buttons: [
      [
        {
          action: {
            type: 'text',
            payload: {
              button: 'Русское варенье'
            },
            label: 'Русское варенье'
          },
          color: 'primary'
        }
      ],
      [
        {
          action: {
            type: 'text',
            payload: {
              button: 'Коварство и любовь'
            },
            label: 'Коварство и любовь'
          },
          color: 'primary'
        } 
      ]

    ]
  })
})
  

  

 //подключаем модули к серверу
app.use( bodyParser.json() )

//создаём путь
app.post('/', bot.listen) 

app.listen(port);
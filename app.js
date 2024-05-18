// 載入express
const express = require('express')
const app = express()
const port = 3000

// 載入express-handlebars engine
const { engine } = require('express-handlebars')

// 引用randomPassword module, 載入'./generatepassword'檔案
const randomPassword = require('./generatepassword')

// 使用handlebars
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

// 使用static files
app.use(express.static('public'))

// 使用POST method, extended use true for more data type
app.use(express.urlencoded({ extended: true }))

// 當在根目錄時,自動導向 '/generatepassword'的頁面
app.get('/', (req, res) => {
  res.redirect('/generatepassword')
})

// 在 '/generatepassword'的頁面時所看到的畫面
app.get('/generatepassword', (req, res) => {
  res.render('index')
})

app.post('/generatepassword', (req, res) => {
  // 從前端取得資料, 使用POST方法時, 會將資料存在body中
  const options = req.body
  const password = randomPassword(options);
  res.render('index', { password, options })
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})
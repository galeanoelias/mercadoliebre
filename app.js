let express = require('express');
let app = express();
const PORT = 3000;
const path = require('path');
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})
app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
https://localhost:${PORT}
`))
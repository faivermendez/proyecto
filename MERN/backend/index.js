//Importar las librerías
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//Usar los métodos de las librerías
const app = express();
require('dotenv').config();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//Base de Datos
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {console.log("Base de Datos Conectada")} )

//Routes
app.use('/api/category', require('./routes/category'));
app.use('/api/product', require('./routes/product'));

//Listen Port
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor se ejecuta en el puerto ${port}`);
})
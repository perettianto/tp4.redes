require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); 
const textRoutes = require('./routes/textRoutes');

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

app.use('/auth', authRoutes);
app.use('/text', textRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en funcionamiento en el puerto ${PORT}`));

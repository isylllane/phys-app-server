require('dotenv').config();
const express = require('express');
const sequelize = require('./db.js');
const router = require('./routes/index');
const models = require('./models/models');
const path = require('path');
const fileUplaods = require('express-fileupload');
const cors = require('cors');


const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUplaods({}))
app.use('/api', router)


const start = async () => {
    try {
        await sequelize.authenticate(); // Установка подключения к бд
        await sequelize.sync(); // Сверяем состояние бд со схемой бд
        app.listen(port, "0.0.0.0", () => {console.log(`Server started on port ${port}`)});

    } catch (e) {
        console.log('Ошибка при запуске сервера: ',e);
    }
}
start();
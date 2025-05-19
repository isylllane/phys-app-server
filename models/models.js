
const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const waist = sequelize.define("waist", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    bodyPart: {type: DataTypes.STRING},
    equipment: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    target: {type: DataTypes.STRING},
    secondaryMuscles: {type: DataTypes.ARRAY(DataTypes.STRING)},
    instructions: {type: DataTypes.ARRAY(DataTypes.STRING)},
    gifUrl: {type: DataTypes.STRING},
})

const shoulders = sequelize.define("shoulders", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    bodyPart: {type: DataTypes.STRING},
    equipment: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    target: {type: DataTypes.STRING},
    secondaryMuscles: {type: DataTypes.ARRAY(DataTypes.STRING)},
    instructions: {type: DataTypes.ARRAY(DataTypes.STRING)},
    gifUrl: {type: DataTypes.STRING},
})

const neck = sequelize.define("neck", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    bodyPart: {type: DataTypes.STRING},
    equipment: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    target: {type: DataTypes.STRING},
    secondaryMuscles: {type: DataTypes.ARRAY(DataTypes.STRING)},
    instructions: {type: DataTypes.ARRAY(DataTypes.STRING)},
    gifUrl: {type: DataTypes.STRING},
})
const chest = sequelize.define("chest", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    bodyPart: {type: DataTypes.STRING},
    equipment: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    target: {type: DataTypes.STRING},
    secondaryMuscles: {type: DataTypes.ARRAY(DataTypes.STRING)},
    instructions: {type: DataTypes.ARRAY(DataTypes.STRING)},
    gifUrl: {type: DataTypes.STRING},
})
const cardio = sequelize.define("cardio", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    bodyPart: {type: DataTypes.STRING},
    equipment: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    target: {type: DataTypes.STRING},
    secondaryMuscles: {type: DataTypes.ARRAY(DataTypes.STRING)},
    instructions: {type: DataTypes.ARRAY(DataTypes.STRING)},
    gifUrl: {type: DataTypes.STRING},
})
const back = sequelize.define("back", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    bodyPart: {type: DataTypes.STRING},
    equipment: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    target: {type: DataTypes.STRING},
    secondaryMuscles: {type: DataTypes.ARRAY(DataTypes.STRING)},
    instructions: {type: DataTypes.ARRAY(DataTypes.STRING)},
    gifUrl: {type: DataTypes.STRING},
})

module.exports = {
    waist: waist,
    chest: chest,
    shoulders: shoulders,
    neck: neck,
    cardio: cardio,
    back: back,
}
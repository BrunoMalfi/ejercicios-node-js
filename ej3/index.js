const numeros = require("./numeros.js")
const Logger = require('logplease');
const logger = Logger.create('utils');
console.log('Test esPar(7) : ',numeros.esPar(7))
const numerosParaTest = [2, 3, 101, 201, 202, 100]
numerosParaTest.forEach((numero)=>{
    numeros.esPar(numero) ? logger.info(" El numero "+numero+ " es par"): logger.error("El numero "+numero+" es impar");
    })

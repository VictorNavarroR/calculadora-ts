// Creamos una enumeración para limitar las operaciones existentes en nuestra calculadora.
var Operacion;
(function (Operacion) {
    Operacion["SUMA"] = "+";
    Operacion["RESTA"] = "-";
    Operacion["MULTIPLICACION"] = "*";
    Operacion["DIVISION"] = "/";
    Operacion["PORCENTAJE"] = "%";
})(Operacion || (Operacion = {}));
/** OPCIÓN 1: Añadimos los operandos y la operación manualmente desde nuestro archivo typescript */
// const operando1: number = 4;
// const operando2: number = 2;
// const operacion: Operacion = '+';
/** OPCIÓN 2: El usuario introduce por consola los operandos y las operaciones que desee realizar
 * Ej: node ./js-files/calculadora.js 4 2 *
 *
 * Para obtener los valores que pasa el usuario por consola se utiliza "process.argv", un array que contiene todos esos valores en el mismo orden.
 * Para poder utilizar este valor intalar:
 * npm install --save-dev @types/node
 *
 * El primer valor de process.argv es el path y el segundo el nombre de nuestro archivo. A partir del tercer elemento, posición 2 del array tenemos los argumentos que hemos añadido
 * nosotros por consola.
*/
var operando1 = parseInt(process.argv[2]);
var operando2 = parseInt(process.argv[3]);
/** Casteo al tipo Operacion para indicarle que el valor que introduce el usuario por consola es de dicho tipo */
var operacion = process.argv[4];
/** Creamos una función que raliza la operación que le especifiquemos y devuelve el resultado.
 * Si la operació no existe devuelve -1
 */
var operar = function (operando1, operando2, operacion) {
    switch (operacion) {
        case Operacion.SUMA:
            return sumar(operando1, operando2);
        case Operacion.RESTA:
            return restar(operando1, operando2);
        case Operacion.MULTIPLICACION:
            return multiplicar(operando1, operando2);
        case Operacion.DIVISION:
            return dividir(operando1, operando2);
        case Operacion.PORCENTAJE:
            return porciento(operando1, operando2);
        default:
            console.log('ERROR: La operación introducida no existe');
            return -1;
    }
};
//4*(1/100)
/** Función que suma dos números */
var sumar = function (operando1, operando2) {
    return operando1 + operando2;
};
var restar = function (operando1, operando2) {
    return operando1 - operando2;
};
var multiplicar = function (operando1, operando2) {
    return operando1 * operando2;
};
var dividir = function (operando1, operando2) {
    return operando1 / operando2;
};
var porciento = function (operando1, operando2) {
    var porcentaje = (operando1 * operando2) / 100;
    return porcentaje;
};
/** Se infiere el tipo number de la función al ser el tipo de su valor de retorno */
var result = operar(operando1, operando2, operacion);
/** Imprimimos el resultado de nuestra operación */
console.log(result);

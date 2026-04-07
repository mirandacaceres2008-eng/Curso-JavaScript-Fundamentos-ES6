let color = "verde"; // Cambia el valor de color a "rojo", "verde", "amarillo" o cualquier otro valor para probar el switch

switch(color){
    case "rojo":
        console.log("Color de alerta");
        break;

    case "verde":
        console.log("Color de avance");
        break;

    case "amarillo":
        console.log("Color de precaución");
        break;

    default:
        console.log("Color no reconocido");
}
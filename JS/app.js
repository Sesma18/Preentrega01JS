let entrada = prompt("Ingresar un nombre"); 

while (entrada !== "ESC") {
    switch (entrada) {
        case "Ana":
        case "Maria":
        case "Carla":
        case "Sofia":
        case "Laura":
            alert(`Bienvenida ${entrada}`);
            break;
        case "Juan":
        case "Pedro":
        case "Luis":
        case "Daniel":
        case "Miguel":
            alert(`Bienvenido ${entrada}`);
            break;
        default:
            alert("¿Quién sos?");
            break;
    }
    entrada = prompt("Ingresar un nombre");
}
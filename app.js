function mruResultado(){
    vi = document.getElementById("velocidad_inicial").value;
    tiempo = document.getElementById("tiempo").value;
    aceleracion = document.getElementById("aceleracion").value;
    densidad = (vi * tiempo) +(( 1/2 * aceleracion) * Math.pow(tiempo, 2))
    alert("la densidad es: "+ densidad)
}
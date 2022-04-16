// alert()
// Estos son los VR

hb = (" Hemoglobina:  Hombre: de 13.8 a 17.2 gramos por decilitro (g/dL) o 138 a 172 gramos por litro (g/L) Mujer: de 12.1 a 15.1 g/dL o 121 a 151 g/L.")

gli = ("Glicemia: Un nivel de glucosa en la sangre inferior a 140 mg/dl ( 7,8 mmol/l ) se considera normal. Un nivel de glucosa en la sangre de entre 140 y 199 mg/dl ( 7,8 a 11 mmol/l ) se considera prediabetes. ... Un nivel de glucosa en la sangre de 200 mg/dl (11,1 mmol/l ) o superior indica diabetes tipo 2.")


let usr;
let usrType;
alert("Bienvenido al lab")
//Datos de usuario
usr = prompt("Cual es tu nombre?")
usrType = prompt("Eres Paciente o Laboratorista?")


switch(usrType){
    case "paciente":
        bill.innerHTML =` <h5> Bienvenid@ ${usr}, a tu laboratorio de confianza </h5>`
        let tst = prompt("cuantos examenes quiere revisar?");
        for(let i=0; i<=tst; i=i+1){
            document.write(` <br> Examen ${1}`)
        }

        break;
    case "laboratorista":
        bill.innerHTML =` <h5> Bienvenid@ ${usr}, aqui podras encontrar los VR y los Resultados de tus pacientes </h5>`
        document.write("Estos son algunos, pronto los tendremos todos por secciones: <br><br>"+hb+"<br><br><br>",gli)
        break;
    case "programador":
        bill.innerHTML =` <h5> Eureka! ${usr}, tu no vienes por los VR pero te saludo compa </h5>`
        document.write(' <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ')
        break;

    case "":
        while(usrType===""){
            usrType = prompt("Ingresa algo o te quedas en este loop jaja")
        }
        document.write("Y por no cooperar te toca F5")
        break;
    default:
        bill.innerHTML = ` <h5> Hola ${usr}, aqui encontraras VR si eso te interesa </h5>`
        document.write("Estos son algunos, pronto los tendremos todos por secciones: <br><br>"+hb+"<br><br><br>",gli)
        break;
    
}

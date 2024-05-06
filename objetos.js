// 1.- Crea un objeto llamado ciudadano1 y dale las propiedades nombre, apellido y edad

const ciudadano1={
    ciudadanoName:"jesus",
    ciudadanoSurname:"raad",
    ciudadanoAge:22,
   
}




// 2.- Una vez creado, añádelela propiedad city, con el valor que tú quieras, y cambia el valor de la propiedad age.



ciudadano1.ciudadanocity="caracas"

ciudadano1.ciudadanoAge=23

// 3.- Crea una función checkCitizenship que acepta como parámetro un objeto, comprueba la edad del ciudadano y,
//  si ésta es mayor de 18, añada la propiedad canVote: true; De lo contrario, debe agregar canVote: false. Usala con el objeto ciudadano1.


function checkCitizenship(object) {
    if (object.ciudadanoAge>=18) {return object.canVote=true
        
    }else 
    { return object.canVote=false}
     
}

console.log(checkCitizenship(ciudadano1));

// 4.- Crea una función llamada createCitizen que acepta 3 cadenas: nombre, apellido y edad. 
// Si los parámetros son válidos, debe devolver un nuevo objeto y almacenarlos en un array.

function createCitizen(ciudadanoName,ciudadanoSurname,ciudadanoAge) {
    const ciudadano2={}

    if (ciudadanoName!==String) {ciudadano2.ciudadanoName=ciudadanoName}
    else {'no computable'}
    if (ciudadanoSurname!==String) {ciudadano2.ciudadanoSurname=ciudadanoSurname}
    else {'no computable'}
    if (ciudadanoAge!=NaN) {ciudadano2.ciudadanoAge=ciudadanoAge}
    else {'no computable'}
    return console.log(Object.entries(ciudadano2));
}

console.log(createCitizen("carl","ferguzon",55));


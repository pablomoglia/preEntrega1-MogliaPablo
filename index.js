// Ingresar nombre de alumno, paso seguido ingresar nota por materia, y luego calcular promedio final general de cada alumno.  imprimirlo en el html y consola.


let alumno = 0;
let continuar = true;

while (continuar) {

    let acumulador = 0;
    alumno = prompt("Ingresar Nombre y apellido de alumno (ESC para salir)");
    
    if (alumno !== "ESC") {
    
        let i = 0;
    
        while (i < 9) {
            const matematicas = parseInt(prompt("Ingrese nota final matemáticas: "));
            acumulador += matematicas;
            const lengua = parseInt(prompt("Ingrese nota final lengua: "));
            acumulador += lengua;
            const csSociales = parseInt(prompt("Ingrese nota final Cs.Sociales: "));
            acumulador += csSociales;
            const csNaturales = parseInt(prompt("Ingrese nota final Cs.Naturales: "));
            acumulador += csNaturales;
            const filosofia = parseInt(prompt("Ingrese nota final Filosofia: "));
            acumulador += filosofia;
            const contabilidad = parseInt(prompt("Ingrese nota final Contabilidad: "));
            acumulador += contabilidad;
            const informatica = parseInt(prompt("Ingrese nota final Informática: "));
            acumulador += informatica;
            const fisica = parseInt(prompt("Ingrese nota final Fisica: "));
            acumulador += fisica;
            const quimica = parseInt(prompt("Ingrese nota final Quimica: "));
            acumulador += quimica;
    
            i += 9;
    
        }

        const nota = acumulador / 9;
        alert(`La nota final de ${alumno} es: ${nota} `);
        
        document.write(`La nota final de ${alumno} es: ${nota} - `);
        console.log(alumno + ' ' + nota);
        
        if (nota < 7) {
            alert(`Lamento informarte ${alumno} tu nota final es ${nota} y deberas presentarte en diciembre a repaso`);
        }
        
        if (nota >= 7) {
            alert(`Felicitaciones ${alumno} tu nota final es ${nota} a las vacaciones !!`);
        }
        
        let respuesta = prompt("¿Desea ingresar otro alumno? (si/no)");
        
        if (respuesta == 'no') {
            continuar = false;
        } else {
            continuar = true;        
        }

    } else {
        continuar = false;
    }
}

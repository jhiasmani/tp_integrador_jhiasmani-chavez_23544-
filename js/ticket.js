
const resumen=document.getElementById("resumenT");

function clickBtnResume(){

    let  cod = document.getElementById("categoriaT").value;
    let cant=document.getElementById("cantidadT").value;
    console.log("el valor es :", cod);
    console.log("el valor de cantidad es:", cant);


   let valorCod=(cod);
   let valorCant=parseInt(cant);
   switch (cod) {
    case '80':
       let porcentajeE=parseInt(0.8 * 200);
       let restaE = 200-porcentajeE;
       let totalE= parseInt(restaE) * valorCant;
       alert(totalE);
       return totalE;
      break;
  
    case '50':
        let porcentajeT=parseInt(0.5* 200);
        let restaT = 200-porcentajeT;
        let totalT= parseInt(restaT) * valorCant;
        alert(totalT);
        return totalT;
      break;
  
    case '15':
        let porcentajeJ=parseInt(0.15* 200);
        let restaJ = 200-porcentajeJ;
        let totalJ= parseInt(restaJ) * valorCant;
        alert(totalJ);
        return totalJ;
    default:
      alert( 'No hay Valores Ingresados' );
  }
}

resumen.addEventListener('click',clickBtnResume);

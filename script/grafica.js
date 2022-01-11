function mostrarBarras(){
  let datos


  if (localStorage.getItem("conteo") == null) {
    datos = {
      conteoHombres: [0, 0, 0, 0, 0],
      conteoMujeres: [0, 0, 0, 0, 0]
    }
  }else{
    datos=JSON.parse(localStorage.getItem("conteo"))
  }
  
  
  Morris.Bar({
    element: 'bar-example',
    data: [
      { y: 'Delgadez severa', a: datos.conteoHombres[0], b: datos.conteoMujeres[0]  },
      { y: 'Saludable', a: datos.conteoHombres[1], b: datos.conteoMujeres[1] },
      { y: 'Con sobrepeso', a: datos.conteoHombres[2], b: datos.conteoMujeres[2] },
      { y: 'Obeso', a: datos.conteoHombres[3], b: datos.conteoMujeres[3] },
      { y: 'Obesidad extrema', a: datos.conteoHombres[4], b: datos.conteoMujeres[4] }
  
  
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['HOMBRES', 'MUJERES']
  });
}

export default mostrarBarras;
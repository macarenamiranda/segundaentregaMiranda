/****   ***/


const productos = [
    {nombre: "viaje de 1 a 2 horas",  precio: 1800},
    {nombre: "viaje de 3 a 4 horas",  precio: 2500},
    {nombre: "viaje de mas de 5 horas",  precio: 4000},

  ];
  
  let carrito = []
  let bienvenido = alert ("Bienvenidos a UberEats")
  let seleccion = prompt ("¿Desea pedir un auto? \n Seleccione: Si o No")
  
  while (seleccion != "si" && seleccion != "no") {
    alert ("Por favor ingresar si o no")
    seleccion =  prompt ("¿Hola desea pedir un auto?")
  }
  
  if(seleccion === "si"){
    alert("A continuacion, le mostramos nuestras opciones.")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join("\n"))
  } else if (seleccion == "no"){
    alert ("¡Gracias por confiar!")
  }
  
  while (seleccion != "no"){
    let producto = prompt ("¿cuantas horas dura su viaje?")
    let precio = 0
  
    if(producto == "viaje de 1 a 2 horas" || producto == "viaje de 3 a 4 horas"|| producto == "viaje de mas de 5 horas" ){
      switch(producto){
        case "viaje de 1 a 2 horas":
          precio = 1800;
          break
        case "viaje de 3 a 4 horas":
          precio = 2500;
          break
        case "viaje de mas de 5 horas":
          precio = 4000;
          break
        default:
          break;
      }
      let unidades = parseInt(prompt("¿cuantos viajes desea realizar?"))
      carrito.push({producto, unidades, precio  })
      console.log(carrito)
  
    }else{
      alert ("Genial!")
    }

    seleccion = prompt("¿Deseas pedir otro vehiculo?").toLowerCase();

    while (seleccion == "no") {
        alert("Hasta la proxima!, su vehiculo llegara en 15 minutos!")
        carrito.forEach((carritoFinal) => {
            console.log (`profesor: ${carritoFinal.profesor}, costo: ${carritoFinal.costo}, Total a pagar: ${carritoFinal.costo}`)
        })
        break;
    }
  }
  
  const pagototal = parseInt(carrito.reduce((acc, el) => acc + el.costo + costoHora));
 alert(`El total a pagar es: ${total}`);


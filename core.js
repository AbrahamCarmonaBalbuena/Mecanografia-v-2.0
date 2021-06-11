let canvas2 = document.getElementById('canvas2')
context1 = canvas2.getContext('2d')

let canvas3 = document.getElementById('canvas3')
context2 = canvas3.getContext('2d')

let canvas4 = document.getElementById('canvas4')
cxt2 = canvas4.getContext('2d')
imagen2= new Image()
imagen2.src="Lesabes.png"

let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),

    

    btnReinicio=document.getElementById('btnReinicio'),
    posX=50
    posY=400
    equivocaciones=0
   
    dificultad = {
      "facil":["A","S","D","F",""],
      "medio":["qaz","wsx","edc","rfv"],
      "dificil":["Kiet","saKi","HieLo","AsKo","KrikO","AsLa"]
    },
    finalizado =["silesabes"]
    textoamostrar =[],
    pos=0,
//declaracion del boton y la lectura del usuario
    btnusuario = document.getElementById('btnusuario'),
    usuario = document.getElementById('usuario'),
    usuario2 = Text

//Ocultacion de botones para activarlos hasta que se ingrese el usuario
    btnFacil= document.getElementById('btnFacil'),
    btnFacil.disabled=true,

    btnMedio= document.getElementById('btnMedio'),
    btnMedio.disabled=true,

    btnDificil= document.getElementById('btnDificil'),
    btnDificil.disabled=true,
   
//ocultacion de la entrada hasta que se seleccione la dificultad


    //obtencion del nombre de usuario para guardarlo
    btnusuario.addEventListener( 'click', function(){

        //desbloqueamos los botones de los niveles
        btnFacil.disabled=false
        btnMedio.disabled=false
        btnDificil.disabled=false

        //comprobamos el valor de usuario y lo guardamos como texto
        console.log(usuario.value)
        usuario2= usuario.value
        console.log(usuario2)

        //bloqueamos el boton usuario para que no se generen nuevamente hasta recargar la pagina
        btnusuario.disabled= true
      } )

      btnFacil.addEventListener( 'click', function(){
        textoamostrar = dificultad.facil

        context.font = '20px serif';
        context.fillText(textoamostrar[0],250,50)

        window.document.addEventListener('keydown', function (e){
          let arrayletra = e.code.split('Key')
          console.log(arrayletra)
          let letra =''
          if(arrayletra.length==2)
          {
            letra = arrayletra[1]
          }
          else
          {
            letra = arrayletra[0]
          }
          console.log(letra)

          if(textoamostrar[pos] == letra){
          pos++
          context.clearRect(0, 0, canvas.width, canvas.height);
          if(pos == 4)
          {
            context2.font = '20px serif';
            context1.font = '20px serif';
            context.fillText(finalizado[0],220,50);
            context1.fillText(usuario2,50,25)
            context2.fillText(equivocaciones,75,25)
            
            //imagen2.onload=function() { //la nueva imagen tiene que haberse cargado
            cxt2.drawImage(imagen2,0,0); //insertar imagen en canvas
          //}

          }
          context.fillText(textoamostrar[pos],250,50)
          }
          else{
          console.log('Tecla incorrecta')
          equivocaciones++
          console.log(equivocaciones)
          }
          })
   
        //desbloqueamos la entrada
      

       //bloqueamos los demas botones de niveles para que no impriman en el canvas hasta recargar
       btnMedio.disabled=true
       btnDificil.disabled=true
       //comparamos la letra de 

      } )

      btnMedio.addEventListener( 'click', function(){
      
        //desbloqueamos la entrada
       

       //bloqueamos los demas botones de niveles para que no impriman en el canvas hasta recargar
       btnFacil.disabled=true,
       btnDificil.disabled=true

       textoamostrar = dificultad.medio
       context.font = '20px serif';
       context.fillText(textoamostrar[0],10,50)
       context.fillText(textoamostrar[1],70,50)
       context.fillText(textoamostrar[2],130,50)
       context.fillText(textoamostrar[3],190,50)
      } )

      btnDificil.addEventListener( 'click', function(){
      
        //desbloqueamos la entrada
       

       //bloqueamos los demas botones de niveles para que no impriman en el canvas hasta recargar
       btnFacil.disabled=true,
       btnMedio.disabled=true

       textoamostrar = dificultad.dificil
       context.font = '20px serif';
       context.fillText(textoamostrar[0],10,50)
       context.fillText(textoamostrar[1],90,50)
       context.fillText(textoamostrar[2],170,50)
       context.fillText(textoamostrar[3],250,50)
       context.fillText(textoamostrar[4],330,50)
       context.fillText(textoamostrar[5],410,50)

      } )
    
      btnReinicio.addEventListener( 'click', function (){
        location.reload();
      } )
      
      btnFacil.addEventListener( 'click', function(){
      //const Facil = "Este Texto es el facil si no"
       
      } )

let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    btnReinicio=document.getElementById('btnReinicio'),
    posX=50
    posY=400

    /*dificultad = {
      "facil":["a","s","d","f"],
      "medio":["qaz","wsx","edc","rfv"], sin cambios
    },
    */
    dificultad = {
      "facil":["a","s","d","f"],
      "medio":["qaz","wsx","edc","rfv"],
      "dificil":["Kiet","saKi","HieLo","AsKo","KrikO","AsLa"]
    },
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
    entrada= document.getElementById('Entrada'),
    entrada.disabled=true,

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
        context.fillText(textoamostrar[pos],10,50)

        context.font = '20px serif';
        context.fillText(textoamostrar[0],10,50)
        context.fillText(textoamostrar[1],70,50)
        context.fillText(textoamostrar[2],130,50)
        context.fillText(textoamostrar[3],190,50)
        
        //desbloqueamos la entrada
       entrada.disabled=false

       //bloqueamos los demas botones de niveles para que no impriman en el canvas hasta recargar
       btnMedio.disabled=true
       btnDificil.disabled=true

      } )

      btnMedio.addEventListener( 'click', function(){
      
        //desbloqueamos la entrada
       entrada.disabled=false

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
       entrada.disabled=false

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


      } )
    
      btnReinicio.addEventListener( 'click', function (){
        location.reload();
      } )
      
      btnFacil.addEventListener( 'click', function(){
      //const Facil = "Este Texto es el facil si no"
       
      } )
      
      /* window.addEventListener( 'keydown', function(e){
      
       let tecla = e.code.split("Key")
      console.log(textoamostrar[pos],tecla[1])
      if(textoamostrar[pos]==tecla[1].toLowerCase()){
        console.log("teclacorrecta")
      }else{
        console.log("teclaincorrecta")
      }
       })
       */
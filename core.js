let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    btnReinicio=document.getElementById('btnReinicio'),

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

      } )

      btnDificil.addEventListener( 'click', function(){
      
        //desbloqueamos la entrada
       entrada.disabled=false

       //bloqueamos los demas botones de niveles para que no impriman en el canvas hasta recargar
       btnFacil.disabled=true,
       btnMedio.disabled=true

      } )
    
      btnReinicio.addEventListener( 'click', function (){
        location.reload();
      } )
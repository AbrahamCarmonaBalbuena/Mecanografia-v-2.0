let canvas2 = document.getElementById('canvas2')
    context1 = canvas2.getContext('2d')
let dedo = dedos 

let canvas3 = document.getElementById('canvas3')
    context2 = canvas3.getContext('2d')


let canvas4 = document.getElementById('canvas4')
    cxt2 = canvas4.getContext('2d')
    imagen2= new Image()
    imagen2.src="Lesabes.png"

let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    imagen1= new Image()
    imagen1.src ="dedos-y-teclas-para-mecanografia.jpg"

    btnReinicio=document.getElementById('btnReinicio'),
    posX=50
    posY=400
    equivocaciones=0
   
    dificultad = {
      facil:["A","S","D","F",""],
      medio:["A","W","D","R","J","I", "L","P", ""],
      dificil:["Q","X","E","V","T","N","U","J","O","L","A","H","F","K",""]
    },
    
    finalizado =["Completado"]
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
        context.drawImage(imagen1,0,50);
        textoamostrar = dificultad.facil
        context.font = '20px serif';
        context.fillText(textoamostrar[0],400,50)
        
        
        window.document.addEventListener('keydown', function (e){
          let arrayletra = e.code.split('Key')
          let letra =''
          
          if(arrayletra.length==2)
          {
            context.drawImage(imagen1,0,50);
            letra = arrayletra[1]
            context.beginPath();
            context.save();
            context.fillStyle=color_dedo[dedo[letra]].color
            context.fillRect(color_dedo[dedo[letra]].posX,color_dedo[dedo[letra]].posY,color_dedo[dedo[letra]].height,color_dedo[dedo[letra]].width)
            context.restore();
            context.closePath();
          }

          else
          {
            letra = arrayletra[0]
          }
          
          if(textoamostrar[pos] == letra){
          pos++
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(imagen1,0,50); 
          if(pos == 4)
          {       
            context2.font = '20px serif';
            context1.font = '20px serif';
            context.fillText(finalizado[0],350,50);
            context1.fillText(usuario2,50,25);
            context2.fillText(equivocaciones,70,25);
            cxt2.drawImage(imagen2,0,0); 
          }
          context.fillText(textoamostrar[pos],400,50)
          }
          else{
          console.log('Tecla incorrecta, presionaste:', letra)
          equivocaciones++
          console.log(equivocaciones)
          context.fillText('Debe de presionar', textoamostrar[pos],0,50)
          }
          })    
          
       //bloqueamos los demas botones de niveles para que no impriman en el canvas hasta recargar
       btnMedio.disabled=true
       btnDificil.disabled=true
      } )

      btnMedio.addEventListener( 'click', function(){      

       //bloqueamos los demas botones de niveles para que no impriman en el canvas hasta recargar
       btnFacil.disabled=true,
       btnDificil.disabled=true

       textoamostrar = dificultad.medio
       
       context.drawImage(imagen1,0,50); 
       context.font = '20px serif';
       context.fillText(textoamostrar[0],400,50)

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
         context.drawImage(imagen1,0,50); 
         if(pos == 8)
         {       
           context2.font = '20px serif';
           context1.font = '20px serif';
           context.fillText(finalizado[0],350,50);
           context1.fillText(usuario2,50,25)
           context2.fillText(equivocaciones,70,25)
            
           cxt2.drawImage(imagen2,0,0); 
      
         }
         context.fillText(textoamostrar[pos],400,50)
         }
         else{
         console.log('Tecla incorrecta')
         equivocaciones++
         console.log(equivocaciones)
         }
         })  
      } )

      btnDificil.addEventListener( 'click', function(){
      
        //desbloqueamos la entrada
       

       //bloqueamos los demas botones de niveles para que no impriman en el canvas hasta recargar
       btnFacil.disabled=true,
       btnMedio.disabled=true

       textoamostrar = dificultad.dificil
       context.drawImage(imagen1,0,50); 
       context.font = '20px serif';
       context.fillText(textoamostrar[0],400,50)

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
         context.drawImage(imagen1,0,50); 
         if(pos == 14)
         {       
           context2.font = '20px serif';
           context1.font = '20px serif';
           context.fillText(finalizado[0],350,50);
           context1.fillText(usuario2,50,25)
           context2.fillText(equivocaciones,70,25)            
           cxt2.drawImage(imagen2,0,0); 

         }
         context.fillText(textoamostrar[pos],400,50)
         }
         else{
         console.log('Tecla incorrecta')
         equivocaciones++
         console.log(equivocaciones)
         }
         })  
      } )
    
      btnReinicio.addEventListener( 'click', function (){
        location.reload();
      } )
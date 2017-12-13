$(document).ready(function(){
	$(".views").hide(); 
	setTimeout(function() {
        $(".first").fadeOut(1000, "swing" ,function(){
        	$(".second").show()
        	$(".allLogos").show()
        	$(".allLogos").css({'display':'flex'})});
    },500); 

	$(".button2").click(function(){
		console.log("click");
		$(".second").hide(); 
		$(".allLogos").hide(); 
		$(".third").show(); 
		});

/* Asignar codigo de telefono por pais */
	$('select#country1').on('change',function(){
		$(".inputNum").removeAttr("disabled"); 
    var valor = $(this).val(); 
    $("#basic-addon1").html(valor);
	}); 
 
 /*Habilitar boton next */
	$(".inputNum").keypress(function(){
		var cantNum = $(this).val(); 
		var largeNum= cantNum.length +1 ; 
	if (largeNum == 10){
		$("button#btn-next").removeAttr("disabled");
	}
		
	});

	/*Crear codigo*/
	$("button#btn-next").click(function(){
		console.log("clickNext")
		$("div#codigo").append("<div class='panel panel-default'><div class='panel-heading'>Tu codigo Lab: </div><div class='panel-body'>LAB-232</div></div><button id='btn-ok' class='btn btn-group btn-lg btn-primary'>Ok</button>")


	})

	

});


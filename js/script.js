var positionY;
var scrollTop;

var lastPositionX =0;

$( document ).ready(function() {
    //récupérer les dimension de la fenêtre :
    var hauteurFenetre = $(window).width();
    var largeurFenetre = $(window).height();
    scrollTop = $(window).scrollTop(); //récupérer la "quantité" de scroll
    
////vous pouvez rédiger vos modification ici !



/////Ci-dessous la fonction permettant de déclancher des modifications en fonction du scroll
$(window).on('scroll', function(){
  // Récupère la quantité de scroll vertical
  var scrollTop = $(window).scrollTop() ;
  
  // Calculer l'angle de rotation en fonction du défilement
  var rotationAngle1 = scrollTop / 5;  // Vitesse de rotation pour .mask-1
  var rotationAngle2 = -scrollTop / 10;  // Vitesse inversée et plus lente pour .mask-2
  var rotationAngle3 = scrollTop / 3;   // Vitesse plus rapide pour .mask-3
  var rotationAngle4 = -scrollTop / 15; // Vitesse inversée et plus lente pour .mask-4

  // Appliquer la rotation à .mask-1 (dans le sens normal)
  $(".mask-1,#C4").css({
      "transform": "rotate(" + rotationAngle1 + "deg)"
  });

  // Appliquer la rotation à .mask-2 (dans le sens inverse et plus lente)
  $(".mask-2,#C2").css({
      "transform": "rotate(" + rotationAngle2 + "deg)"
  });

  // Appliquer la rotation à .mask-3 (plus rapide)
  $(".mask-3,#C1").css({
      "transform": "rotate(" + rotationAngle3 + "deg)"
  });

  // Appliquer la rotation à .mask-4 (dans le sens inverse et plus lente)
  $(".mask-4,#C3").css({
      "transform": "rotate(" + rotationAngle4 + "deg)"
  });
});






 $(window).on('mousemove', function(event){
  // Correction de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll
  var positionY = event.pageY - $(window).scrollTop();
  var positionX = event.pageX


  
  var opacityY1 = positionY / $(window).height(); 
  opacityY1 = Math.min(Math.max(opacityY1, 0.5),1);

  var opacityY2 = positionY / $(window).height(); 
  opacityY2 = Math.min(Math.max(opacityY2, 0.6),1);

  var opacityX4 = positionX / $(window).width(); 
  opacityX4 = Math.min(Math.max(opacityX4, 0.5),1);
  
  var opacityX3 = positionX / $(window).width(); 
  opacityX3 = Math.min(Math.max(opacityX3, 0.6),1);

  var scaleMask1 = 1- (positionX / $(window).width()) * 0.5;
  scaleMask1 = Math.max(Math.min(scaleMask1, 1), 0.4);

  var scaleMask3 = 1 - (positionY / $(window).height()) * 0.5;
  scaleMask3 = Math.max(Math.min(scaleMask3, 1), 0.5);

  var scaleMask4 = 1 - (positionX / $(window).width()) * 0.2;
  scaleMask4 = Math.max(Math.min(scaleMask4, 1), 0.5);

  var scaleMask2 = 1- (positionY / $(window).height()) * 0.2;
  scaleMask2 = Math.max(Math.min(scaleMask2, 1), 0.6);

  

  $(".mask-1").css({
    "opacity": opacityY1,
    "transform": "scale(" + scaleMask1 + ")"
   
  });

  $(".mask-4").css({
    "opacity": opacityX4,
          "transform": "scale(" + scaleMask4 + ")"
});

$(".mask-2").css({
"opacity": opacityY2,
  "transform": "scale(" + scaleMask2 + ")"
});

 
  $(".mask-3").css({
      "opacity": opacityX3,
            "transform": "scale(" + scaleMask3 + ")"
  });


  $("#C4").css({
    "transform" : "scale(" + scaleMask1 + ")"
  })
  
  $("#C2").css({
    "transform" : "scale(" + scaleMask2 + ")"
  })

  $("#C3").css({
    "transform" : "scale(" + scaleMask4 + ")"
  })

  $("#C1").css({
    "transform" : "scale(" + scaleMask3 + ")"
  })
});

$(".mask-1,.mask-2,.mask-3").on("click", function() {
  console.log("Click détecté sur :", $(this));
  $(this).toggleClass("active");
  let $this = $(this); // Stocke l'élément cliqué
  $this.addClass("active"); // Ajoute la classe active

  // Après 3 secondes, retire la classe active
  setTimeout(function () {
      $this.removeClass("active");
  }, 5000); // 3000ms = 3 secondes
});





 //////// ///ne rien écrire après ceci
});




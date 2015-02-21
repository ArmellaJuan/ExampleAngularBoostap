
controllers.controller('listExampleController', function($scope) {


	$scope.elementos = [
    {"id":1 , "firstName":"John", "lastName":"Doe", "actividad" : "Carpintero"}, 
    {"id":2 ,"firstName":"Anna", "lastName":"Smith", "actividad" : "Comerciante"}, 
    {"id":3 ,"firstName":"Peter","lastName":"Jones", "actividad" : "Albañil"},
     {"id":4 , "firstName":"John", "lastName":"Doe", "actividad" : "Carpintero"}, 
    {"id":5 ,"firstName":"Anna", "lastName":"Smith", "actividad" : "Comerciante"}, 
    {"id":6 ,"firstName":"Peter","lastName":"Jones", "actividad" : "Albañil"},
     {"id":7 , "firstName":"John", "lastName":"Doe", "actividad" : "Carpintero"}, 
    {"id":8,"firstName":"Anna", "lastName":"Smith", "actividad" : "Comerciante"}, 
    {"id":9 ,"firstName":"Peter","lastName":"Jones", "actividad" : "Albañil"}
	];

	$scope.elementoSeleccionado = null;

	$scope.seleccionar = function(elemento){
		$scope.elementoSeleccionado = elemento;
		console.log("Seleccionando elemento " + elemento.id );
	}     

	  angular.element(document).ready(function () {
            jQuery(document).ready(function() {
                      $('.post').addClass("div-hidden-animation").viewportChecker({
                      classToAdd: 'div-visible-animation animated fadeIn',
                      offset: 100
                      });
              });

    });
});
  

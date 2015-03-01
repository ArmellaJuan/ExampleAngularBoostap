
controllers.controller('peopleController', function($scope) {


	$scope.elementos = [
    {"id":1 , "firstName":"John", "lastName":"Doe", "actividad" : "Carpintero", "resumen" : "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna."}, 
    {"id":2 ,"firstName":"Anna", "lastName":"Smith", "actividad" : "Comerciante", "resumen" : "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna."}, 
    {"id":3 ,"firstName":"Peter","lastName":"Jones", "actividad" : "Albañil", "resumen" : "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna."}, 
     {"id":4 , "firstName":"Mike", "lastName":"Amstrong", "actividad" : "Ingeniero", "resumen" : "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna."}, 
    {"id":5 ,"firstName":"Rebecca", "lastName":"Black", "actividad" : "Profesor", "resumen" : "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna."}, 
    {"id":6 ,"firstName":"Peter","lastName":"Romuals", "actividad" : "Doctor", "resumen" : "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna."}
 
	];

	$scope.elementoSeleccionado = new Object();

  $scope.elementoSeleccionado.id = 0;




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
  

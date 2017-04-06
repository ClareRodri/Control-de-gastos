controladoresModule.controller('AppCtrl',AppCtrl);
function AppCtrl ($scope,$ionicModal){

  function inicializaMontoBase(){
    $scope.montoBase = {
      valor: 0,
      periodoInicial: new Date(),
      periodoFinal: new Date()
    }
  }

  function inicializaSalida(){
    $scope.montoSalida = {
      valor: 0,
      valorMax:0,
      detalle:"",
      fecha: new Date()
    }
  }
  /*----------Registro de monto base----------*/

  $scope.bntAgregarBase = function () {
    inicializaMontoBase();
    $ionicModal.fromTemplateUrl('templates/modal/agregar-base.html', {
      scope: $scope,
      animation: 'fade-in-scale'
    }).then(function(modal) {
      $scope.modalBase = modal;
      $scope.modalBase.show();
    });
  }
  $scope.agregarBase = function(){
    console.log($scope.montoBase.valor);
    console.log(moment($scope.montoBase.periodoInicial).format("DD/MM/YYYY"));
    console.log(moment($scope.montoBase.periodoFinal).format("DD/MM/YYYY"));
  }
  $scope.cerrarBase = function() {$scope.modalBase.hide();};
  /*----------------------------------------*/

  /*----------Registro de monto salida----------*/

  $scope.bntAgregarSalida = function () {
    inicializaSalida();
    // Monto actual

    $scope.montoSalida.valorMax = 10000;
    console.log($scope.montoSalida);
    $ionicModal.fromTemplateUrl('templates/modal/agregar-salida.html', {
      scope: $scope,
      animation: 'fade-in-scale'
    }).then(function(modal) {
      $scope.modalSalida = modal;
      $scope.modalSalida.show();
    });
  }
  $scope.agregarSalida = function () {
    console.log($scope.montoSalida.valor);
    console.log($scope.montoSalida.valorMax);
    console.log($scope.montoSalida.fecha);
    console.log($scope.montoSalida.detalle);
  }
  $scope.cerrarSalida = function() {$scope.modalSalida.hide();};
  /*----------------------------------------*/
  $scope.agregarEntrada = function () {
    alert("Agrega una entrada");
  }
  $scope.crearActividad = function () {
    alert("Agrega una actividad");
  }
  inicializaMontoBase();
  inicializaSalida();
}
AppCtrl.$inject = ['$scope','$ionicModal'];

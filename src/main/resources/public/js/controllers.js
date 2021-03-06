'use strict';

/* Controllers */
myApp.controller('ListarProyectos', ['$scope', '$location', 'myApp.services', function($scope, $location, service) {
	service.getAllProyectos().then(function(object) {
            $scope.proyectos = object.data.data;
        });
        
        $scope.APreCrear = function() {
            service.APreCrear().then(function (object) {
              $location.path(object.data);
            });
        };
        
        $scope.AProyecto = function(id) {
            var label = '_id, nombre, participantes, descripcion'.split(/, */)[0];
            var arg = {};
            arg[label] = JSON.stringify(id);
            service.AProyecto(arg).then(function (object) {
              $location.path(object.data);
            });
        }; 
        
        $scope.AModificar = function(id) {
            var label = '_id, nombre, participantes, descripcion'.split(/, */)[0];
            var arg = {};
            arg[label] = JSON.stringify(id);
            service.AModificar(arg).then(function (object) {
              $location.path(object.data);
            });
        };
}]);
myApp.controller('CrearProyecto', ['$scope', '$location', 'myApp.services', function($scope, $location, service) {
     /* $scope.proy = '';
      service.Crear().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
      });*/
      
      $scope.fProyecto = {};
      $scope.submitted = false;
      $scope.ACrear = function(isValid) {
        $scope.submitted = true;
        if (isValid) {
          service.ACrear($scope.fProyecto).then(function (object) {
            $location.path(object.data);
          });
        }
      };
}]);
myApp.controller('VerProyecto', ['$scope', '$location', '$routeParams', 'myApp.services', function($scope, $location, $routeParams, service) {
      $scope.proy = '';
      service.Proyecto({"_id":$routeParams._id}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
      });
      
      $scope.ABorrar = function(_id) {
        service.ABorrar({"_id":JSON.stringify(_id)}).then(function (object) {
          $location.path(object.data);
        });
      };
      
}]);
myApp.controller('ModificarProyecto',  ['$scope', '$location', '$routeParams', 'myApp.services', function($scope, $location, $routeParams, service) {
      $scope.proy = '';
      service.Modificar({"_id":$routeParams._id}).then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
      });
      
      
      $scope.proyecto = {};
      $scope.submitted = false;
      $scope.AModif = function(isValid) {
        $scope.submitted = true;
        if (isValid) {
          service.AModif($scope.proyecto, {"_id":$routeParams._id}).then(function (object) {
            $location.path(object.data);
          });
        }
      };
}]);
myApp.controller('BorrarProyecto', function($scope, $routeParams) {
	$scope.proyecto = getProyect($routeParams.proyectoId);
});
myApp.controller('AsociarComponente', function($scope, $routeParams) {
	$scope.proyecto = getProyect($routeParams.proyectoId);
});
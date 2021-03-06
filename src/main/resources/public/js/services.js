'use strict';

/* Services */

myApp.service('myApp.services', ['$http', function($http) {
    this.getAllProyectos = function() {
        return $http.get('proyectos/listar');
    };
    
    this.ABorrar = function(args) {
        if(typeof args == 'undefined') {
          return $http.get('proyecto/ABorrar');
        } else {
          return $http({
            url: 'proyecto/ABorrar',
            method: 'GET',
            params: args
          });
        }
    };
    
    this.AModificar = function(args) {
        if(typeof args == 'undefined') {
          return $http.get('proyecto/AModificar');
        } else {
          return $http({
            url: 'proyecto/AModificar',
            method: 'GET',
            params: args
          });
        }
    };
    
    this.Modificar = function(args) {
        if(typeof args == 'undefined') {
          return $http.get('proyecto/Modificar');
        } else {
          return $http({
            url: 'proyecto/Modificar',
            method: 'GET',
            params: args
          });
        }
    };    
    
    
    this.AProyecto = function(args) {
        if(typeof args == 'undefined') {
          return $http.get('proyecto/AProyecto');
        } else {
          return $http({
            url: 'proyecto/AProyecto',
            method: 'GET',
            params: args
          });
        }
    };
    
    this.Proyecto = function(args) {
        if(typeof args == 'undefined') {
          return $http.get('proyecto/Proyecto');
        } else {
          return $http({
            url: 'proyecto/Proyecto',
            method: 'GET',
            params: args
          });
        }
    };
    
    this.Crear = function(args) {
        if(typeof args == 'undefined') {
          return $http.get('proyecto/Crear');
        } else {
          return $http({
            url: 'proyecto/Crear',
            method: 'GET',
            params: args
          });
        }
    };

    this.APreCrear = function(args) {
        if(typeof args == 'undefined') {
          return $http.get('proyecto/APreCrear');
        } else {
          return $http({
            url: 'proyecto/APreCrear',
            method: 'GET',
            params: args
          });
        }
    };
    
    this.ACrear = function(fProyecto) {
        return  $http({
          url: "proyecto/ACrear",
          data: $.param(fProyecto),
          method: 'POST',
          headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        });
    };
    
    
    this.AModif = function(fProyecto, args) {
        return  $http({
          url: "proyecto/AModif",
          data: $.param(fProyecto),
          method: 'POST',
          params: args,
          headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        });
    };
        
}]);


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
        value('version', '0.1');

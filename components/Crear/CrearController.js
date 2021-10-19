
listaApp.controller('CrearController', ['$scope', function($scope) {
    console.log("estamos en crear nueva receta!");

      //Direccionamiento de usuario

      firebase.auth().onAuthStateChanged(function(user){
        if(user){
            $scope.user = user.email;
        }else{
            window.location = "../Login/Login.html"
        }
    });

    //Función de crear

    $scope.crear = function(){
        
        var name = $scope.nameInput;
        var steps = $scope.stepsInput;
        var user = firebase.auth().currentUser;
       


        if(name && steps){
            db.collection(user.email).doc(name).set({
                nombre: name,
                preparacion: steps,
            })
            .then(function(docRef){
                swal("Bien!","Receta guardada!","success");
                $scope.nameInput = undefined;
                $scope.stepsInput = undefined;
                $scope.$apply();
            })
            .catch(function(error){
                console.error(error);
                swal("Error","Problemas en base de datos!","error");
            });


        }else{
            swal("Atención","Faltan diligenciar campos","warning");
        }    

    }  

}]);
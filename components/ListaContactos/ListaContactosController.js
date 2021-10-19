listaApp.controller('ListaContactosController', ['$scope', function($scope) {
    console.log("estamos en lista de recetas");

      //Direccionamiento de usuario

      firebase.auth().onAuthStateChanged(function(user){
        if(user){
            $scope.user = user.email;

      //Código para traer información desde Firebase
        db.collection(user.email).get()
        .then(function(querySnapshot){
            var lista = [];
            querySnapshot.forEach(function(doc){
                //console.log(doc.id, "=>", doc.data());
                lista.push(doc.data());
        });
        $scope.lista = lista;
        $scope.$apply();    
    });
        }else{
            window.location = "../Login/Login.html"
        }
    });



    // Crear una función para eliminar un contacto

    $scope.eliminar = function(nombre){

        swal({
            title: "Está seguro?",
            text: "Una vez eliminado, no lo prodrás recuperar!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })


          .then((willDelete) => {   
            if (willDelete) {
                db.collection("lista").doc(nombre).delete()
                .then(function(){
                    swal("Receta eliminada","","success");
                    location.reload();
                })
                .catch(function(error){
                    console.error(error);
                })
            } else {
              
            }
          });        
    }

    //Cerrar sesion usuaario

    $scope.salir = function(){
        swal({
            title: "Cerrar sesión",
            text: "Está seguro de salir?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willLogout) => {   
            if (willLogout) {
                firebase.auth().signOut()
                .then(function(){})
                .catch(function(error){
                    console.log(error);
                })
            } else {
              
            }
          }); 
    }
}]);
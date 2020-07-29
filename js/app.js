(function(){
    angular.module("loginApp", [])
    .controller("loginController", loginController);

    function loginController(){
        var ctrl = this;
        ctrl.name = "";
        ctrl.pass = "";
        ctrl.logSTAT = 0;
        ctrl.submit = function(){
            if(ctrl.name==="tedx" && ctrl.pass==="pass")
                ctrl.logSTAT = 1;
        }
    }

})()
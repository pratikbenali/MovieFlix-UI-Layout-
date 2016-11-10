(function (){
    "use strict";

    angular
        .module("movie")
        .filter("phone",phoneFilter);
    
    function phoneFilter() {
         return function (phoneStr) {
             var rez = [];

             if(phoneStr.length !== 10)
             {
                 return " ";
             }

             rez.push("(");
             rez.push(phoneStr.substring(0, 3));
             rez.push(")");
             rez.push(phoneStr.substring(3, 6));
             rez.push("-");
             rez.push(phoneStr.substring(6));

             rez.join("");
         };
    }

})();

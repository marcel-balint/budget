var budgetController = (function () {
    var x = 23;
    var add = function (a) {
        return x + a
    }

    return {
        publicTest: function (b) {
            return add(b);
        }
    }
})();


var UIController = (function () {


})();


var controller = (function (budgetCtrl, UICtrl) {

    var z = budgetController.publicTest(6);

    return {
        anotherPublic: function () {
            console.log(z);
        }
    }

})(budgetController, UIController);
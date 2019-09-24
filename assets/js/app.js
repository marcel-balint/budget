//Budget Cotroller
var budgetController = (function () {

})();


//UI Controller
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    }

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },

        getDOMstrings: function () {

            return DOMstrings;
        }
    }

})();


//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();
    var ctrlAddItemFunction = function () {

        //get input data
        var input = UICtrl.getInput();
        console.log(input);


        //add item to budget controller


        //add item to UI


        //calculate the budget


        //display the budget on UI

    };

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItemFunction);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {

            ctrlAddItemFunction();
        }

    });

})(budgetController, UIController);
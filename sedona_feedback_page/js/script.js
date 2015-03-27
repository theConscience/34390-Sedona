(function() {
    var plus = document.querySelectorAll('.counter-action.plus');
    var minus = document.querySelectorAll('.counter-action.minus');
    console.log(plus);

    [].forEach.call(plus, function(button){
       button.addEventListener("click", function(event) {
            event.preventDefault();
            console.log('plus');
            var val = this.parentNode.querySelector(".counter-input").value;
            val = parseInt(val, 10);
            this.parentNode.querySelector(".counter-input").value = val;
            this.parentNode.querySelector(".counter-input").value += 1;
            console.log(val);
        });
    });

    [].forEach.call(minus, function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            console.log('plus');
            this.parentNode.querySelector(".counter-input").value -= 1;
        });
    });
})();


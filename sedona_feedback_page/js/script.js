(function() {
    var plus = document.querySelectorAll('.counter-action.plus');
    var minus = document.querySelectorAll('.counter-action.minus');
    var inputs = document.querySelectorAll('input[type=text]');
    var adults = document.querySelector('.people-count');
    var children = document.querySelector('.children-count');
    console.log(adults, children);

    [].forEach.call(plus, function(button){
       button.addEventListener("click", function(event) {
            event.preventDefault();
            console.log('plus');
            var val = this.parentNode.querySelector(".counter-input").value;
            this.parentNode.querySelector(".counter-input").value = parseInt(val) + 1;
            console.log(val);
        });
    });

    [].forEach.call(minus, function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            console.log('plus');
            var val = this.parentNode.querySelector(".counter-input").value;
            this.parentNode.querySelector(".counter-input").value = parseInt(val) - 1;
        });
    });

    [].forEach.call(inputs, function(button) {
        button.addEventListener("keyup", function(event) {
            event.preventDefault();
            console.log('change input');
            var val = Number(this.value);
            console.log(val);
            console.log(typeof val);
            if (isNaN(val)) {
                console.log('please enter Number!');
                this.value = '';
            } else {
                console.log('thank you!');
            }
        });
    });

    adults.addEventListener("change", function(event) {
        event.preventDefault();
        console.log('change adults count');
    });

    children.addEventListener("change", function(event) {
        event.preventDefault();
        console.log('change children count');
    });

})();

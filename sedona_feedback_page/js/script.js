(function () {
    var plus = document.querySelectorAll('.counter-action.plus');
    var minus = document.querySelectorAll('.counter-action.minus');
    var inputs = document.querySelectorAll('.people-count, .children-count, .travel-time');

    //var adults = document.querySelector('.people-count');
    //var children = document.querySelector('.children-count');

    /*

    function checkData() {
        console.log(this);
        var val = parseInt(this.value);
        var data = this.dataset;
        var min = parseInt(data.min);
        if (val < min) {
            this.value = min;
            alert("this value should be positive");
        }
    }

    children.addEventListener("click", checkData);

    function filter(element) {
        var val = parseInt(element.value);
        if (element.classList.contains('people-count')) {
            if (parseInt(element.value) < 1) {
                val = 1;
                alert('must be at least 1 adult');
            }
            element.value = val;
            console.log('adults count changed');

        } else if (element.classList.contains('children-count')) {
            if (val < 0) {
                val = 0;
                alert("you can't take negative children with you!");
            }
            element.value = val;
            console.log('children count changed');

        } else if (element.classList.contains('travel-time')) {
            if (val < 0) {
                val = 0;
                alert("you can't travel back in time!");
            }
            element.value = val;
            console.log('travel time changed');
        }
    }

    // */

    function filterData(element) {
        var val = parseInt(element.value);
        var data = element.dataset;
        var min = parseInt(data.min);
        //console.log(min);
        if (val < min) {
            element.value = min;
            alert("this value should be " + min + 'or highter!');
        }
    }


    [].forEach.call(plus, function(button){
       button.addEventListener("click", function(event) {
           event.preventDefault();
           //console.log('plus');
           var val = this.parentNode.querySelector(".counter-input").value;
           val = (val == "") ? 0 : val;
           this.parentNode.querySelector(".counter-input").value = parseInt(val) + 1;
           //filter(this.parentNode.querySelector(".counter-input"));
           filterData(this.parentNode.querySelector(".counter-input"));
        });
    });

    [].forEach.call(minus, function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            console.log('minus');
            var val = this.parentNode.querySelector(".counter-input").value;
            val = (val == "") ? 0 : val
            this.parentNode.querySelector(".counter-input").value = parseInt(val) - 1;
            //filter(this.parentNode.querySelector(".counter-input"));
            filterData(this.parentNode.querySelector(".counter-input"));
        });
    });

    [].forEach.call(inputs, function(button) {
        button.addEventListener("input", function(event) {
            event.preventDefault();
            console.log('change input');
            var val = this.value;
            if (isNaN(val)) {
                console.log('please enter Number!');
                this.value = '';
            } else {
                //filter(this);
                filterData(this);
            }
        });
    });

})();

(function () {
    // menu-collape on click classlist add collapsed

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

    var plus = document.querySelectorAll('.counter-action.plus');
    var minus = document.querySelectorAll('.counter-action.minus');
    var inputs = document.querySelectorAll('.people-count, .children-count, .travel-time');
    var area = document.querySelector('.step2');
    var child_template = document.querySelector('#child_template').innerHTML;
    var adult_template = document.querySelector('#adult_template').innerHTML;
    var prev_adult_val = 0;
    var prev_children_val = 0;


    function filterData(element) {
        //console.log("filter working on \n" + element);
        var val = parseInt(element.value);
        var data = element.dataset;
        var min = parseInt(data.min);

        if (val < min) {
            element.value = min;
            val = element.value;
            alert("this value should be " + min + ' or highter!');
        }

        var ticket_type = "";
        var action = "";
        var counter = 0;

        if (element.classList.contains('people-count')) {
            ticket_type = 'adult';
            var adult_diff = val - prev_adult_val;
            counter = Math.abs(adult_diff);
            action = (adult_diff > 0) ? "add" : "remove";
        } else if (element.classList.contains('children-count')) {
            ticket_type = 'child';
            var children_diff = val - prev_children_val;
            counter = Math.abs(children_diff);
            action = (children_diff > 0) ? "add" : "remove";
        }
        //console.log('counter of cycle = ' + counter);
        if (action == "add") {
            for (var i = 1; i <= counter; i++) {
                console.log('adding element');
                if (ticket_type == 'adult') {
                    var new_val = prev_adult_val + i;
                    //console.log("prev_adult_val = " + prev_adult_val);
                    //console.log("new_val = " + new_val);
                    var html = Mustache.render(adult_template, {
                        "number" : new_val
                    });
                    var div = document.createElement("div");
                    div.classList.add("row");
                    div.classList.add("adult" + new_val);
                    div.innerHTML = html;
                    area.appendChild(div);
                } else if (ticket_type == "child") {
                    var new_val = prev_children_val + i;
                    //console.log("prev_children_val = " + prev_children_val);
                    //console.log("new_val = " + new_val);
                    var html = Mustache.render(child_template, {
                        "number" : new_val
                    });
                    var div = document.createElement("div");
                    div.classList.add("row");
                    div.classList.add("child" + new_val);
                    div.innerHTML = html;
                    area.appendChild(div);
                } else {
                    break
                }
            }

        } else if (action == "remove") {
            var new_val = 0;
            for (var i = 1; i <= counter; i++) {
                console.log("removing element");
                if (ticket_type == "adult") {
                    new_val = prev_adult_val - i;
                    //console.log("prev_adult_val = " + prev_adult_val);
                    //console.log("new_val = " + new_val);
                    var deletion = area.querySelector(".adult" + (new_val+1));
                    //console.log("adult" + (new_val+1) + " deleted");
                    //console.log(deletion);
                    area.removeChild(deletion);
                } else if (ticket_type == 'child') {
                    new_val = prev_children_val - i;
                    //console.log("prev_adult_val = " + prev_children_val);
                    //console.log("new_val = " + new_val);
                    var deletion = area.querySelector(".child" + (new_val+1));
                    //console.log("child" + (new_val+1) + " deleted");
                    //console.log(deletion);
                    area.removeChild(deletion);
                }
            }
        } else {
            console.log('WTF??!?!?');
        }

        if (ticket_type == "adult") {
            prev_adult_val = (new_val < min) ? min : new_val;
        } else if (ticket_type == "child") {
            prev_children_val = (new_val < min) ? min : new_val;
        }
    }


    [].forEach.call(plus, function(button){
       button.addEventListener("click", function(event) {
           event.preventDefault();
           console.log('\n----------\nplus');
           var val = this.parentNode.querySelector(".counter-input").value;
           val = (val == "") ? 0 : val;
           this.parentNode.querySelector(".counter-input").value = parseInt(val) + 1;
           //filter(this.parentNode.querySelector(".counter-input"));
           filterData(this.parentNode.querySelector(".counter-input"));
           console.log('value was increased!');
        });
    });


    [].forEach.call(minus, function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            console.log('\n----------\nminus');
            var val = this.parentNode.querySelector(".counter-input").value;
            val = (val == "") ? 0 : val
            this.parentNode.querySelector(".counter-input").value = parseInt(val) - 1;
            //filter(this.parentNode.querySelector(".counter-input"));
            filterData(this.parentNode.querySelector(".counter-input"));
            console.log('value was decreased!');
        });
    });


    [].forEach.call(inputs, function(button) {
        button.addEventListener("input", function(event) {
            event.preventDefault();
            console.log('\n----------\nchange input');
            var val = this.value;
            if (isNaN(val)) {
                console.log('please enter Number!');
                this.value = '';
            } else {
                //filter(this);
                filterData(this);
                console.log('create many inputs');
            }
        });
    });

})();


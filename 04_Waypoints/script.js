const one = document.querySelector(".container1");
const two = document.querySelector(".container2");

const firstWP = new Waypoint({
    element: one,
    handler: function (direction) {
        if (direction == "down") {
            alert("Are you sure ? Things are wild down there");
        }
    },
    offset: "-100%",
});

const secondWP = new Waypoint({
    element: two,
    handler: function (direction) {
        if (direction == "up") {
            alert("I told you !");
        }
    },
    
});

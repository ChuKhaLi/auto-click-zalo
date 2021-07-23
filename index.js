// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(2);
setTimeout(() => {
    // var position = robot.getMousePos();
    // console.log(position.x, position.y);
    for (var i = 0; i < 1000; i++){
        robot.moveMouse(311, 685);
        robot.mouseClick();
    }
}, 5000);

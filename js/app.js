
// 01. Enemy object

// Enemies our player must avoid
var Enemy = function(x,y) {
    this.x = x;
    this.y = y;
    this.speed = getRandomInt(100,300);

    this.bug = 'images/enemy-bug.png';
};

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}
//getting the random integer. floor gives the integer. 
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  if(this.x < 500){
        this.x += this.speed * dt;
    } else {
        this.x = -Math.random() * 300;
    }
//constantly updating the x coordinate. if less than 500 keep updating
//if above 500 push it back to 300*- random...
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.bug), this.x, this.y);
};
//already set the bug's initial location in each enemy obj.


// 02.FLY
//FLY
var Fly = function(x,y) {
    this.x = x;
    this.y = y;
    this.speed = getRandomInt(500,900);
    this.fly = 'images/char-horn-girl.png';
};
Fly.prototype.update = function(dt){
    if(this.x > -50){
        this.x += (-this.speed) *dt;
    } else {
        this.x = 3000 + Math.random()*100; 
    };
    };
Fly.prototype.render = function() {
    ctx.drawImage(Resources.get(this.fly), this.x, this.y);
};

// 03. Player

// Now write your own player class
var Player = function() {
    this.x = 202;
    this.y = 404;
    this.player = 'images/char-boy.png';

    this.scoreGreen = 0;
    this.scoreBlue = 0;
    this.scoreOrange = 0;
};

Player.prototype.update =function(dt) {
    if (this.y === -11 && (gem.x-this.x)===20 ){
        
        this.reset();
    };
   
if ( (player.x - gem.x) < 10 &&
        (player.x - gem.x) > -21 &&
    (player.y - gem.y) < 10 &&
    gem.Color === 'green'){
        this.scoreGreen += 1;}
    else if 
        ((player.x - gem.x) < 10 &&
            (player.x - gem.x) > -21 &&
        (player.y - gem.y) < 10 &&
        gem.Color === 'blue'){
        this.scoreBlue += 1;}
    else if 
        ((player.x - gem.x) < 10 &&
            (player.x - gem.x) > -21 &&
        (player.y - gem.y) < 10 &&
        gem.Color === 'orange'){
        this.scoreOrange += 1;}
             


             };

//resets when you get there.
//reset is defined below. it is just basically bringing it back to 202,404

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

Player.prototype.handleInput = function(key) {

        if (this.x > 0 && key === 'left' ){
            this.x -= 101;
        } else if (this.x < 404 && key === 'right'){
            this.x += 101;
        } else if (this.y !== 404 && key === 'down'){
            this.y += 83;
        } else if (this.y !== -11 && key === 'up'){
            this.y -= 83;
        }
}
//
Player.prototype.reset = function() {
        this.x = 202;
        this.y = 404;

                // Once it's resetted, gem shows up in random location
        gem.x = [20, 121, 222, 323, 424][getRandomInt(0,4)];
        gem.y = [281, 198, 115, 32][getRandomInt(0,3)];
        gem.Color = ['green', 'blue', 'orange'][getRandomInt(0,2)];
}
// the gems get in to the new position when player resets.
// This class requires an update(), render() and
// a handleInput() method.

// 04. GEM

var Gem = function(color){
    this.x = [20, 121, 222, 323, 424][getRandomInt(0,4)];
    this.y = [281, 198, 115, 32][getRandomInt(0,3)];
    this.Color = color;
    this.gemColor;

    this.gemGreen = 'images/Gem Green.png',
    this.gemBlue = 'images/Gem Blue.png',
    this.gemOrange = 'images/Gem Orange.png'
}

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.gemGreen), 207, 530, 32, 54);
    ctx.drawImage(Resources.get(this.gemBlue), 308, 530, 32, 54);
    ctx.drawImage(Resources.get(this.gemOrange), 409, 530, 32, 54);
};


Gem.prototype.update = function() {
    if (this.Color === 'green')
        this.gemColor = 'images/Gem Green.png';
    else if (this.Color === 'blue')
        this.gemColor = 'images/Gem Blue.png';
    else if (this.Color === 'orange')
        this.gemColor = 'images/Gem Orange.png';

    ctx.drawImage(Resources.get(this.gemColor), this.x, this.y, 61, 103);
    // Scoreboard for gem collection
    ctx.font = "24px helvetica";
    player.scoreGreen >= 3 ? ctx.fillStyle = 'yellow' : ctx.fillStyle = 'black';
    ctx.fillText(player.scoreGreen + "/3", 248, 574);

    player.scoreBlue >= 3 ? ctx.fillStyle = 'yellow' : ctx.fillStyle = 'black';
    ctx.fillText(player.scoreBlue + "/3", 248 + 101, 574);

    player.scoreOrange >= 3 ? ctx.fillStyle = 'yellow' : ctx.fillStyle = 'black';
    ctx.fillText(player.scoreOrange + "/3", 248 + 202, 574);
    ctx.fillStyle = 'black';
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

// This function select random property from the object for colorSelector
// function.
function randomProperty(obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

// This function select random color
function colorSelector(){
    var colors = {
        green: 'green',
        blue: 'blue',
        orange: 'orange'
        };
    return randomProperty(colors);
}

var gem = new Gem(colorSelector());


var allEnemies = [];
var enemy1=new Enemy(-101,62); allEnemies.push(enemy1);
var enemy2=new Enemy(-101,145); allEnemies.push(enemy2);
var enemy3=new Enemy(-101,228); allEnemies.push(enemy3);
var enemy4=new Enemy(-101,62); allEnemies.push(enemy4);
var enemy5=new Enemy(-202,145); allEnemies.push(enemy5);
var enemy6=new Enemy(-1303,62); allEnemies.push(enemy6);


var allFlies = [];
var fly1=new Fly(4500,62); allFlies.push(fly1);
var fly2=new Fly(5500,145); allFlies.push(fly2);
var fly3=new Fly(3500,228); allFlies.push(fly3);

// Place the player object in a variable called player

var player = new Player();
    // Load images of characters
   
   
// 05. LIFE

var Life = function(){
    this.x = [20, 121, 222, 323, 424][getRandomInt(0,4)];
    this.y = [281, 198, 115, 32][getRandomInt(0,3)];
    this.life = "images/Heart.png";

}

Life.prototype.render = function() {
    ctx.drawImage(Resources.get(this.life), 106, 530, 32, 54);
};


Life.prototype.update = function() {


    ctx.drawImage(Resources.get(this.life), this.x, this.y, 61, 103);
    // Scoreboard for gem collection
    ctx.font = "24px helvetica";
    player.scoreGreen >= 3 ? ctx.fillStyle = 'yellow' : ctx.fillStyle = 'black';
    ctx.fillText(player.scoreGreen + "/3", 248, 574);

    player.scoreBlue >= 3 ? ctx.fillStyle = 'yellow' : ctx.fillStyle = 'black';
    ctx.fillText(player.scoreBlue + "/3", 248 + 101, 574);

    player.scoreOrange >= 3 ? ctx.fillStyle = 'yellow' : ctx.fillStyle = 'black';
    ctx.fillText(player.scoreOrange + "/3", 248 + 202, 574);
    ctx.fillStyle = 'black';
};






// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

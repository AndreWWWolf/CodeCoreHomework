// initiliaze turtle class
class Turtle {
    // turtle class contructor 
    constructor(xAxis, yAxis) {
        this.moveHistory = [
            [xAxis, yAxis]
        ];
        this.currentDirection = "Right";
    }
    //forward method 
    forward(steps) {
        this.currentPosition = this.moveHistory[this.moveHistory.length - 1]
        switch (this.currentDirection) {

            case "Right":
                for (let i = 0; i < steps; i += 1) {
                    this.moveHistory.push([(this.currentPosition[0] + 1), this.currentPosition[1]]);
                    this.currentPosition = [(this.currentPosition[0] + 1), this.currentPosition[1]];
                }
                return this;
                break;

            case "Down":
                for (let i = 0; i < steps; i += 1) {
                    this.moveHistory.push([this.currentPosition[0], (this.currentPosition[1] + 1)]);
                    this.currentPosition = [this.currentPosition[0], (this.currentPosition[1] + 1)];
                }
                return this;
                break;

            case "Left":
                for (let i = 0; i < steps; i += 1) {
                    this.moveHistory.push([(this.currentPosition[0] - 1), this.currentPosition[1]])
                    this.currentPosition = [(this.currentPosition[0] - 1), this.currentPosition[1]]
                }
                return this;
                break;

            case "Up":
                for (let i = 0; i < steps; i += 1) {
                    this.moveHistory.push([this.currentPosition[0], (this.currentPosition[1] - 1)]);
                    this.currentPosition = [this.currentPosition[0], (this.currentPosition[1] - 1)];
                }
                return this;
                break;
        }
    }
 //case for right method
    right() {
        switch (this.currentDirection) {

            case "Up":
                this.currentDirection = "Right";
                return this;
                break;

            case "Right":
                this.currentDirection = "Down";
                return this;
                break;

            case "Down":
                this.currentDirection = "Left";
                return this;
                break;

            case "Left":
                this.currentDirection = "Up";
                return this;
                break;
        }
    }
    //case for left method
    left() {
        switch (this.currentDirection) {

            case "Up":
                this.currentDirection = "Left";
                return this;
                break;

            case "Right":
                this.currentDirection = "Up";
                return this;
                break;

            case "Down":
                this.currentDirection = "Right";
                return this;
                break;

            case "Left":
                this.currentDirection = "Down";
                return this;
                break;
        }
    }
    // returns move history
    allPoints() {
        return this.moveHistory;
    }
    //print method
    print() {
 
        this.xMax = this.moveHistory[0][0];
        this.yMax = this.moveHistory[0][1];
        this.xMin = this.moveHistory[0][0];
        this.yMin = this.moveHistory[0][1];

        for (let i = 0; i < this.moveHistory.length; i += 1) {
            if (this.moveHistory[i][0] > this.xMax) {
                this.xMax = this.moveHistory[i][0];
            }
            if (this.moveHistory[i][0] < this.xMin) {
                this.xMin = this.moveHistory[i][0];
            }
        }

        for (let i = 0; i < this.moveHistory.length; i += 1) {
            if (this.moveHistory[i][1] > this.yMax) {
                this.yMax = this.moveHistory[i][1];
            }
            if (this.moveHistory[i][1] < this.yMin) {
                this.yMin = this.moveHistory[i][1];
            }
        }

        this.cordinates = [];
        for (let i = 0; i < this.moveHistory.length; i += 1) {
            this.cordinates.push(this.moveHistory[i].toString());
        }

        this.grid = "";

        for (let i = (this.yMin - 1); i <= this.yMax; i += 1) {
            for (let n = this.xMin; n <= (this.xMax + 1); n += 1) {
                if (this.cordinates.includes(`${n},${i}`)) {   
                    this.grid += ` ■ `;
                } else {  
                    this.grid += ` □ `;
                }
            }   
            this.grid += "\n";
        }
        
        console.log(this.grid);
    }
}


// TEST CASES FOR ALL FUNCTIONS
const flash = new Turtle(2, 1).forward(1).left().forward(4);
flash.print();
console.log(flash.allPoints());

console.log("\n");

new Turtle(0, 0)
  .forward(4)
  .left()
  .forward(1)
  .right()
  .forward(3)
  .right()
  .forward(5)
  .right()
  .forward(2)
  .right()
  .forward(1)
  .left()
  .forward(5)
  .print()

console.log("\n");

new Turtle(0, 0)
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .print()
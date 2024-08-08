import Gameboard from "./gameboard";
import _ from "lodash";

class Player {
    constructor(name)
    {
        this.name = name || "Player 1";
        this.gameboard = new Gameboard();
    }
}

class Computer extends Player {
    constructor(name)
    {
        super(name);
        this.name = "Computer";
    }
}

export default Player;
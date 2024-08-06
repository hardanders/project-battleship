class Ship {
    constructor(length = 0){
        this.length = length;
        this.hits = 0;
        this.vertical = true;
    }
    hit()
    {
        return this.hits++;
    }
    isSunk()
    {
        return this.hits > this.length ? true : false; 
    }
}

module.exports = { Ship };
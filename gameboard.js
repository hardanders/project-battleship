class Gameboard {
    constructor(size = 10) 
    {
        this.size = size;
        this.cellCount = this.size * this.size;
        this.board = this.#buildBoard();
    }

    #buildBoard()
    {
        let cellArray = [];
        for (let i = 0; i < this.size; i++)
        {
            for (let j = 0; j < this.size; j++)
            {
                cellArray.push({ "coords":[i,j], "occupied": false });
            }
        }
        return cellArray;
    }
    placePiece(ship, pos)
    {
        if (this.board[Number(pos[0].toString() + pos[1].toString())].occupied) return false;
        else
        {
            let occupiedArray = [...this.#addXorY(ship, pos)];
            occupiedArray.forEach(coord => this.board[Number(coord[0].toString() + coord[1].toString())].occupied = true);
            return true;
        }
    }
    #addXorY(ship, pos)
    {
        let coord = pos;
        let shipArray = []
        if (ship.vertical === true)
        {
            for (let i = 0; i < ship.length; i++)
            {
                shipArray.push([coord[0], coord[1] + i]);
            }
        } 
        else if (ship.vertical === false)
        {
            for (let i = 0; i < ship.length; i++)
            {
                shipArray.push([coord[0] + i, coord[1]]);
            }
        }
        return [...shipArray];
    }
}

module.exports = { Gameboard };
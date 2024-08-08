import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

let board1 = new Gameboard(10);

test("creation of cells", () => {
    expect(board1.cellCount).toBe(100)
});

test("creation of gameboard", () => {
    expect(board1.board[99].coords).toEqual([9,9]);
});

test("placing a ship", () => {
    let mockShip = new Ship(5); 
    expect(board1.placePiece(mockShip, [4,4])).toBeTruthy();
    expect(board1.board[44].occupied).toBeTruthy();
});

test("denying access to cell", () => {
    expect(board1.board[44]).not.toBeTruthy;
});

test("applying ship to group of cells", () => {
    let mockShip = new Ship(5);
    board1.placePiece(mockShip, [2,5])
    expect(board1.board[25].occupied).toBeTruthy();
    expect(board1.board[26].occupied).toBeTruthy();
    expect(board1.board[27].occupied).toBeTruthy();
    expect(board1.board[28].occupied).toBeTruthy();
    expect(board1.board[29].occupied).toBeTruthy();
})

test("applying ship to group of cells", () => {
    expect(board1.board[30].occupied).not.toBeTruthy();
})

test("returning an array of occupied cells", () => {
    let mockShip = new Ship(5);
    mockShip.vertical = false;
    expect(board1.placePiece(mockShip, [1,0])).toBeTruthy();
    expect(board1.board[10].occupied).toBeTruthy();
    expect(board1.board[20].occupied).toBeTruthy();
    expect(board1.board[30].occupied).toBeTruthy();
    expect(board1.board[40].occupied).toBeTruthy();
    expect(board1.board[50].occupied).toBeTruthy();
})

test("hitting a cell and returning true if hit, and false if not", () => {
    expect(board1.receiveHit([1,0])).toMatch("Target has been hit!");
    expect(board1.receiveHit([1,0])).toMatch("Target cell already hit")
})

test("verifying the ship is registering the hit",() => {
    let ship = board1.board[10].occupied;
    expect(ship.hits).toEqual(1);
    board1.receiveHit([2,0])
    expect(ship.hits).toEqual(2);
})

test("rejecting a shot on a hit cell and returning false", () => {
    expect(board1.receiveHit([2,0])).toMatch("Target cell already hit");
})

test("missing a shot and adding to missed array", () => {
    expect(board1.receiveHit([2,1])).toMatch("Target missed!");
    expect(board1.missed).toEqual([[2,1]]);
})

test("returning number of ships on the board", () => {
    expect(board1.getRemaining()).toEqual(3);
})

test("adding another ship", () => {
    let ship3 = new Ship(3);
    board1.placePiece(ship3, [7,0]);
    expect(board1.board[70].occupied).toBeTruthy();
    expect(board1.board[71].occupied).toBeTruthy();
    expect(board1.board[72].occupied).toBeTruthy();
    expect(board1.board[73].occupied).not.toBeTruthy();
    expect(ship3.occupies).toEqual([[7,0],[7,1],[7,2]]);
})

test("returning number of ships on the board", () => {
    expect(board1.getRemaining()).toEqual(4);
})
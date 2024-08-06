import { Gameboard } from "./gameboard.js";

let board1 = new Gameboard(10);

test("creation of cells", () => {
    expect(board1.cellCount).toBe(100)
});

test("creation of gameboard", () => {
    expect(board1.board[99].coords).toEqual([9,9]);
});

test("placing a ship", () => {
    expect(board1.placePiece({ length: 5, hits: 0, vertical: true }, [4,4])).toBeTruthy();
});

test("denying access to cell", () => {
    expect(board1.placePiece({ length: 5, hits: 0, vertical: true }, [4,4])).not.toBeTruthy();
});
test("applying ship to group of cells", () => {
    board1.placePiece({ length: 5, hits: 0, vertical: true }, [2,5])
    expect(board1.board[25].occupied).toBeTruthy();
})

test("applying ship to group of cells", () => {
    expect(board1.board[26].occupied).toBeTruthy();
})

test("applying ship to group of cells", () => {
    expect(board1.board[27].occupied).toBeTruthy();
})

test("applying ship to group of cells", () => {
    expect(board1.board[28].occupied).toBeTruthy();
})

test("applying ship to group of cells", () => {
    expect(board1.board[29].occupied).toBeTruthy();
})

test("applying ship to group of cells", () => {
    expect(board1.board[30].occupied).not.toBeTruthy();
})

test("returning an array of occupied cells", () => {
    expect(board1.placePiece({ length: 5, hits: 0, vertical: false }, [1,0])).toBeTruthy();
})

test("applying horizontal ship to group of cells", () => {
    expect(board1.board[10].occupied).toBeTruthy();
})

test("applying horizontal ship to group of cells", () => {
    expect(board1.board[20].occupied).toBeTruthy();
})

test("applying horizontal ship to group of cells", () => {
    expect(board1.board[30].occupied).toBeTruthy();
})

test("applying horizontal ship to group of cells", () => {
    expect(board1.board[40].occupied).toBeTruthy();
})

test("applying horizontal ship to group of cells", () => {
    expect(board1.board[50].occupied).toBeTruthy();
})

test("hitting a cell and returning true", () => {
    expect(board1.receiveHit([1,0])).toBeTruthy();
})

test("verifying the ship is registering the hit",() => {
    let ship = board1.board[10].occupied;
    expect(ship.hits).toEqual(1);
})

test("hitting a cell and returning true", () => {
    expect(board1.receiveHit([2,0])).toBeTruthy();
})

test("verifying the ship is registering the hit",() => {
    let ship = board1.board[20].occupied;
    expect(ship.hits).toEqual(2);
})

test("rejecting a cell that has already been hit", () => {
    expect(board1.receiveHit([1,0])).toMatch("Target cell already hit");
})

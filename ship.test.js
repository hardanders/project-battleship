import { Ship } from "./ship.js";

const myShip = new Ship;
const myShip5 = new Ship(5);

test("for new ship to return a ship object", () => {
    expect(myShip.length).toBe(0);
});

test("dynamic ship size creation", () => {
    expect(myShip5.length).toBe(5);
})

test("to return true if sunk", () => {
   expect(myShip.isSunk()).not.toBeTruthy();
})

test("to increment hits on a ship", () => {
    myShip.hit();
    expect(myShip.hits).toBe(1);
})

test("to return true if sunk", () => {
   expect(myShip.isSunk()).toBeTruthy();
})
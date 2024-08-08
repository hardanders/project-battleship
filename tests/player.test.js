import { Player, Computer } from "../src/player.js";

test("returning Player object", () => {
    expect(new Player).toBeTruthy();
})

test("Player object and Computer player object", () => {
    let play1 = new Player;
    let play2 = new Computer;
    expect(play1.name).toMatch("Player 1");
    expect(play2.name).toMatch("Computer");
})
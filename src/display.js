var Display = {
    addBoardToScreen: function(player)
    {
        let holder = document.createElement('div');
        holder.classList.add('board-holder');
        let board = player.gameboard.board;
        for (let i=0; i<board.length; i++)
        {
            let newCell = document.createElement('div');
            newCell.classList.add(`cell${i}`);
            holder.append(newCell);
        }
        return document.body.appendChild(holder);
    }
}

export default Display;
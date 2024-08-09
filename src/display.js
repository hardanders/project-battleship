import _ from "lodash";

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
    },
    homepage: function() 
    {
        let frag = new DocumentFragment;
        let div = document.createElement('div');
        let banner = document.createElement('section');
        banner.id = "banner";
        let topText = document.createElement('h1');
        let bottomText = document.createElement('button');
        bottomText.id = 'header-bottom-text';
        topText.id = 'header-top-text';
        topText.textContent = "Would you like to play...";
        bottomText.textContent = "BATTLESHIP?"
        banner.appendChild(topText);
        banner.appendChild(bottomText);
        frag.appendChild(banner);
        document.body.appendChild(frag);
    },
    /*animation: function() 
    {
        const start = _.now();
        
        const timer = setInterval(() => {
            let elapsed = _.now() - start;

            if (timer <= 3000) {
                clearInterval(timer)
            };
            let top = document.getElementById('header-top-text');
            let bottom = document.getElementById('header-bottom-text');

        }, 20)
    }*/
}

export default Display;
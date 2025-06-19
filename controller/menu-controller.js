import cards_view from "../view/cards-view.js";
export default class menu_controller {
    
    constructor() {
        this.cardView = new cards_view;
        
    }
    
    createBoard(gridnumber) {
        // Sanitize the board before populating
        document.getElementById("cardContainer").innerHTML = "";
        
        let id = 0;
        // No need for super unique IDs
        // Gridnumber should always be even

        if (gridnumber % 2 == 0) {
            gridnumber*=gridnumber;
            for (let i = 0; i < gridnumber; i++) {
                this.cardView.createCard(i); 
            }
        }
        else if (gridnumber % 3 == 0) {
            // TODO: Refactor this later to make a odd-and-even board
            gridnumber = Math.sqrt(gridnumber)+1; gridnumber*=gridnumber;
            for (let i = 0; i < gridnumber; i++) {
                this.cardView.createCard(i);
            }
        }
        else {return console.error("invalid input, try again")}
    }




}
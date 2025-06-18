export default class cards_view {

    constructor() {
        this.cardContainer = document.createElement("div")
        this.frame = document.createElement("div"); this.frame.className("cardFrame");
    }

    createCard() {
        // Create a card here using the front, back and generated object to put in the middle
    }

    createFrame() {
        let a = document.createElement("div"); a.className = "innerFrame"; a.style.border = "3px solid #333"; 
        let b = document.createElement("div"); b.className = "outerFrame"; b.style.border = "3px solid #333";
        
        a.append(b);b.append(this.frame); this.frame.append(this.cardContainer);
        

    }

    backsideDrawing(card) {
        
    }

    frontsideDrawing() {

    }
}
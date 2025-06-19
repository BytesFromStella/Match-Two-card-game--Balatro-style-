export default class cards_view {

    constructor() {
        this.cardContainer = document.createElement("div"); this.cardContainer.id = "cardContainer"; 

        document.getElementById("container").append(this.cardContainer);
    }
    

    createCard(cardID, frontImage) {
        let card = document.createElement("div"); card.className = "cards";

        //// Delete later, tempoary styling
        card.style.width = "300px";
        card.style.height = "500px";
        card.stylebackgroundSize = "auto";
        ////

        let cardBackside = this.backsideDrawing(card);

        card.id = cardID || 0;

        return this.cardContainer.append(card);
    }

        
    createFrame() {
        let a = document.createElement("div"); a.className = "innerFrame"; a.style.border = "3px solid #333"; 
        let b = document.createElement("div"); b.className = "outerFrame"; b.style.border = "3px solid #333";
        this.frame = document.createElement("div"); this.frame.className = "cardFrame";
    
        this.frame.append(this.cardContainer.id); a.append(b); b.append(this.frame);
        
    }

    backsideDrawing(card, image) {
        image = image || "url('assets/Extremely accurate sans drawing!.png')"
        return card.style.backgroundImage = "url('assets/CardBackcover.png')";

    }

    frontsideDrawing(card, image) {
        image = image || "url('assets/Extremely accurate sans drawing!.png')"
        return card.style.backgroundImage = img;
    }
}
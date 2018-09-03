import { Injectable } from '@angular/core';
import { CardModel } from "~/set/card.model";

@Injectable()
export class SetService {

    public onTable = new Array<CardModel>();
    public onStaple = new Array<CardModel>();
    public setFound = new Array<CardModel>();
    public setNotFound = new Array<CardModel>();
    public setSetSelected = new Array<CardModel>();
    public setFoundSetStaple = new Array<CardModel>();

    private card1: CardModel;
    private card2: CardModel;
    private card3: CardModel;
    
    constructor() {
        this.startGame();
    }

    public newCardsAfterSetFound() {
        this.setFound.forEach(card => {
            const cardNr = this.onTable.indexOf(card);
            const cardInSet = this.onTable[cardNr];
            this.setFoundSetStaple.push(cardInSet);
         
            if (this.onStaple.length > 0 && this.onTable.length <= 12) {
                this.onTable[cardNr] = this.onStaple.pop();  
            } else {
                this.onTable.splice(cardNr, 1);
            }
        });
        this.setFound.length=0;
    }

    public startGame() {
        this.onStaple.length = 0;
        this.onTable.length = 0;
        this.createStaple();
        this.setOnTable();
    }

    private randomNr(cards:number):number {
        return Math.floor(Math.random() * cards);
    }

    private createStaple() {
        var orderedStaple = new Array();
        for (var nr=1;nr<=3;nr++){
            for (var color=1;color<=3;color++) {
                for (var shape=1;shape<=3;shape++){
                    for (var filling=1;filling<=3;filling++){
                        orderedStaple.push(new CardModel(color,nr,shape,filling));
                    }
                }
            }
        }
        // shake the staple
        for (var nr=81;nr>=1;nr--) {
            const cardNr = this.randomNr(nr);
            this.onStaple.push(orderedStaple[cardNr]);
            orderedStaple.splice(cardNr,1);
        }
    }

    public setOnTable() {
       for (var nr=1;nr<=12;nr++) {
         this.onTable.push(this.onStaple.pop());
       }
    }

    public addCardOnTable() {
        if (this.onStaple.length > 0 && !this.isThereSet()) {
            this.onTable.push(this.onStaple.pop());
        }
    }

    private getProperty(nr1: Number, nr2: Number) {
        if ((nr1 === 1 && nr2 === 2) || (nr1 === 2 && nr2 === 1)) {
            return 3;
        }
        if ((nr1 === 3 && nr2 === 2) || (nr1 === 2 && nr2 === 3)) {
            return 1;
        }
        return 2;
    }

    private createThirdCard(card1:CardModel, card2:CardModel) {
        const nr = card1.number === card2.number? card2.number: this.getProperty(card1.number, card2.number);
        const color = card1.color === card2.color? card2.color: this.getProperty(card1.color, card2.color);
        const shape = card1.shape === card2.shape? card2.shape: this.getProperty(card1.shape, card2.shape);
        const filling = card1.filling === card2.filling? card2.filling: this.getProperty(card1.filling, card2.filling);
        return new CardModel(color, nr, shape, filling);
    }

    private findCard(card: CardModel): CardModel {
        const nrOfCards = this.onTable.length;
        for (var cardNr=0; cardNr<nrOfCards; cardNr++) {
            if (card.filename === this.onTable[cardNr].filename) {
                return this.onTable[cardNr];
            }
        }
        return null;
    }

    public checkSetOnTable() {
        this.setFound.length = 0;
        this.setSetSelected.length = 0;
        var card1: CardModel = null; 
        var card2: CardModel = null;
        var card3: CardModel = null;
        const nrOfCards = this.onTable.length;
        for (var cardNr=0; cardNr<nrOfCards; cardNr++) {
            const card = this.onTable[cardNr];
            if (card.selected) {
                if (card1 === null) {
                    card1 = card;
                } else if (card2 === null) {
                    card2 = card;
                } else if (card3 === null) {
                    card3 = card;
                }
            }
        }
        if (card1 && card2 && card3) {
            if (this.checkSet(card1, card2, card3)) {
                card1.isInSet = true;
                card2.isInSet = true;
                card3.isInSet = true;
                this.setFound.push(card1);
                this.setFound.push(card2);
                this.setFound.push(card3);
            } else {
                card1.isNotSet = true;
                card2.isNotSet = true;
                card3.isNotSet = true;
            }
            this.setSetSelected.push(card1);
            this.setSetSelected.push(card2);
            this.setSetSelected.push(card3);
        }
    }

    public checkSet(card1:CardModel, card2:CardModel, card3: CardModel): boolean {
        const cardThird = this.createThirdCard(card1, card2);
        return card3.filename === cardThird.filename;
    }

    public isThereSet(): boolean {
        this.setFound.length = 0;
        this.card3 = null;
        this.onTable.forEach(card => card.setSelected(false));
        const nrOfCards = this.onTable.length;
        for (var cardNr=0; cardNr<nrOfCards; cardNr++) {
            this.card1 = this.onTable[cardNr];
            for (var cardNextNr=cardNr+1; cardNextNr<nrOfCards; cardNextNr++) {
                this.card2 = this.onTable[cardNextNr];
                this.card3 = this.findCard(this.createThirdCard(this.card1, this.card2));
                if (this.card3) {
                    return true;
                }
            }
        }  
        return false; 
    }

    public findSet() {
        if (this.isThereSet()) {
            this.card1.isInSet = this.card1.selected = true;
            this.card2.isInSet = this.card2.selected = true;
            this.card3.isInSet = this.card3.selected = true;
            this.setFound.push(this.card1);
            this.setFound.push(this.card2);
            this.setFound.push(this.card3);
        }
    }

    public threeCardsSelected():boolean {
        var countNrSelected = 0;
        this.onTable.forEach(card => {
            if (card.selected) {
                countNrSelected++;   
            }    
        });
        return countNrSelected === 3;
    }
     
}
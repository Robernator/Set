import { Component, OnInit } from "@angular/core";
import { SetService } from "~/set/set.service";
import { EventData } from "../../node_modules/tns-core-modules/ui/page/page";
import { CardModel } from "~/set/card.model";
import { GameService } from "~/game/game.service";
import { PlayerModel } from "~/game/player.model";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public setResulClass = '';
    public onTableClass = '';

    constructor(
        public setService:SetService,
        public gameService:GameService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onStartGame(args: EventData) {
        this.setResulClass = '';
        this.onTableClass = '';
        this.setService.startGame();   
    }

    onFindSet(args: EventData) {
        this.setService.findSet();   
    }

    isSetOnTable(args: EventData) {
        this.setService.checkSetOnTable();   
    }
  
    cardSelected(card: CardModel) {
        if (this.setService.threeCardsSelected()) {
            return;
        }
        card.setSelected(!card.selected);
        if (this.setService.threeCardsSelected()) {
            this.setService.checkSetOnTable();
            this.setResulClass = 'setResult';
            this.onTableClass = 'onTableClass';
            return;
        }
    }

    nextAfterSet(args:EventData) {
        this.setService.newCardsAfterSetFound();
    }

    addCard(args:EventData) {
        this.setService.addCardOnTable();
    }

    widthPercentage(): string {
        if (this.setService.onTable.length <= 12) {
            return '24%';
        } else if (this.setService.onTable.length > 12 && this.setService.onTable.length <= 20) {
            return '19%';
        } else if (this.setService.onTable.length > 20 && this.setService.onTable.length < 40) {
            return '14%';
        }   
    }

    getSetResultClass():string {
        return this.setResulClass;

    }

    getOnTableClass():string {
        return this.onTableClass;
    }

    pressSet(selectedPlayer: PlayerModel) {
        if (!selectedPlayer.blocked) {
            selectedPlayer.pressedSet = true;
            // set de rest blocked
            this.gameService.players.forEach(player => {
                if (selectedPlayer.name != player.name) {
                    player.pressedSet = false;
                    player.blocked = true;
                }                
            });
        }

    }
}

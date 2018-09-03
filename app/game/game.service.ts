import { Injectable } from "@angular/core";
import { PlayerModel, Gender } from "~/game/player.model";
import { SetService } from "~/set/set.service";

@Injectable()
export class GameService {
    public players = new Array<PlayerModel>();
    public gameStarted = false;

    constructor(private setService: SetService) {
        const playerRob = new PlayerModel('Rob');
        playerRob.image = '~/assets/player/if_Little_Boy_Yellow_525447.png';
        this.players.push(playerRob);
        const playerElly = new PlayerModel('Elly', Gender.female);
        playerElly.image = '~/assets/player/if_little_girl_black_570639.png';
        this.players.push(playerElly);
    }

    public startGame() {
        this.setService.startGame();  
        this.gameStarted = true;  
    }



}
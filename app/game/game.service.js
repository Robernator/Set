"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_model_1 = require("~/game/player.model");
var set_service_1 = require("~/set/set.service");
var GameService = /** @class */ (function () {
    function GameService(setService) {
        this.setService = setService;
        this.players = new Array();
        this.gameStarted = false;
        var playerRob = new player_model_1.PlayerModel('Rob');
        playerRob.image = '~/assets/player/if_Little_Boy_Yellow_525447.png';
        this.players.push(playerRob);
        var playerElly = new player_model_1.PlayerModel('Elly', player_model_1.Gender.female);
        playerElly.image = '~/assets/player/if_little_girl_black_570639.png';
        this.players.push(playerElly);
    }
    GameService.prototype.startGame = function () {
        this.setService.startGame();
        this.gameStarted = true;
    };
    GameService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [set_service_1.SetService])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FtZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLG9EQUEwRDtBQUMxRCxpREFBK0M7QUFHL0M7SUFJSSxxQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUhuQyxZQUFPLEdBQUcsSUFBSSxLQUFLLEVBQWUsQ0FBQztRQUNuQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUd2QixJQUFNLFNBQVMsR0FBRyxJQUFJLDBCQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsU0FBUyxDQUFDLEtBQUssR0FBRyxpREFBaUQsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixJQUFNLFVBQVUsR0FBRyxJQUFJLDBCQUFXLENBQUMsTUFBTSxFQUFFLHFCQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsVUFBVSxDQUFDLEtBQUssR0FBRyxpREFBaUQsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sK0JBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFoQlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUt1Qix3QkFBVTtPQUpqQyxXQUFXLENBb0J2QjtJQUFELGtCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsYXllck1vZGVsLCBHZW5kZXIgfSBmcm9tIFwifi9nYW1lL3BsYXllci5tb2RlbFwiO1xuaW1wb3J0IHsgU2V0U2VydmljZSB9IGZyb20gXCJ+L3NldC9zZXQuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2FtZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBwbGF5ZXJzID0gbmV3IEFycmF5PFBsYXllck1vZGVsPigpO1xuICAgIHB1YmxpYyBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXRTZXJ2aWNlOiBTZXRTZXJ2aWNlKSB7XG4gICAgICAgIGNvbnN0IHBsYXllclJvYiA9IG5ldyBQbGF5ZXJNb2RlbCgnUm9iJyk7XG4gICAgICAgIHBsYXllclJvYi5pbWFnZSA9ICd+L2Fzc2V0cy9wbGF5ZXIvaWZfTGl0dGxlX0JveV9ZZWxsb3dfNTI1NDQ3LnBuZyc7XG4gICAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllclJvYik7XG4gICAgICAgIGNvbnN0IHBsYXllckVsbHkgPSBuZXcgUGxheWVyTW9kZWwoJ0VsbHknLCBHZW5kZXIuZmVtYWxlKTtcbiAgICAgICAgcGxheWVyRWxseS5pbWFnZSA9ICd+L2Fzc2V0cy9wbGF5ZXIvaWZfbGl0dGxlX2dpcmxfYmxhY2tfNTcwNjM5LnBuZyc7XG4gICAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllckVsbHkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMuc2V0U2VydmljZS5zdGFydEdhbWUoKTsgIFxuICAgICAgICB0aGlzLmdhbWVTdGFydGVkID0gdHJ1ZTsgIFxuICAgIH1cblxuXG5cbn0iXX0=
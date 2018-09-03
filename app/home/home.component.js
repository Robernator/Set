"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var set_service_1 = require("~/set/set.service");
var game_service_1 = require("~/game/game.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(setService, gameService) {
        this.setService = setService;
        this.gameService = gameService;
        this.setResulClass = '';
        this.onTableClass = '';
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.onStartGame = function (args) {
        this.setResulClass = '';
        this.onTableClass = '';
        this.setService.startGame();
    };
    HomeComponent.prototype.onFindSet = function (args) {
        this.setService.findSet();
    };
    HomeComponent.prototype.isSetOnTable = function (args) {
        this.setService.checkSetOnTable();
    };
    HomeComponent.prototype.cardSelected = function (card) {
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
    };
    HomeComponent.prototype.nextAfterSet = function (args) {
        this.setService.newCardsAfterSetFound();
    };
    HomeComponent.prototype.addCard = function (args) {
        this.setService.addCardOnTable();
    };
    HomeComponent.prototype.widthPercentage = function () {
        if (this.setService.onTable.length <= 12) {
            return '24%';
        }
        else if (this.setService.onTable.length > 12 && this.setService.onTable.length <= 20) {
            return '19%';
        }
        else if (this.setService.onTable.length > 20 && this.setService.onTable.length < 40) {
            return '14%';
        }
    };
    HomeComponent.prototype.getSetResultClass = function () {
        return this.setResulClass;
    };
    HomeComponent.prototype.getOnTableClass = function () {
        return this.onTableClass;
    };
    HomeComponent.prototype.pressSet = function (selectedPlayer) {
        if (!selectedPlayer.blocked) {
            selectedPlayer.pressedSet = true;
            // set de rest blocked
            this.gameService.players.forEach(function (player) {
                if (selectedPlayer.name != player.name) {
                    player.pressedSet = false;
                    player.blocked = true;
                }
            });
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [set_service_1.SetService,
            game_service_1.GameService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpREFBK0M7QUFHL0Msb0RBQWtEO0FBUWxEO0lBS0ksdUJBQ1csVUFBcUIsRUFDckIsV0FBdUI7UUFEdkIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUwzQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUtyQixxREFBcUQ7SUFDekQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFlO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxJQUFlO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxJQUFlO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxJQUFlO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDO1lBQ25DLE1BQU0sQ0FBQztRQUNYLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLElBQWM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsSUFBYztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckYsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEYsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBRTlCLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxjQUEyQjtRQUNoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzFCLGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLHNCQUFzQjtZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO2dCQUNuQyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFFTCxDQUFDO0lBakZRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBT3dCLHdCQUFVO1lBQ1QsMEJBQVc7T0FQekIsYUFBYSxDQWtGekI7SUFBRCxvQkFBQztDQUFBLEFBbEZELElBa0ZDO0FBbEZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2V0U2VydmljZSB9IGZyb20gXCJ+L3NldC9zZXQuc2VydmljZVwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy90bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgQ2FyZE1vZGVsIH0gZnJvbSBcIn4vc2V0L2NhcmQubW9kZWxcIjtcbmltcG9ydCB7IEdhbWVTZXJ2aWNlIH0gZnJvbSBcIn4vZ2FtZS9nYW1lLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBsYXllck1vZGVsIH0gZnJvbSBcIn4vZ2FtZS9wbGF5ZXIubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgc2V0UmVzdWxDbGFzcyA9ICcnO1xuICAgIHB1YmxpYyBvblRhYmxlQ2xhc3MgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgc2V0U2VydmljZTpTZXRTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZ2FtZVNlcnZpY2U6R2FtZVNlcnZpY2UpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgb25TdGFydEdhbWUoYXJnczogRXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0UmVzdWxDbGFzcyA9ICcnO1xuICAgICAgICB0aGlzLm9uVGFibGVDbGFzcyA9ICcnO1xuICAgICAgICB0aGlzLnNldFNlcnZpY2Uuc3RhcnRHYW1lKCk7ICAgXG4gICAgfVxuXG4gICAgb25GaW5kU2V0KGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLnNldFNlcnZpY2UuZmluZFNldCgpOyAgIFxuICAgIH1cblxuICAgIGlzU2V0T25UYWJsZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgdGhpcy5zZXRTZXJ2aWNlLmNoZWNrU2V0T25UYWJsZSgpOyAgIFxuICAgIH1cbiAgXG4gICAgY2FyZFNlbGVjdGVkKGNhcmQ6IENhcmRNb2RlbCkge1xuICAgICAgICBpZiAodGhpcy5zZXRTZXJ2aWNlLnRocmVlQ2FyZHNTZWxlY3RlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FyZC5zZXRTZWxlY3RlZCghY2FyZC5zZWxlY3RlZCk7XG4gICAgICAgIGlmICh0aGlzLnNldFNlcnZpY2UudGhyZWVDYXJkc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VydmljZS5jaGVja1NldE9uVGFibGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0UmVzdWxDbGFzcyA9ICdzZXRSZXN1bHQnO1xuICAgICAgICAgICAgdGhpcy5vblRhYmxlQ2xhc3MgPSAnb25UYWJsZUNsYXNzJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5leHRBZnRlclNldChhcmdzOkV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLnNldFNlcnZpY2UubmV3Q2FyZHNBZnRlclNldEZvdW5kKCk7XG4gICAgfVxuXG4gICAgYWRkQ2FyZChhcmdzOkV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLnNldFNlcnZpY2UuYWRkQ2FyZE9uVGFibGUoKTtcbiAgICB9XG5cbiAgICB3aWR0aFBlcmNlbnRhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuc2V0U2VydmljZS5vblRhYmxlLmxlbmd0aCA8PSAxMikge1xuICAgICAgICAgICAgcmV0dXJuICcyNCUnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0U2VydmljZS5vblRhYmxlLmxlbmd0aCA+IDEyICYmIHRoaXMuc2V0U2VydmljZS5vblRhYmxlLmxlbmd0aCA8PSAyMCkge1xuICAgICAgICAgICAgcmV0dXJuICcxOSUnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0U2VydmljZS5vblRhYmxlLmxlbmd0aCA+IDIwICYmIHRoaXMuc2V0U2VydmljZS5vblRhYmxlLmxlbmd0aCA8IDQwKSB7XG4gICAgICAgICAgICByZXR1cm4gJzE0JSc7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICBnZXRTZXRSZXN1bHRDbGFzcygpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFJlc3VsQ2xhc3M7XG5cbiAgICB9XG5cbiAgICBnZXRPblRhYmxlQ2xhc3MoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5vblRhYmxlQ2xhc3M7XG4gICAgfVxuXG4gICAgcHJlc3NTZXQoc2VsZWN0ZWRQbGF5ZXI6IFBsYXllck1vZGVsKSB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRQbGF5ZXIuYmxvY2tlZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRQbGF5ZXIucHJlc3NlZFNldCA9IHRydWU7XG4gICAgICAgICAgICAvLyBzZXQgZGUgcmVzdCBibG9ja2VkXG4gICAgICAgICAgICB0aGlzLmdhbWVTZXJ2aWNlLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFBsYXllci5uYW1lICE9IHBsYXllci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5wcmVzc2VkU2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5ibG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cbiJdfQ==
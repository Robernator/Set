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
        console.log('pressSet');
        if (!selectedPlayer.blocked) {
            selectedPlayer.setPressedSet(true);
            // set de rest blocked
            this.gameService.players.forEach(function (player) {
                if (selectedPlayer.name != player.name) {
                    player.setPressedSet(false);
                    player.setBlocked(true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpREFBK0M7QUFHL0Msb0RBQWtEO0FBUWxEO0lBS0ksdUJBQ1csVUFBcUIsRUFDckIsV0FBdUI7UUFEdkIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUwzQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUtyQixxREFBcUQ7SUFDekQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFlO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxJQUFlO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxJQUFlO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxJQUFlO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDO1lBQ25DLE1BQU0sQ0FBQztRQUNYLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLElBQWM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsSUFBYztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckYsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEYsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBRTlCLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxjQUEyQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDMUIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxzQkFBc0I7WUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtnQkFDbkMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDckMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUIsTUFBTSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUVMLENBQUM7SUFsRlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FPd0Isd0JBQVU7WUFDVCwwQkFBVztPQVB6QixhQUFhLENBbUZ6QjtJQUFELG9CQUFDO0NBQUEsQUFuRkQsSUFtRkM7QUFuRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTZXRTZXJ2aWNlIH0gZnJvbSBcIn4vc2V0L3NldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5pbXBvcnQgeyBDYXJkTW9kZWwgfSBmcm9tIFwifi9zZXQvY2FyZC5tb2RlbFwiO1xuaW1wb3J0IHsgR2FtZVNlcnZpY2UgfSBmcm9tIFwifi9nYW1lL2dhbWUuc2VydmljZVwiO1xuaW1wb3J0IHsgUGxheWVyTW9kZWwgfSBmcm9tIFwifi9nYW1lL3BsYXllci5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBzZXRSZXN1bENsYXNzID0gJyc7XG4gICAgcHVibGljIG9uVGFibGVDbGFzcyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBzZXRTZXJ2aWNlOlNldFNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBnYW1lU2VydmljZTpHYW1lU2VydmljZSkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBvblN0YXJ0R2FtZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgdGhpcy5zZXRSZXN1bENsYXNzID0gJyc7XG4gICAgICAgIHRoaXMub25UYWJsZUNsYXNzID0gJyc7XG4gICAgICAgIHRoaXMuc2V0U2VydmljZS5zdGFydEdhbWUoKTsgICBcbiAgICB9XG5cbiAgICBvbkZpbmRTZXQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0U2VydmljZS5maW5kU2V0KCk7ICAgXG4gICAgfVxuXG4gICAgaXNTZXRPblRhYmxlKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLnNldFNlcnZpY2UuY2hlY2tTZXRPblRhYmxlKCk7ICAgXG4gICAgfVxuICBcbiAgICBjYXJkU2VsZWN0ZWQoY2FyZDogQ2FyZE1vZGVsKSB7XG4gICAgICAgIGlmICh0aGlzLnNldFNlcnZpY2UudGhyZWVDYXJkc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYXJkLnNldFNlbGVjdGVkKCFjYXJkLnNlbGVjdGVkKTtcbiAgICAgICAgaWYgKHRoaXMuc2V0U2VydmljZS50aHJlZUNhcmRzU2VsZWN0ZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTZXJ2aWNlLmNoZWNrU2V0T25UYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRSZXN1bENsYXNzID0gJ3NldFJlc3VsdCc7XG4gICAgICAgICAgICB0aGlzLm9uVGFibGVDbGFzcyA9ICdvblRhYmxlQ2xhc3MnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dEFmdGVyU2V0KGFyZ3M6RXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0U2VydmljZS5uZXdDYXJkc0FmdGVyU2V0Rm91bmQoKTtcbiAgICB9XG5cbiAgICBhZGRDYXJkKGFyZ3M6RXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0U2VydmljZS5hZGRDYXJkT25UYWJsZSgpO1xuICAgIH1cblxuICAgIHdpZHRoUGVyY2VudGFnZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5zZXRTZXJ2aWNlLm9uVGFibGUubGVuZ3RoIDw9IDEyKSB7XG4gICAgICAgICAgICByZXR1cm4gJzI0JSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXRTZXJ2aWNlLm9uVGFibGUubGVuZ3RoID4gMTIgJiYgdGhpcy5zZXRTZXJ2aWNlLm9uVGFibGUubGVuZ3RoIDw9IDIwKSB7XG4gICAgICAgICAgICByZXR1cm4gJzE5JSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXRTZXJ2aWNlLm9uVGFibGUubGVuZ3RoID4gMjAgJiYgdGhpcy5zZXRTZXJ2aWNlLm9uVGFibGUubGVuZ3RoIDwgNDApIHtcbiAgICAgICAgICAgIHJldHVybiAnMTQlJztcbiAgICAgICAgfSAgIFxuICAgIH1cblxuICAgIGdldFNldFJlc3VsdENsYXNzKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0UmVzdWxDbGFzcztcblxuICAgIH1cblxuICAgIGdldE9uVGFibGVDbGFzcygpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uVGFibGVDbGFzcztcbiAgICB9XG5cbiAgICBwcmVzc1NldChzZWxlY3RlZFBsYXllcjogUGxheWVyTW9kZWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZXNzU2V0Jyk7XG4gICAgICAgIGlmICghc2VsZWN0ZWRQbGF5ZXIuYmxvY2tlZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRQbGF5ZXIuc2V0UHJlc3NlZFNldCh0cnVlKTtcbiAgICAgICAgICAgIC8vIHNldCBkZSByZXN0IGJsb2NrZWRcbiAgICAgICAgICAgIHRoaXMuZ2FtZVNlcnZpY2UucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkUGxheWVyLm5hbWUgIT0gcGxheWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNldFByZXNzZWRTZXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2V0QmxvY2tlZCAodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG59XG4iXX0=
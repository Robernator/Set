"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerModel = /** @class */ (function () {
    function PlayerModel(name_, gender_) {
        if (gender_ === void 0) { gender_ = Gender.male; }
        this.pressedSet = false;
        this.name = name_;
        this.gender = gender_;
    }
    PlayerModel.prototype.setPressedSet = function (_pressSet) {
        this.pressedSet = _pressSet;
        if (this.pressedSet === true) {
            this.styleClass = 'pressedSet';
        }
        else {
            this.styleClass = '';
        }
    };
    PlayerModel.prototype.setBlocked = function (_isBlocked) {
        this.blocked = _isBlocked;
        if (this.blocked === true) {
            this.styleClass = 'blockedSet';
        }
        else {
            this.styleClass = '';
        }
    };
    return PlayerModel;
}());
exports.PlayerModel = PlayerModel;
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender = exports.Gender || (exports.Gender = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxheWVyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFRSSxxQkFBWSxLQUFZLEVBQUUsT0FBNEI7UUFBNUIsd0JBQUEsRUFBQSxVQUFpQixNQUFNLENBQUMsSUFBSTtRQUh0RCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSWYsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxTQUFrQjtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7UUFDbkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsVUFBb0I7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1FBQ25DLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLGtDQUFXO0FBZ0N4QixJQUFZLE1BR1g7QUFIRCxXQUFZLE1BQU07SUFDZCxtQ0FBSSxDQUFBO0lBQ0osdUNBQU0sQ0FBQTtBQUNWLENBQUMsRUFIVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFHakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkTW9kZWwgfSBmcm9tIFwifi9zZXQvY2FyZC5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyTW9kZWwge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzZXRzOiBDYXJkTW9kZWxbXTtcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGdlbmRlcjogR2VuZGVyO1xuICAgIHByZXNzZWRTZXQgPSBmYWxzZTtcbiAgICBibG9ja2VkOiBib29sZWFuO1xuICAgIHN0eWxlQ2xhc3M6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihuYW1lXzpzdHJpbmcsIGdlbmRlcl86R2VuZGVyID0gR2VuZGVyLm1hbGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZV87XG4gICAgICAgIHRoaXMuZ2VuZGVyID0gZ2VuZGVyXztcbiAgICB9XG5cbiAgICBzZXRQcmVzc2VkU2V0KF9wcmVzc1NldDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnByZXNzZWRTZXQgPSBfcHJlc3NTZXQ7XG4gICAgICAgIGlmICh0aGlzLnByZXNzZWRTZXQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlQ2xhc3MgPSAncHJlc3NlZFNldCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlQ2xhc3MgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEJsb2NrZWQoX2lzQmxvY2tlZCA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ibG9ja2VkID0gX2lzQmxvY2tlZDtcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZUNsYXNzID0gJ2Jsb2NrZWRTZXQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdHlsZUNsYXNzID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIEdlbmRlciB7XG4gICAgbWFsZSxcbiAgICBmZW1hbGVcbn0iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerModel = /** @class */ (function () {
    function PlayerModel(name_, gender_) {
        if (gender_ === void 0) { gender_ = Gender.male; }
        this.pressedSet = false;
        this.name = name_;
        this.gender = gender_;
    }
    return PlayerModel;
}());
exports.PlayerModel = PlayerModel;
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender = exports.Gender || (exports.Gender = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxheWVyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFPSSxxQkFBWSxLQUFZLEVBQUUsT0FBNEI7UUFBNUIsd0JBQUEsRUFBQSxVQUFpQixNQUFNLENBQUMsSUFBSTtRQUZ0RCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR2YsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxrQ0FBVztBQWF4QixJQUFZLE1BR1g7QUFIRCxXQUFZLE1BQU07SUFDZCxtQ0FBSSxDQUFBO0lBQ0osdUNBQU0sQ0FBQTtBQUNWLENBQUMsRUFIVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFHakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkTW9kZWwgfSBmcm9tIFwifi9zZXQvY2FyZC5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyTW9kZWwge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzZXRzOiBDYXJkTW9kZWxbXTtcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGdlbmRlcjogR2VuZGVyO1xuICAgIHByZXNzZWRTZXQgPSBmYWxzZTtcbiAgICBibG9ja2VkOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKG5hbWVfOnN0cmluZywgZ2VuZGVyXzpHZW5kZXIgPSBHZW5kZXIubWFsZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXztcbiAgICAgICAgdGhpcy5nZW5kZXIgPSBnZW5kZXJfO1xuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gR2VuZGVyIHtcbiAgICBtYWxlLFxuICAgIGZlbWFsZVxufSJdfQ==